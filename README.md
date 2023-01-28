# RNA

# Installation
- Download the .js files
- put client.js into your react app
- put server.js into your node.js folder

# How To Use
## React (Client)
**Import the RNA class from the client.js file**\
`import RNA from './client-api';` <br><br>
**Once imported create an instance of the RNA class**\
`let API = new RNA(":[PORT OF NODE SERVER]/[file]", "[METHOD]");`\
**example** : `let API = new RNA(":3000/api", "POST");`<br><br>
**When you want data from the server:**\
`let data = API.callAPI("[TARGET]");`\
**example** : `let data = API.callAPI("hello");`\<br><br>
**Data is returned as an object of {status and message}**\
`let message = data.message;`\
`let status = data.status;`\<br><br>

## Node.js (Server)
**Import the RNA module from the server.js file**\
`const RNA = require('./node-api.js');`<br><br>
**Define options to create API Instance, replace `app` with the name of the `express();` instance**\
`let opts = {`\
`   hookOnto : app,`\
`   file : '[PORT]',`\
`   method : 'POST',`\
`   clientPort : [PORT OF REACT SERVER],`\
`}`<br><br>
**Create an instance of the RNA module**\
`new RNA.RNA(opts);`\