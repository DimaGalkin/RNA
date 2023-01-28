# RNA

#**RNA (React-Node API) is an API designed to make interfacing between node.js and React easier**<br><br>


# Installation
- **Download the .js files**
- **Put client.js into your react app**
- **Put server.js into your node.js folder**

# How To Use
## React (Client)
**Import the RNA class from the client.js file**\
`import RNA from './client-api';` <br><br>
**Once imported create an instance of the RNA class**\
`let API = new RNA(":[PORT OF NODE SERVER]/[file]", "[METHOD]");`\
**Example** : `let API = new RNA(":3000/api", "POST");`<br><br>
**When you want data from the server:**\
`let data = API.callAPI("[TARGET]");`\
**Example** : `let data = API.callAPI("hello");`<br><br>
**Data is returned as an object of {status and message}**\
`let message = data.message;`\
`let status = data.status;`<br><br>

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
`new RNA.RNA(opts);`