import type { Preview } from '@storybook/react'

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i
      }
    },
    // See-more: https://storybook.js.org/docs/writing-tests/accessibility-testing
    a11y: {
      element: '#storybook-root',
      config: {
        rules: [
          {
            id: 'autocomplete-valid',
            selector: '*:not([autocomplete="nope"])'
          },
          {
            id: 'image-alt',
            enabled: false
          }
        ]
      },
      options: {},
      manual: true
    }
  }
}

export default preview
