import { useState, useEffect } from "react";

class RNA {
    constructor (addr, method) {
        this.method = "POST";

        this.addr = "http://localhost" + addr;
    }

    callAPI (target) {
        const params = {
            method: this.method,
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ target : target})
        };

        return this.useAPI(this.addr, params);
    }

    useAPI = (addr, params) => {
        const [message, setMessage] = useState("");

        useEffect(() => {
        fetch(addr, params)
            .then((res) => res.json())
            .then((data) => setMessage(data))
            .catch((error) => console.error("CALL TO " + addr + " HAS CAUSED: " + error));
        }, [addr, params]);

        return message;
    }
}

export default RNA;