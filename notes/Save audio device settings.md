---
computed:
  timestamp: (new Date()).toISOString()
template: | # this is the card template
  
  <!-- created:${timestamp} -->  
  Created: {{(new Date(created)).toLocaleString()}}  
  File: [{{source.path}}:{{line}}]({{source.path}}:{{line}})
---

# [Save audio device settings](#TODO:0)
As a user I would like to select and save my default chuck audio in and out devices so I don't have to select them evert time I run a chuck program.
<!-- created:2020-03-01T21:14:52.679Z +story -->  
Created: {{(new Date(created)).toLocaleString()}}  
File: [{{source.path}}:{{line}}]({{source.path}}:{{line}})

