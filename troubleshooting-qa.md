# Apollo 專案問題排查與解決方案 Q&A

## 問題 1: 點擊 Edit 按鈕出現 JSON 解析錯誤

### 錯誤訊息
```
Error: Error fetching page from Apostrophe CMS: Unexpected token '<', "<!DOCTYPE "... is not valid JSON
```

### 問題原因
後端 Apostrophe CMS 沒有正確設定 External Front API，導致前端 Astro 請求 API 時收到 HTML 而不是 JSON。

### 解決方案

#### 步驟 1: 設定 External Front Key

修改 `backend/modules/@apostrophecms/express/index.js`：

```javascript
export default {
  options: {
    session: {
      secret: undefined  // 建議設定一個安全的 secret
    },
    externalFrontKey: process.env.APOS_EXTERNAL_FRONT_KEY
  }
};
```

**注意**：必須是 `externalFrontKey` 而不是 `aposExternalFront.key`

#### 步驟 2: 啟用 Template 模組

修改 `backend/app.js`，在 modules 中添加：

```javascript
export default apostrophe({
  root: import.meta,
  shortName: 'apollo',
  modules: {
    '@apostrophecms/vite': {},
    '@apostrophecms/template': {},  // 添加這一行
    // ... 其他模組
  }
});
```

#### 步驟 3: 確認環境變數

確保 `backend/.env` 檔案包含：

```env
APOS_EXTERNAL_FRONT_KEY=dev
PORT=3025
```

前後端的 `APOS_EXTERNAL_FRONT_KEY` 必須一致。

---

## 問題 2: Missing widget type 錯誤

### 錯誤訊息
```
WARNING: widget type button exists in your database but is not configured.
invalid: Missing widget type
```

### 問題原因
資料庫中存在某個 widget 類型（例如 `button`），但專案中沒有對應的模組配置。

### 解決方案

#### 步驟 1: 在後端註冊 Widget

修改 `backend/app.js`：

```javascript
modules: {
  // ... 其他模組
  'button-widget': {},  // 添加缺失的 widget
}
```

#### 步驟 2: 建立後端 Widget 模組

建立 `backend/modules/button-widget/index.js`：

```javascript
export default {
  extend: '@apostrophecms/widget-type',
  options: {
    label: 'Button',
    icon: 'button-cursor-icon'
  },
  fields: {
    add: {
      label: {
        type: 'string',
        label: 'Button Label',
        required: true
      },
      url: {
        type: 'url',
        label: 'Button URL',
        required: true
      },
      style: {
        type: 'select',
        label: 'Button Style',
        choices: [
          { label: 'Primary', value: 'primary' },
          { label: 'Secondary', value: 'secondary' }
        ],
        def: 'primary'
      }
    }
  }
};
```

#### 步驟 3: 建立前端 Widget 元件

建立 `frontend/src/widgets/ButtonWidget.astro`：

```astro
---
const { widget } = Astro.props;
const { label, url, style = 'primary' } = widget;
const styleClass = style === 'primary' ? 'button is-primary' : 'button is-secondary';
---

<div class="button-widget">
  <a href={url} class={styleClass}>
    {label}
  </a>
</div>

<style>
  .button-widget {
    margin: 1rem 0;
  }
</style>
```

#### 步驟 4: 註冊前端 Widget

修改 `frontend/src/widgets/index.js`：

```javascript
import ButtonWidget from './ButtonWidget.astro';

const widgetComponents = {
  // ... 其他 widgets
  'button': ButtonWidget,
};
```

---

## 問題 3: Port 被佔用無法啟動

### 錯誤訊息
```
Error: listen EADDRINUSE: address already in use :::3025
```

### 問題原因
之前的 Node.js 程序沒有正確關閉，仍佔用 port 3025 或 4025。

### 解決方案

#### 方法 1: 停止所有 Node 程序（快速但會關閉所有 Node 應用）

```powershell
Get-Process node -ErrorAction SilentlyContinue | Stop-Process -Force
```

#### 方法 2: 只停止特定 Port 的程序（推薦）

```powershell
# 停止 3025 和 4025 port 的程序
$ports = @(3025, 4025)
foreach ($port in $ports) {
    $procIds = netstat -ano | Select-String ":$port\s" | ForEach-Object { 
        ($_ -split '\s+')[-1] 
    } | Where-Object { 
        $_ -match '^\d+$' -and $_ -ne "0" 
    } | Select-Object -Unique
    
    foreach ($procId in $procIds) {
        Write-Host "停止 port $port 的程序 ID: $procId"
        Get-Process -Id $procId -ErrorAction SilentlyContinue | Stop-Process -Force
    }
}
```

#### 方法 3: 檢查特定 Port 狀態

```powershell
# 檢查哪些程序佔用 3025 和 4025
netstat -ano | Select-String -Pattern ":3025|:4025" | Select-String -Pattern "LISTENING"
```

---

## 問題 4: 如何同時啟動前後台

### 解決方案

#### 使用 PowerShell 指令（無需安裝套件）

在專案根目錄執行：

```powershell
Start-Process powershell -ArgumentList "-NoExit", "-Command", "npm run dev-backend"
Start-Process powershell -ArgumentList "-NoExit", "-Command", "npm run dev-frontend"
```

這會開啟兩個新的 PowerShell 視窗分別執行前後台。

#### 使用 npm run dev（需要安裝 concurrently）

1. 先安裝相依套件：
```powershell
npm install
```

2. 然後執行：
```powershell
npm run dev
```

這會在同一個終端中同時啟動前後台，並用不同顏色區分輸出。

---

## 問題 5: Nodemon 重啟循環問題

### 錯誤訊息
```
[nodemon] app crashed - waiting for file changes before starting...
[nodemon] restarting due to changes...
```

### 問題原因
檔案變更觸發 nodemon 自動重啟，但啟動失敗後又偵測到檔案變更，陷入循環。

### 解決方案

1. 停止所有 Node 程序
2. 確認所有變更都已儲存
3. 確保沒有 Port 佔用問題
4. 重新啟動後端服務

```powershell
# 停止所有 node 程序
Get-Process node -ErrorAction SilentlyContinue | Stop-Process -Force

# 等待幾秒
Start-Sleep -Seconds 2

# 重新啟動
cd backend
npm run dev
```

---

## 除錯技巧

### 檢查後端 API 是否正常

```powershell
# 測試 API 端點（需要正確的 header）
curl -H "apos-external-front-key: dev" http://localhost:3025/api/v1/@apostrophecms/page/:home
```

### 檢查前後台服務狀態

```powershell
# 檢查 3025 (後端) 和 4025 (前端) 是否在監聽
netstat -ano | Select-String -Pattern "LISTENING" | Select-String -Pattern "3025|4025"
```

### 查看後端終端輸出

注意以下關鍵訊息：
- `Listening at http://localhost:3025` - 後端成功啟動
- `WARNING: widget type X exists in your database` - 缺少 widget 配置
- `Error: listen EADDRINUSE` - Port 被佔用

### 查看前端終端輸出

注意以下關鍵訊息：
- 前端啟動成功會顯示 local 和 network 網址
- `[ERROR] Error fetching page` - 後端連線問題

---

## 完整配置檢查清單

啟動專案前，確認以下項目：

- [ ] `backend/.env` 包含 `APOS_EXTERNAL_FRONT_KEY=dev`
- [ ] `backend/modules/@apostrophecms/express/index.js` 設定了 `externalFrontKey`
- [ ] `backend/app.js` 包含 `@apostrophecms/template` 模組
- [ ] 所有必要的 widget 都已在 `backend/app.js` 中註冊
- [ ] Port 3025 和 4025 沒有被佔用
- [ ] MongoDB 連線正常
- [ ] 前後端的 `APOS_EXTERNAL_FRONT_KEY` 值一致
