import axios from 'axios'
import adapter from "axios/lib/adapters/http";

axios.defaults.adapter = adapter;

export class API {
    constructor(url) {
        if (url === undefined || url === "") {
            url = process.env.VUE_APP_BASE_API_URL;
        }
        if (url.endsWith("/")) {
            url = url.substr(0, url.length - 1)
        }
        this.url = url
    }

    withPath(path) {
        if (!path.startsWith("/")) {
            path = "/" + path
        }
        return `${this.url}${path}`
    }

    async getEvents(key,page) {
        return axios.get(`https://app.ticketmaster.com/discovery/v2/events.json?keyword=${key}&page=${page}&apikey=7qMfUP6hDfKWGLyepsrCimiI7ONsjgBK`)
    }
}

export default new API("localhost:3000");