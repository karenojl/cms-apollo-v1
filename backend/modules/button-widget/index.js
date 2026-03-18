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
          {
            label: 'Primary',
            value: 'primary'
          },
          {
            label: 'Secondary',
            value: 'secondary'
          }
        ],
        def: 'primary'
      }
    }
  }
};
