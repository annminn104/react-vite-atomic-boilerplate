---
to: src/components/<%= level %>/<%= h.changeCase.pascalCase(name) %>/index.scss
---
.<%=level.slice(0, 1) %>-<%= h.changeCase.camelCase(name) %> {
}
