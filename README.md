# RNA

**RNA (React-Node API) is an API designed to make interfacing between node.js and React easier**<br><br>

# How does it work?
**RNA works by creating two instances on the client and server, they both communicate through requests with a specified extention like `/api`, this is specified when both instances are created.**<br><br>

**From the react api you send a "target" `let data = API.callAPI("hello");`, when the node server recives this it checks the global function, if one exists with the same name as target, then it is called and the output is returned. If not then we check if there is a global varaible by that name, if one exists it is sent back to the client. If nowthing exists by the name of target, then an error is returned.**

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