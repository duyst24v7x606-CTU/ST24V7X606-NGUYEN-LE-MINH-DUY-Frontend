import axios from "axios";

const commonConfig = {
    headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
    },
};

class AuthService {
    constructor(baseUrl = "/api/auth") {
        this.api = axios.create({
            baseURL: baseUrl,
            ...commonConfig,
        });
    }

    async register(data) {
        return (await this.api.post("/register", data)).data;
    }

    async login(data) {
        return (await this.api.post("/login", data)).data;
    }
}

export default new AuthService();