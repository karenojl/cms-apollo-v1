# Apollo Starter Kit for ApostropheCMS + Astro 整合

**打造快如閃電的網站，並提供內容團隊真正想要使用的編輯體驗。**

這是一個生產就緒的範本，結合 [ApostropheCMS](https://docs.apostrophecms.org/) 作為無頭後端與 [Astro](https://astro.build/) 作為現代前端框架。此範本包含精美的設計系統和豐富的內容功能，完全免費且開源。

## ✨ 特色亮點

- **🚀 無頭 CMS 與前端整合** - 完整的 ApostropheCMS 管理介面及情境式編輯
- **⚡ 現代化前端** - Astro 提供最佳效能和開發者體驗  
- **🎨 生產級樣式** - 內建精美的 Bulma 設計系統
- **📱 完全響應式** - 行動優先的設計方法，符合現代網頁標準
- **💰 完全免費** - 無授權費用，適合任何專案規模

## ApostropheCMS + Astro Starter Kits

**選擇適合您專案的基礎：**

## 🌟 Apollo Starter Kit（本專案）
**適合您如果您想要：** 包含精美設計的生產就緒基礎

- **生產就緒設計**：完整的 Bulma 設計系統與現代樣式
- **豐富功能集**：進階小工具、版面配置和預先樣式化的元件
- **更快上市時間**：以最少的額外樣式啟動專業網站
- **內容豐富的網站**：內建部落格、作者關係和內容管理功能
- **最適合**：想專注於內容和功能而非從頭設計的團隊

## 🎯 [Astro Essentials Starter Kit](https://github.com/apostrophecms/starter-kit-astro-essentials)
**適合您如果您想要：** 乾淨、最小化的基礎來建構您自己的設計系統

- **最小化且不帶意見**：基本建構區塊，不強加設計決策
- **核心元件**：基本頁面類型、必要小工具和乾淨的架構  
- **最大靈活性**：建構您自己的樣式方法和元件函式庫
- **學習重點**：從頭開始理解 ApostropheCMS + Astro 整合
- **最適合**：想要完全創意控制和自訂設計系統的開發人員

---

**準備好使用企業功能了嗎？** [升級到 Apollo Pro](https://apostrophecms.com/contact-us) 以獲得進階權限、自動翻譯、SEO 優化、文件版本控制等專業功能。

## 目錄
<!-- TOC -->
- [Apollo Starter Kit for ApostropheCMS + Astro 整合](#apollo-starter-kit-for-apostrophecms--astro-整合)
  - [✨ 特色亮點](#-特色亮點)
  - [ApostropheCMS + Astro Starter Kits](#apostrophecms--astro-starter-kits)
  - [🌟 Apollo Starter Kit（本專案）](#-apollo-starter-kit本專案)
  - [🎯 Astro Essentials Starter Kit](#-astro-essentials-starter-kit)
  - [目錄](#目錄)
  - [簡介](#簡介)
  - [🚀 開始使用](#-開始使用)
    - [必要條件](#必要條件)
    - [快速開始](#快速開始)
    - [替代方案：空白資料庫設定](#替代方案空白資料庫設定)
  - [🏗️ 專案架構](#️-專案架構)
    - [運作方式](#運作方式)
    - [專案結構](#專案結構)
    - [給 ApostropheCMS 開發人員](#給-apostrophecms-開發人員)
    - [給 Astro 開發人員](#給-astro-開發人員)
    - [路由與範本](#路由與範本)
    - [小工具靈活性](#小工具靈活性)
    - [設定注意事項](#設定注意事項)
  - [🌟 功能與小工具](#-功能與小工具)
    - [小工具](#小工具)
    - [內容片段](#內容片段)
    - [頁面](#頁面)
  - [🖼️ 圖片輔助函式](#️-圖片輔助函式)
    - [概述](#概述)
    - [使用圖片關聯](#使用圖片關聯)
    - [使用直接附件](#使用直接附件)
    - [圖片裁切與尺寸](#圖片裁切與尺寸)
    - [使用焦點](#使用焦點)
    - [核心函式參考](#核心函式參考)
  - [🖌️ 主題設定](#️-主題設定)
    - [自訂步驟](#自訂步驟)
    - [範例：覆寫常用變數](#範例覆寫常用變數)
    - [完整變數清單](#完整變數清單)
    - [注意事項](#注意事項)
    - [疑難排解](#疑難排解)
  - [⚙️ 套件指令](#️-套件指令)
    - [根目錄 `package.json` 指令](#根目錄-packagejson-指令)
    - [Frontend 資料夾指令](#frontend-資料夾指令)
    - [Backend 資料夾指令](#backend-資料夾指令)
  - [🚀 部署到生產環境](#-部署到生產環境)
    - [**使用 ApostropheCMS 托管（建議）**](#使用-apostrophecms-托管建議)
    - [**使用第三方托管**](#使用第三方托管)
  - [💎 準備好了解更多？](#-準備好了解更多)
    - [🚀 **Apollo Pro 功能**](#-apollo-pro-功能)
  - [🚑 需要協助？](#-需要協助)
  - [📚 了解更多](#-了解更多)
  - [授權](#授權)


## 簡介
整體而言，本專案使用 ApostropheCMS 作為無頭後端，並以 Astro 作為前端。與典型的無頭 ApostropheCMS 使用方式不同的是，在 Astro 前端專案中加入了 [apostrophe-astro](https://github.com/apostrophecms/apostrophe-astro) 套件。這使得能完整使用 ApostropheCMS 管理介面，包括情境式編輯。同時，此套件也大幅自動化並簡化了從 ApostropheCMS 後端提取內容的過程，無需在程式碼中撰寫 REST API 呼叫。

## 🚀 開始使用

### 必要條件
**必須：**
- Node.js v20 或更新版本（建議使用 v22）
- MongoDB v6.0 或更新版本（本機伺服器或 Atlas）。請參閱 [ApostropheCMS 文件](https://docs.apostrophecms.org/guide/development-setup.html)瞭解設定方式。

**Windows 使用者：**
- Apostrophe 開發需要 Windows Subsystem for Linux 2（WSL2）。這確保了圖片處理工具和檔案系統操作的一致性。從 [Microsoft](https://learn.microsoft.com/zh-tw/windows/wsl/install) 和我們的[文件](https://docs.apostrophecms.org/cookbook/windows-development.html)了解更多關於設定 WSL2 的資訊。

### 快速開始

位於 `backend` 和 `frontend` 資料夾中的程式碼庫應被視為相互連結但獨立的專案。

> **📌 相依性管理注意事項**
> 
> 此 starter kit 將 `package-lock.json` 放在 `.gitignore` 中，以避免開發期間的合併衝突。
> 
> **生產環境使用：** 從 `backend/` 和 `frontend/` 資料夾的 `.gitignore` 中移除 `package-lock.json`，並提交鎖定檔案以鎖定您的相依套件。這確保穩定、可重現的建構。當您準備更新相依套件時，在每個專案資料夾中執行 `npm update`，並提交更新後的鎖定檔案。

為簡化相依性管理，此專案在根目錄包含數個便利指令。當您在根目錄執行 `npm install` 時，`postinstall` 指令會自動為 `frontend` 和 `backend` 資料夾安裝相依套件。

1. **安裝相依套件**
   ```bash
   npm install
   ```

2. **載入起始內容**（選用，但建議使用）

   ```bash
   npm run load-starter-content
   ```
   這會提取起始資料庫和媒體檔案。系統會提示您設定管理員密碼。


3. **啟動開發伺服器**
   開啟兩個終端機：
   - **Mac/Linux 使用者**：一個終端機在 `frontend` 資料夾，一個在 `backend` 資料夾
   - **Windows 使用者**：`backend` 資料夾使用 WSL 終端機，`frontend` 資料夾可使用 WSL 或 Windows 終端機

   ```bash
   # 終端機 1 - Backend（Windows 上使用 WSL）
   cd backend && npm run dev

   # 終端機 2 - Frontend
   cd frontend && npm run dev
   ```

   > **就是這樣！**`npm run dev` 指令會自動處理前端和後端之間的驗證，在開發模式下將 `APOS_EXTERNAL_FRONT_KEY` 設定為 "dev"。對於生產環境或當您使用不同指令啟動前端或後端時，您必須為兩者設定此環境變數為相同的值。

   **選用：** 如果在不同的伺服器/連接埠上執行後端，請設定前端的後端 URL：
   ```bash
   # 僅在 frontend 終端機中
   export APOS_HOST=your-backend-url
   ```

您的網站將在 `http://localhost:4321`（Astro 前端）可用。ApostropheCMS 後端將在 `http://localhost:3000` 可用，但它只會顯示是否已連線到 Astro 前端的通知。在大多數情況下，您不需要存取此頁面。

> **注意：** Astro 在開發模式下對專案設定的要求較寬鬆。在部署之前，在 `frontend` 資料夾中執行 `npm run build` 接著 `npm run preview` 以測試生產環境行為。我們不建議在開發期間使用根目錄的 `npm run serve-frontend` 指令 - 它用於 ApostropheCMS 托管。

### 替代方案：空白資料庫設定
⚠️ 如果您偏好從空白資料庫開始而不是起始內容，您需要新增管理員使用者：

```bash
cd backend
node app @apostrophecms/user:add admin admin
```
這會建立一個名為 `admin` 且具有正確權限的使用者。系統會要求您輸入密碼。

---

## 🏗️ 專案架構

### 運作方式
本專案使用 ApostropheCMS 作為無頭後端，並以 Astro 作為前端。與典型無頭設定不同的是，在 Astro 前端專案中使用了 [apostrophe-astro](https://github.com/apostrophecms/apostrophe-astro) 套件。這使得能完整使用 ApostropheCMS 管理介面，包括情境式編輯，同時大幅自動化從後端提取內容的過程，無需撰寫 REST API 呼叫。

### 專案結構
```
├── backend/               # ApostropheCMS 應用程式
│   ├── modules/           # 自訂模組（頁面、內容片段、小工具）
│   ├── app.js             # 主要設定
│   ├── package.json       # ApostropheCMS 專用指令
│   └── ...
├── frontend/              # Astro 應用程式
│   ├── src/
│   │   ├── pages/         # 單一 [...slug].astro 路由
│   │   ├── templates/     # 頁面範本
│   │   ├── widgets/       # 小工具範本
│   │   └── components/    # Astro 元件
│   ├── astro.config.mjs   # Astro 設定
│   ├── package.json       # Astro 專用指令
│   └── ...
└── README.md              # 本檔案
└── package.json           # 整個專案指令
```

### 給 ApostropheCMS 開發人員

如果您之前使用過 ApostropheCMS，後端應該看起來很熟悉。頁面、內容片段和小工具的自訂模組位於 `modules` 資料夾中，核心模組設定位於 `modules/@apostrophecms`。

**保持不變的部分：**
- `app.js` 中的模組註冊
- 頁面類型加入到 `modules/@apostrophecms/page/index.js`
- 大部分用於管理介面、請求路由和 MongoDB 互動的[模組設定設定](https://docs.apostrophecms.org/reference/module-api/module-overview.html#module-configuration)

**主要差異：**
- **模組中沒有前端程式碼** - 樣式表、範本（實作為 Astro 元件）和客戶端 JavaScript 改放在 Astro 專案中
- **沒有範本輔助函式** - 跳過 `helper()`、`extendHelpers()`、`components()` 和 `renderRoutes()` 函式
- **架構共享** - 部分小工具架構已移至 `lib/schema-mixins` 以便在小工具和頁面之間重複使用

`modules/@apostrophecms/home-page` 模組載入核心 `views/layout.html` 檔案，該檔案已修改為顯示專案狀態資訊，而非管理介面。

### 給 Astro 開發人員

Astro 部分遵循標準慣例，元件位於 `src` 中，資產位於 `public` 中。設定透過 `astro.config.mjs` 管理，遵循標準做法。

**保持不變的部分：**
- 標準 Astro 專案組織
- 正常的元件和範本模式
- 客戶端資產管理

**主要差異：**
- **單一路由系統** - `pages` 中不是多個路由，而是一個處理所有路由的 `[...slug].astro` 檔案
- **範本對應** - 頁面對應到 `templates` 資料夾中的範本，由該資料夾中的 `index.js` 檔案對應。每個範本對應到一個 ApostropheCMS 頁面類型，包括 `index.html` 和 `show.html` 內容片段頁面類型
- **小工具系統** - `widgets` 資料夾包含 ApostropheCMS 小工具的範本，透過該資料夾中的 `index.js` 檔案對應
- **必要設定** - 必須保留 `apostrophe` 整合和 `output: 'server'` 設定以進行後端整合

### 路由與範本

與典型的 Astro 專案使用多個路由檔案不同，本專案使用單一 `[...slug].astro` 路由：

1. 使用來自 CMS 後端的頁面處理所有 URL 路由
2. 將頁面類型對應到 `templates` 資料夾中的對應範本
3. 使用來自 CMS 的資料填充範本內容
4. 使用 `widgets` 資料夾中的範本渲染小工具

每個頁面範本對應到一個已註冊的 ApostropheCMS 頁面或內容片段頁面類型。內容由來自 CMS 後端的資料填充，並插入到主 `[...slug].astro` 檔案的插槽中。小工具資料透過對應的範本處理，並使用 `AposArea` 輔助元件加入到頁面範本中。

在 [`apostrophe-astro` 文件](https://github.com/apostrophecms/apostrophe-astro)或 [Apollo 教學系列](https://docs.apostrophecms.org/tutorials/astro/apostrophecms-and-astro.html)中了解更多。

### 小工具靈活性

此架構允許小工具範本在專門的 `area` 架構欄位之外使用，提供設計靈活性而不重複程式碼。然而，這意味著用於內容的小工具架構欄位也必須加入到頁面架構中。`backend/lib/schema-mixins` 資料夾透過允許在小工具模組和頁面範本中匯入架構來促進這一點。

### 設定注意事項

`astro.config.mjs` 包含 ApostropheCMS 整合所需的設定：
- 整合陣列中的 `apostrophe` 整合
- 伺服器端渲染的 `output: 'server'`
- 自訂預處理器選項（本專案使用不同的 SASS 編譯器以相容 [Bulma CSS 框架](https://bulma.io/)）

在 [`apostrophe-astro` 文件](https://github.com/apostrophecms/apostrophe-astro)中了解更多。

## 🌟 功能與小工具
本專案比我們其他一些專案 starter kit 更具意見性。它使用 [Bulma CSS 框架](https://bulma.io/)。如需更精簡的起點，您可以使用 [Astro Essentials starter kit](https://github.com/apostrophecms/starter-kit-astro-essentials) 專案。

### 小工具
本專案提供核心 ApostropheCMS 小工具，加上五個額外的小工具：

- 內容
    - hero-widget：可自訂的主圖區塊，具有顏色漸變、圖片或影片背景選項
    - slideshow-widget：可自訂的投影片小工具
    - accordion-widget：新增手風琴以將內容組織成可折疊的區塊
    - card-widget：允許建立多種不同的可自訂卡片類型
    - link-widget：新增可樣式化為文字或高度可自訂按鈕的連結

### 內容片段
本專案建立兩個內容片段。第一個是用於建立部落格文章或新聞文章等內容片段的 `article` 片段。第二個是與 article 片段關聯使用的 `author` 片段。

### 頁面
本專案建立核心 `default` 和 `@apostrophecms/home-page` 頁面。它還建立兩個用於顯示 article 片段的頁面。

home-page 有三種可能的版面配置，從頁面管理器右側的實用選單中選擇。'Minimal' 版面配置繼承了加入到所有專案頁面的頁首和頁尾元件。它還有一個可以使用任何專案小工具的單一區域。'Foundation' 版面配置在頁面頂部新增主圖區塊，而 'Showcase' 新增投影片。

default 頁面的版面配置與 'Minimal' home-page 版面配置相同。

ApostropheCMS 專案中的內容片段類型頁面用於顯示多個片段（`index.html`）或單個片段（`show.html`）。本專案具有兩種類型的頁面，將所有片段的索引對應到 `ArticleIndexPage.astro` 範本，將單個片段的顯示對應到 `ArticleShowPage.astro` 範本。這兩種頁面類型都有三種版面配置供您選擇。根據索引版面配置，在片段內容之前和之後有三到四個額外區域用於新增帶有內容的小工具。索引頁面還示範如何在混合專案中處理分頁。

## 🖼️ 圖片輔助函式

### 概述
這些輔助函式旨在處理來自 ApostropheCMS 的圖片，這些圖片透過關聯或附件欄位傳送到您的 Astro 前端。如果您在區域內使用圖片小工具，應該使用 `AposArea` 輔助函式 - 這些實用工具專門用於處理作為內容模型一部分的圖片。

**重要：** 這些輔助函式期望單一附件物件，而非陣列。當使用關聯或陣列欄位時，請確保傳遞單一圖片物件（例如 `page.relationship._image[0]`）而非完整陣列。

### 使用圖片關聯
當您的內容類型中有指向 `@apostrophecms/image` 的關聯欄位時，您通常需要：
1. 取得圖片 URL（可能針對響應式圖片使用不同尺寸）
2. 處理焦點（如果已設定）
3. 取得圖片尺寸，包括應套用的任何裁切
4. 設定適當的替代文字

這是一個典型範例：
```js
---
import {
  getAttachmentUrl,
  getAttachmentSrcset,
  getFocalPoint,
  getWidth,
  getHeight
} from '../lib/attachments.js';

// 從關聯中取得第一張圖片
const image = relationshipField._image[0];
---

<img
  src={getAttachmentUrl(image, { size: 'full' })}
  srcset={getAttachmentSrcset(image)}
  sizes="(max-width: 800px) 100vw, 800px"
  alt={image.alt || image.title || '圖片描述'}
  width={getWidth(image)}
  height={getHeight(image)}
  style={`object-position: ${getFocalPoint(image)};`}
/>
```

### 使用直接附件
對於附件欄位（如標誌欄位），模式類似：

```js
<img 
  src={getAttachmentUrl(attachmentField)}
  width={getWidth(attachmentField)}
  height={getHeight(attachmentField)}
  alt="標誌"
/>
```

### 圖片裁切與尺寸

**自動裁切處理**

如果您在 ApostropheCMS 管理介面中為圖片設定裁切區域，所有輔助方法都會自動遵守該裁切。您不需要在程式碼中做任何特殊處理 - 產生 URL 和 srcset 時將使用裁切後的版本。

**尺寸變體**

預設尺寸變體為：
- `one-sixth`（190×350px）
- `one-third`（380×700px）
- `one-half`（570×700px）
- `two-thirds`（760×760px）
- `full`（1140×1140px）
- `max`（1600×1600px）

這些尺寸將用於產生 srcset，並可透過名稱為 `getAttachmentUrl()` 方法選擇：

```
getAttachmentUrl(image, { size: 'full' })
```

您可以在 `getAttachmentUrl()` 和 srcset 選項中使用自訂尺寸名稱。例如：
```js
const customUrl = getAttachmentUrl(image, { size: 'custom-banner' });

// 自訂 srcset 設定
const srcset = getAttachmentSrcset(image, {
  sizes: [
    { name: 'small', width: 300 },
    { name: 'medium', width: 600 },
    { name: 'large', width: 900 },
  ]
});
```

> 重要：這些輔助函式不會產生圖片尺寸 - 它們只是參考已存在的尺寸。要使用自訂尺寸，您必須設定 [`@apostrophecms/attachment` 模組](https://docs.apostrophecms.org/reference/modules/attachment.html#configuration)，以在上傳圖片時建立這些尺寸。您可以在後端設定中執行此操作：

```javascript
// modules/@apostrophecms/attachment/index.js
module.exports = {
  options: {
    // 定義上傳時應建立的尺寸
    imageSizes: {
      'custom-banner': { width: 1200, height: 400 },
      'square-thumb': { width: 300, height: 300 },
      'small': { width: 300 },
      'medium': { width: 600 },
      'large': { width: 900 }
    }
  }
};
```

請參閱 [attachment 模組文件](https://docs.apostrophecms.org/reference/modules/attachment.html#configuration)以瞭解完整設定選項。

### 使用焦點
當使用在 ApostropheCMS 管理介面中設定的焦點時，您需要：
1. 使用 `object-position` 和焦點值
2. 設定適當的 Bulma 圖片類別（如 `is-fullwidth`）

```js
<figure class="image">
  <img
    src={getAttachmentUrl(image)}
    style={`object-position: ${getFocalPoint(image)}; object-fit: cover;`}
    class="is-fullwidth"
    width={getWidth(image)}
    height={getHeight(image)}
    alt="帶有焦點的圖片"
  />
</figure>
```

`getFocalPoint()` 函式以 "X% Y%" 格式回傳座標（例如，"50% 50%" 代表中心）。如果未設定焦點，則回傳預設值（預設為 "center center"）。

### 核心函式參考
可用的主要函式（詳細文件請參閱原始碼中的 JSDoc 註解）：
- `getAttachmentUrl(attachmentObject, options?)`：取得圖片的 URL，可選尺寸（預設為 'full'）
- `getAttachmentSrcset(attachmentObject, options?)`：產生響應式 srcset 字串
- `getWidth(imageObject)`：取得圖片寬度，遵守裁切
- `getHeight(imageObject)`：取得圖片高度，遵守裁切
- `getFocalPoint(attachmentObject, defaultValue?)`：取得用於樣式設定的焦點座標

## 🖌️ 主題設定

在本專案中自訂主題非常簡單，並利用 Bulma 強大的主題功能。您可以透過編輯 `frontend/src/styles/main.scss` 檔案來覆寫 Bulma 的預設變數，以符合您的品牌或設計需求。這是在**匯入 Bulma 之前**完成的，以便您的自訂設定套用到整個專案。

### 自訂步驟

1. 導覽至 `frontend/src/styles/main.scss` 檔案。
2. 找到覆寫 Bulma 變數的區塊。
3. 取消註解並修改您希望自訂的變數。您可以定義顏色、字體、間距等。
4. 儲存您的變更，更新的主題將在您重新建構專案時自動套用。

### 範例：覆寫常用變數

這是如何自訂一些 Bulma 常用變數的範例。這些變數預設為註解狀態。根據需要取消註解並修改它們：

```scss
@use 'bulma/sass/utilities/initial-variables' as * with (
  // 顏色
  $turquoise: hsl(171, 100%, 41%),   // 主要顏色
  $cyan: hsl(204, 86%, 53%),         // 資訊顏色
  $green: hsl(141, 71%, 48%),        // 成功顏色
  $yellow: hsl(48, 100%, 67%),       // 警告顏色
  $red: hsl(348, 100%, 61%),         // 危險顏色

  // 字體
  $family-sans-serif: BlinkMacSystemFont, -apple-system, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", "Helvetica", "Arial", sans-serif,
  $family-monospace: monospace,
  $size-1: 3rem,
  $size-2: 2.5rem,
  $size-3: 2rem,
  $size-4: 1.5rem,
  $size-5: 1.25rem,
  $size-6: 1rem
);
```

### 完整變數清單
有關所有可自訂變數的完整清單，請參閱 [Bulma 文件](https://bulma.io/documentation/customize/list-of-sass-variables/)中的變數說明。此資源提供所有可用自訂選項的詳細資訊，包括響應式斷點、間距等進階選項。

### 注意事項
* **順序很重要**：確保在匯入 Bulma 之前宣告變數覆寫，以避免衝突。
* **SASS 相容性**：此設定使用現代 SASS 語法，使用 @use 和 @forward。如果您不熟悉這些概念，請參閱 SASS 文件以瞭解更多資訊。
* **主題一致性**：為維持一致的設計，請考慮在專案開始時定義核心色彩調色板和字體樣式。

### 疑難排解
如果您的變更未反映：

* 確保您的變數已正確取消註解並修改。
* 檢查是否有任何快取問題，可透過清除瀏覽器快取或重新啟動建構程序來解決。

## ⚙️ 套件指令

### 根目錄 `package.json` 指令

專案根目錄有幾個有用的指令位於 `package.json` 檔案中。在根目錄中執行 `npm run install` 將觸發 `postinstall` 指令。這將為 ApostropheCMS 和 Astro 專案安裝相依套件。類似地，`npm run update` 將更新 `frontend` 和 `backend` 資料夾的相依套件。此檔案中的其餘指令主要用於專案部署到 ApostropheCMS 托管。

### Frontend 資料夾指令

frontend 資料夾中 Astro 專案的主要指令是 `dev`、`preview` 和 `build`。前兩個指令將允許您在開發或預覽模式下啟動 Astro 伺服器。`build` 指令應在預覽模式下啟動伺服器之前執行。其餘指令用於部署，可能需要修改以適應您的托管解決方案。

### Backend 資料夾指令

通常，除了部署之外，您只會在 backend 資料夾中使用 `dev` 指令。您可以查閱 [ApostropheCMS 托管](https://docs.apostrophecms.org/guide/hosting.html)秘訣，瞭解如何使用這些其他指令。

## 🚀 部署到生產環境

### **使用 ApostropheCMS 托管（建議）**

ApostropheCMS 可以為任何 ApostropheCMS-Astro monorepo 提供簡單的托管，幾乎不需要額外設定。這可以設定為從 Github 或其他程式碼專案託管庫部署。

ApostropheCMS 托管將自動處理：
- 資料庫佈建和管理
- 資產儲存和傳送
- SSL 憑證管理
- 自動備份
- 安全性更新

未來，我們將提供一個途徑讓您建立自己的帳戶並建立新的托管專案。同時，您可以[了解更多](https://apostrophecms.com/hosting)並[聯絡我們](https://apostrophecms.com/contact-us)來設定您的托管。

### **使用第三方托管**

第三方托管通常需要為專案的 ApostropheCMS 和 Astro 部分使用單獨的伺服器。這是其他與 Astro 一起使用的 CMS 的典型模式。您需要指定是要托管 `backend` ApostropheCMS 部分，還是 `frontend` Astro 專案。如何完成這一點將取決於提供商。

#### Backend（ApostropheCMS）部署

您的 ApostropheCMS 後端需要：
- Node.js 環境（建議 v20 或更高版本）
- MongoDB 資料庫
- 資產儲存解決方案（雲端儲存如 AWS S3）

我們的[文件](https://docs.apostrophecms.org/guide/hosting.html)中有幾個常見部署策略的範例。

典型提供商的範例部署步驟：
1. 設定 MongoDB 實例（Atlas、DigitalOcean 等）
2. 使用 Node.js 和 PM2 設定您的伺服器
3. 設定您的環境變數：
   ```bash
   NODE_ENV=production
   APOS_MONGODB_URI=YOUR_mongodb_connection_string
   APOS_EXTERNAL_FRONT_KEY=a_random_string
   APOS_S3_BUCKET=YOUR-bucket-name
   APOS_S3_SECRET=YOUR-s3-secret
   APOS_S3_KEY=YOUR-s3-key
   APOS_S3_REGION=YOUR-chosen-region
   ```
其餘部署將取決於所使用的托管平台以及如何觸發該部署。通常，它將包含建構步驟，然後啟動伺服器。如果您不是使用 Git 部署，您還需要將 `APOS_RELEASE_ID` 設定為唯一的隨機值。再次確保您指定將 `backend` 資料夾用作部署的根目錄。

#### Frontend（Astro）部署

您的 Astro 前端可以部署到任何支援 SSR（伺服器端渲染）的靜態托管提供商。熱門選項包括：
- Netlify
- Vercel
- Cloudflare Pages
- AWS Amplify

[Astro 文件](https://docs.astro.build/en/guides/deploy/#deployment-guides)中有許多指南可用作起點。唯一的修改是額外的環境變數 `APOS_EXTERNAL_FRONT_KEY=a_random_string` 設定為與您的後端專案相同的字串，並確保您指定 `frontend` 資料夾作為專案的根目錄。

#### Netlify 部署範例

1. 登入您的 [Netlify](https://www.netlify.com/) 帳戶。
2. 透過連接您的 Git 專案託管庫建立新網站。
3. 在「Build settings」設定中：
   - **Base directory**：`frontend`
   - **Build command**：`npm run build`
   - **Publish directory**：`frontend/dist`
4. 存取 Site Settings：
   - 導覽至所選網站的「Site settings」。
5. 向下捲動並在「Build & deploy」標籤下找到「Environment variables」區塊。點擊「Edit variables」。新增變數：
   - **Key**：`APOS_EXTERNAL_FRONT_KEY`
   - **Value**：`a_random_string`
6. 儲存您的設定並部署網站。

建構設定也可以透過專案根目錄的 `netlify.toml` 檔案提供。

## 💎 準備好了解更多？

**喜歡您所看到的，但需要企業功能？** 這個免費的 Apollo starter kit 只是開始。升級到 **Apollo Pro** 以解鎖強大的功能，這些功能將增強您的內容管理和開發工作流程：

### 🚀 **Apollo Pro 功能**
- **🔐 進階權限** - 團隊的細緻存取控制和使用者群組
- **🌍 自動翻譯** - 使用 DeepL、Google Translate 和 Azure 的 AI 驅動翻譯
- **🎨 視覺設計工具** - 使用 Palette 擴充套件進行情境式 CSS 自訂
- **🔍 SEO 優化** - AI 驅動的內容優化以獲得更好的搜尋排名
- **📝 文件管理** - 版本控制、範本和稽核追蹤
- **👥 使用者註冊** - 自助註冊和帳戶管理

**[聯絡我們的團隊](https://apostrophecms.com/contact-us)**以瞭解更多關於 Apollo Pro 授權的資訊，並取得企業級功能的存取權限，這些功能將加速您的開發並增強您的內容管理能力。

---

## 🚑 需要協助？

- **文件**：每個功能都包含完整的文件和範例
- **社群支援**：加入我們的 [Discord 社群](https://discord.com/invite/HwntQpADJr)以獲得其他開發人員的協助
- **專業支援**：提供專屬支援套件 - [聯絡我們](https://apostrophecms.com/contact-us)以瞭解更多
- **培訓**：提供專業培訓和諮詢服務

---

## 📚 了解更多

- **[ApostropheCMS 文件](https://docs.apostrophecms.org/)** - 完整的 CMS 指南
- **[Astro 文件](https://docs.astro.build/)** - 了解更多關於 Astro
- **[Astro + ApostropheCMS 指南](https://docs.astro.build/en/guides/cms/apostrophecms/)** - 整合詳細資訊
- **[建構網站教學](https://docs.apostrophecms.org/tutorials/astro/apostrophecms-and-astro.html)** - 使用 Apollo 主題建構完整網站
- **[apostrophe-astro 套件](https://github.com/apostrophecms/apostrophe-astro)** - 橋接套件文件

---

## 授權

本專案採用 MIT 授權。詳情請參閱 [LICENSE](./LICENSE) 檔案。

---

*由 ApostropheCMS 團隊用 ❤️ 打造。如果這對您的專案有幫助，請在 GitHub 上[給我們星標](https://github.com/apostrophecms)！*
