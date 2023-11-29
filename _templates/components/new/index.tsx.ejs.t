---
to: src/components/<%= level %>/<%= h.changeCase.pascalCase(name) %>/index.tsx
---
import React from 'react'
import './index.scss'

interface I<%= h.changeCase.pascalCase(name) %>Props {
  children?: React.ReactNode
}

const <%= h.changeCase.pascalCase(name) %>: React.FC<I<%= h.changeCase.pascalCase(name) %>Props> = ({ children }) => {
  return <div className='<%=level.slice(0, 1) %>-<%= h.changeCase.camelCase(name) %>'>{children}</div>
};

export default <%= h.changeCase.pascalCase(name) %>
