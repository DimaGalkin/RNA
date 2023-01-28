# RNA

# Installation
- Download the .js files
- put client.js into your react app
- put server.js into your node.js folder

# How To Use
## React (Client)
Import the RNA class from the client.js file\
`import RNA from './client-api';` \
Once imported create an instance of the RNA class\
`let API = new RNA(":[PORT]/[file]", "[METHOD]");`\
example : `let API = new RNA(":3000/api");`\
When you want data from the server:\
`let data = API.callAPI("[TARGET]");`\
example : `let data = API.callAPI("hello");`\
Data is returned as an object of {status and message\
`let message = data.message;`\
`let status = data.status;`\

## Node.js (Server)
Import the RNA module from the server.js file\
`const RNA = require('./node-api.js');`\
Define options to create API Instance\
`let opts = {`
    `hookOnto : app,`
    `file : '/api',`
    `method : 'POST',`
    `clientPort : 3000,`
`}`