import api from '../factory/api';
import { showToast } from './common-service';

const getLogs = async (page) => {
    try {
        const { data } = await api.get(`/v1/api/logs?page=${page}`);
        return data;
    } catch (err) {
        return false;
    }
};

const getListKeywordAsync = async (page = 1) => {
    try {
        const { data } = await api.get(
            `/v1/api/builder/allkeywords?page=${page}`
        );
        return data;
    } catch (err) {
        let errorMessage = 'Ops... Ocorreu um erro!';
        if (err?.response?.data[0]?.errorMessage) {
            errorMessage = err?.response?.data[0]?.errorMessage;
        }
        await showToast({
            type: 'danger',
            message: errorMessage
        });
        return false;
    }
};

const getKeywordOneAsync = async (id) => {
    try {
        const { data } = await api.get(`/v1/api/builder/keyword/${id}/detail`);
        return data;
    } catch (err) {
        let errorMessage = 'Ops... Ocorreu um erro!';
        if (err?.response?.data[0]?.errorMessage) {
            errorMessage = err?.response?.data[0]?.errorMessage;
        }
        await showToast({
            type: 'danger',
            message: errorMessage
        });
        return false;
    }
};

const postKeywordAsync = async (values) => {
    try {
        const { data } = await api.post(`/v1/api/builder/keyword`, values);
    
        return data;
    } catch (err) {
        let errorMessage = 'Ops... Ocorreu um erro!';
        if (err?.response?.data[0]?.errorMessage) {
            errorMessage = err?.response?.data[0]?.errorMessage;
        }
        await showToast({
            type: 'danger',
            message: errorMessage
        });
        return false;
    }
};

const searchLogAsync = async (keyword, page = 1) => {
    try {
        const { data } = await api.get(
            `/v1/api/logs/search?Keyword=${keyword}&&page=${page}`
        );
        return data;
    } catch (err) {
        let errorMessage = 'Ops... Ocorreu um erro!';
        if (err?.response?.data[0]?.errorMessage) {
            errorMessage = err?.response?.data[0]?.errorMessage;
        }
        await showToast({
            type: 'danger',
            message: errorMessage
        });
        return false;
    }
};

const searchKeyWordAsync = async (keyword, page = 1) => {
    try {
        const { data } = await api.get(
            `/v1/api/builder/keyword/search?keyword=${keyword}&&page=${page}`
        );
        return data;
    } catch (err) {
        let errorMessage = 'Ops... Ocorreu um erro!';
        if (err?.response?.data[0]?.errorMessage) {
            errorMessage = err?.response?.data[0]?.errorMessage;
        }
        await showToast({
            type: 'danger',
            message: errorMessage
        });
        return false;
    }
};

const putKeywordAsync = async (values) => {
    try {
        const { data } = await api.put(`/v1/api/builder/keyword`, values);
     
        return data;
    } catch (err) {
        let errorMessage = 'Ops... Ocorreu um erro!';
        if (err?.response?.data[0]?.errorMessage) {
            errorMessage = err?.response?.data[0]?.errorMessage;
        }
        await showToast({
            type: 'danger',
            message: errorMessage
        });
        return false;
    }
};

const putHeaderKeywordAsync = async (values) => {
    try {
        const { data } = await api.put(`/v1/api/header`, values);
        return data;
    } catch (err) {
        let errorMessage = 'Ops... Ocorreu um erro!';
        if (err?.response?.data[0]?.errorMessage) {
            errorMessage = err?.response?.data[0]?.errorMessage;
        }
        await showToast({
            type: 'danger',
            message: errorMessage
        });
        return false;
    }
};

const putKeywordLinkAsync = async (values) => {
    try {
        const { data } = await api.put(`/v1/api/builder/link-button`, values);
        return data;
    } catch (err) {
        let errorMessage = 'Ops... Ocorreu um erro!';
        if (err?.response?.data[0]?.errorMessage) {
            errorMessage = err?.response?.data[0]?.errorMessage;
        }
        await showToast({
            type: 'danger',
            message: errorMessage
        });
        return false;
    }
};

const putKeywordTextAsync = async (values) => {
    try {
        const { data } = await api.put(`/v1/api/builder/text-button`, values);
        return data;
    } catch (err) {
        let errorMessage = 'Ops... Ocorreu um erro!';
        if (err?.response?.data[0]?.errorMessage) {
            errorMessage = err?.response?.data[0]?.errorMessage;
        }
        await showToast({
            type: 'danger',
            message: errorMessage
        });
        return false;
    }
};

const putKeywordRedirectAsync = async (values) => {
    try {
        const { data } = await api.put(
            `/v1/api/builder/redirect-button`,
            values
        );
        return data;
    } catch (err) {
        let errorMessage = 'Ops... Ocorreu um erro!';
        if (err?.response?.data[0]?.errorMessage) {
            errorMessage = err?.response?.data[0]?.errorMessage;
        }
        await showToast({
            type: 'danger',
            message: errorMessage
        });
        return false;
    }
};

const putKeywordJsonAsync = async (values) => {
    try {
        const { data } = await api.put(`/v1/api/builder/json-button`, values);
        return data;
    } catch (err) {
        let errorMessage = 'Ops... Ocorreu um erro!';
        if (err?.response?.data[0]?.errorMessage) {
            errorMessage = err?.response?.data[0]?.errorMessage;
        }
        await showToast({
            type: 'danger',
            message: errorMessage
        });
        return false;
    }
};

const postKeywordLinkAsync = async (values) => {
    try {
        const { data } = await api.post(`/v1/api/builder/link-button`, values);
        return data;
    } catch (err) {
        let errorMessage = 'Ops... Ocorreu um erro!';
        if (err?.response?.data[0]?.errorMessage) {
            errorMessage = err?.response?.data[0]?.errorMessage;
        }
        await showToast({
            type: 'danger',
            message: errorMessage
        });
        return false;
    }
};

const postKeywordTextAsync = async (values) => {
    try {
        const { data } = await api.post(`/v1/api/builder/text-button`, values);
        return data;
    } catch (err) {
        let errorMessage = 'Ops... Ocorreu um erro!';
        if (err?.response?.data[0]?.errorMessage) {
            errorMessage = err?.response?.data[0]?.errorMessage;
        }
        await showToast({
            type: 'danger',
            message: errorMessage
        });
        return false;
    }
};

const postKeywordJsonAsync = async (values) => {
    try {
        const { data } = await api.post(`/v1/api/builder/json-button`, values);
        return data;
    } catch (err) {
        let errorMessage = 'Ops... Ocorreu um erro!';
        if (err?.response?.data[0]?.errorMessage) {
            errorMessage = err?.response?.data[0]?.errorMessage;
        }
        await showToast({
            type: 'danger',
            message: errorMessage
        });
        return false;
    }
};

const postKeywordRedirectAsync = async (values) => {
    try {
        const { data } = await api.post(
            `/v1/api/builder/redirect-button`,
            values
        );
        return data;
    } catch (err) {
        let errorMessage = 'Ops... Ocorreu um erro!';
        if (err?.response?.data[0]?.errorMessage) {
            errorMessage = err?.response?.data[0]?.errorMessage;
        }
        await showToast({
            type: 'danger',
            message: errorMessage
        });
        return false;
    }
};

const deleteKeywordAsync = async (id) => {
    try {
        const { data } = await api.delete(`v1/api/builder/keyword?id=${id}`);
        return data;
    } catch (err) {
        let errorMessage = 'Ops... Ocorreu um erro!';
        if (err?.response?.data[0]?.errorMessage) {
            errorMessage = err?.response?.data[0]?.errorMessage;
        }
        await showToast({
            type: 'danger',
            message: errorMessage
        });
        return false;
    }
};

const deleteKeywordLinkAsync = async (id) => {
    try {
        const { data } = await api.delete(
            `/v1/api/builder/link-button?id=${id}`
        );
        return data;
    } catch (err) {
        let errorMessage = 'Ops... Ocorreu um erro!';
        if (err?.response?.data[0]?.errorMessage) {
            errorMessage = err?.response?.data[0]?.errorMessage;
        }
        await showToast({
            type: 'danger',
            message: errorMessage
        });
        return false;
    }
};

const deleteKeywordTextAsync = async (id) => {
    try {
        const { data } = await api.delete(
            `/v1/api/builder/text-button?id=${id}`
        );
        return data;
    } catch (err) {
        let errorMessage = 'Ops... Ocorreu um erro!';
        if (err?.response?.data[0]?.errorMessage) {
            errorMessage = err?.response?.data[0]?.errorMessage;
        }
        await showToast({
            type: 'danger',
            message: errorMessage
        });
        return false;
    }
};

const deleteKeywordRedirectAsync = async (id) => {
    try {
        const { data } = await api.delete(
            `/v1/api/builder/redirect-button?id=${id}`
        );
        return data;
    } catch (err) {
        let errorMessage = 'Ops... Ocorreu um erro!';
        if (err?.response?.data[0]?.errorMessage) {
            errorMessage = err?.response?.data[0]?.errorMessage;
        }
        await showToast({
            type: 'danger',
            message: errorMessage
        });
        return false;
    }
};

const deleteKeywordJsonAsync = async (id) => {
    try {
        const { data } = await api.delete(
            `/v1/api/builder/json-button?id=${id}`
        );
        return data;
    } catch (err) {
        let errorMessage = 'Ops... Ocorreu um erro!';
        if (err?.response?.data[0]?.errorMessage) {
            errorMessage = err?.response?.data[0]?.errorMessage;
        }
        await showToast({
            type: 'danger',
            message: errorMessage
        });
        return false;
    }
};

export {
    getLogs,
    getListKeywordAsync,
    getKeywordOneAsync,
    postKeywordAsync,
    putHeaderKeywordAsync,
    putKeywordLinkAsync,
    putKeywordTextAsync,
    putKeywordRedirectAsync,
    putKeywordAsync,
    postKeywordLinkAsync,
    postKeywordTextAsync,
    postKeywordRedirectAsync,
    deleteKeywordTextAsync,
    deleteKeywordRedirectAsync,
    deleteKeywordAsync,
    deleteKeywordLinkAsync,
    putKeywordJsonAsync,
    postKeywordJsonAsync,
    deleteKeywordJsonAsync,
    searchKeyWordAsync,
    searchLogAsync
};
