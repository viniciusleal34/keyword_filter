import axios from 'axios';
import settings from '../config';
import { getEmailUser, getIdentifier } from '../services/getAuth';

const HEADER_CONTENT = 'Content-Type';
const TYPE_JSON = 'application/json; charset=utf-8';

const API = () => {
    const api = axios.create({ baseURL: settings.api.url });
    const user = getEmailUser();
    const identifier = getIdentifier();

    api.interceptors.request.use(async (config) => {
        const headerConfig = config;
        headerConfig.headers[HEADER_CONTENT] = TYPE_JSON;
        headerConfig.headers.identifier = identifier;
        headerConfig.headers.user = user;
        return headerConfig;
    });

    return api;
};

export default API();
