---
computed:
  timestamp: (new Date()).toISOString()
template: | # this is the card template
  
  <!-- created:${timestamp} -->  
  Created: {{(new Date(created)).toLocaleString()}}  
  File: [{{source.path}}:{{line}}]({{source.path}}:{{line}})
---

# [Provide a menu to select chuck shred file to run](#TODO:0)
- [terminal-kit - npm](https://www.npmjs.com/package/terminal-kit)
<!-- created:2020-03-05T15:50:37.195Z +story -->  
Created: {{(new Date(created)).toLocaleString()}}  
File: [{{source.path}}:{{line}}]({{source.path}}:{{line}})

