const cors = require('cors');
const express = require("express");

class RNA {
    constructor (args) {
        // set api to method used [Only POST and GET supported]
        if (args.method === "POST") {
            var api = args.hookOnto.post.bind(args.hookOnto);
        } else if ( args.method === "GET") { 
            var api = args.hookOnto.get.bind(args.hookOnto);
        } else { 
            return "UNKNOWN Method"; 
        }

        args.hookOnto.use(cors({origin : "http://localhost:" + args.clientPort}))
        args.hookOnto.use(express.json()) 

        if (args.manager !== undefined) {
            var incomingReqestManage = args.manager;
        } else {
            var incomingReqestManage = this.incomingReqestManage_DEFAULT.bind(this);
        }

        // create listener with specified method and response
        api(args.file, (request, response) => {
            let result = incomingReqestManage(request);
            response.send(result);
        });
    }

    incomingReqestManage_DEFAULT (request) {
        // get name of function / variable from request
        let target_name = request.body.target;
        // put together info about client
        let addr = request.socket.remoteAddress + ":" + request.socket.remotePort;

        try {
            // check if var / function requested exists
            if (target_name in global) {
                // get the var / function
                let target = global[target_name];
                // call if function
                if (typeof target === "function") {
                    return {status: "Passed", message: target()};
                // return if variable
                } else if (typeof target !== "undefined") {
                    return {status: "Passed", message: target};
                // if non existant return error
                } else {
                    throw new Error(target_name + " DOES NOT EXIST! Have you made your function global?");
                }
            } else {
                // if non existant return error
                throw new Error(target_name + " DOES NOT EXIST! Have you made your function global?");
            }
        } catch (error) {
            // show who caused error and what it is
            this.passError(addr, error);
            return { status : "Failed", message : error.toString() };
        }
    }

    passError (addr, error) {
        // custom error format
        let error_body = "REQUEST FROM " + addr + " HAS CAUSED: " + error;
        console.error(error_body);
    }
};

module.exports = { RNA };