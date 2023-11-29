---
to:  src/components/<%= level %>/<%= h.changeCase.pascalCase(name) %>/index.spec.tsx
---

import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'

import <%= h.changeCase.pascalCase(name) %> from './'

describe('<<%= h.changeCase.pascalCase(name) %> />', () => {
  it('should render the heading', () => {
    render(<<%= h.changeCase.pascalCase(name) %> />)

    const text = screen.queryByText('Text')

    expect(text).toBeInTheDocument()
  })
})
