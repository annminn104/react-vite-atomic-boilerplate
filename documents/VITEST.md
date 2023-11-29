### Vitest Examples

```ts
import { cleanup, render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { afterEach, describe, expect, it } from 'vitest'

import App from '../src/App'

describe('Renders main page correctly', async () => {
  /**
   * Resets all renders after each test
   */
  afterEach(() => {
    cleanup()
  })

  /**
   * Passes - shows title correctly
   */
  it('Should render the page correctly', async () => {
    await render(<App />)

    const h1 = await screen.queryByText('Vite + React')

    expect(h1).toBeInTheDocument()
  })

  /**
   * Passes - shows the button count correctly present
   */
  it('Should show the button count set to 0', async () => {
    await render(<App />)

    const button = await screen.queryByText('count is 0')

    expect(button).toBeInTheDocument()
  })

  /**
   * Passes - clicks the button 3 times and shows the correct count
   */
  it('Should show the button count set to 3', async () => {
    const user = userEvent.setup()

    await render(<App />)

    const button = await screen.queryByText('count is 0')

    expect(button).toBeInTheDocument()

    // Actions
    await user.click(button as HTMLElement)
    await user.click(button as HTMLElement)
    await user.click(button as HTMLElement)

    expect(button?.innerHTML).toBe('count is 3')
  })
})
```
