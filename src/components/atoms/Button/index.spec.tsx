import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'

import Button from './'

describe('<Button />', () => {
  it('should render the heading', () => {
    render(<Button />)

    const text = screen.queryByText('Text')

    expect(text).toBeInTheDocument()
  })
})
