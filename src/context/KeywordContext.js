/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-no-constructed-context-values */
import React, { createContext, useEffect, useState } from 'react';
import ProjectString from '../constants/project-constants';
import {
    deleteKeywordJsonAsync,
    deleteKeywordLinkAsync,
    deleteKeywordRedirectAsync,
    deleteKeywordTextAsync,
    getKeywordOneAsync,
    getListKeywordAsync,
    postKeywordAsync,
    postKeywordJsonAsync,
    postKeywordLinkAsync,
    postKeywordRedirectAsync,
    postKeywordTextAsync,
    putHeaderKeywordAsync,
    putKeywordAsync,
    putKeywordJsonAsync,
    putKeywordLinkAsync,
    putKeywordRedirectAsync,
    putKeywordTextAsync,
    searchKeyWordAsync
} from '../services/api-service';
import { showToast } from '../services/common-service';

export const KeywordContext = createContext();

export const KeywordStorage = ({ children }) => {
    const [buttonArray, setButtonArray] = useState([]);
    const [keywordList, setKeywordList] = useState([]);
    const [loadingItems, setLoadingItems] = useState(true);
    const [informationPage, setInformationPage] = useState({});
    const [search, setSearch] = useState('');
    const [initialDataKeyword, setInitialDataKeyword] = useState({
        keyword: '',
        title: '',
        menuMessage: '',
        id: ''
    });
    const [toast, setToast] = useState(false);
    const [openToast, setOpenToast] = useState(false);
    const [isEdit, setIsEdit] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setOpenToast(false);
            setToast(false);
        }, 2000);
    }, [openToast]);

    const constructKeywordData = async (response, isSearch = false) => {
        setLoadingItems(true);
        const { keywordObjects } = response;
        if (isSearch) {
            setKeywordList(() => [...keywordObjects]);
        } else {
            setKeywordList(() => [...keywordList, ...keywordObjects]);
        }
        delete response?.keywordObjects;
        setInformationPage(response);

        setTimeout(() => {
            setLoadingItems(false);
        }, 300);
    };

    const keywordCreate = async (values, setIsButtons, resetForm, setOpen) => {
        const textButtons = [];
        const linkButtons = [];
        const redirectButtons = [];
        const jsonButtons = [];
        buttonArray?.forEach(async (element) => {
            if (element?.type === ProjectString.TYPE_TEXT) {
                textButtons.push(element);
            } else if (element?.type === ProjectString.TYPE_LINK) {
                linkButtons.push(element);
            } else if (element?.type === ProjectString.TYPE_REDIRECT) {
                redirectButtons.push(element);
            } else if (element?.type === ProjectString.TYPE_JSON) {
                jsonButtons.push(element);
            }
        });
        const request = {
            ...values,
            isTextHeader: true,
            textButtons,
            linkButtons,
            jsonButtons,
            redirectButtons
        };
        const response = await postKeywordAsync(request);
        console.log(response);

        if (response === false) {
            return false;
        }
        const resp = await getListKeywordAsync();
        const { keywordObjects } = resp;
        setKeywordList(keywordObjects);
        setOpen(false);
        setIsButtons(false);
        resetForm({});
        setButtonArray([]);
        await showToast({
            type: 'success',
            message: 'Adicionado com sucesso !'
        });
        return response;
    };

    const keywordUpdate = async (newValue, setOpen) => {
        let response = false;
        if (initialDataKeyword?.keyword !== newValue?.keyword) {
            response = await putKeywordAsync(newValue);
        }
        newValue.id = initialDataKeyword?.headerId;
        response = await putHeaderKeywordAsync({
            ...newValue,
            isTextHeader: true,
            ImageUri: null
        });

        if (response !== false) {
            const resp = await getListKeywordAsync();
            const { keywordObjects } = resp;
            setKeywordList(keywordObjects);
            setOpen(false);
            await showToast({
                type: 'success',
                message: 'Alterado com sucesso!'
            });
        }
        return response;
    };

    const buttonKeywordCreate = async (values, resetForm) => {
        values.KeywordMenuId = initialDataKeyword?.id;
        let response = null;
        if (values?.type === ProjectString.TYPE_TEXT) {
            response = await postKeywordTextAsync(values);
        }
        if (values?.type === ProjectString.TYPE_LINK) {
            response = await postKeywordLinkAsync(values);
        }
        if (values?.type === ProjectString.TYPE_REDIRECT) {
            response = await postKeywordRedirectAsync(values);
        }
        if (values?.type === ProjectString.TYPE_JSON) {
            response = await postKeywordJsonAsync(values);
        }

        if (response !== false) {
            const resp = await getListKeywordAsync();
            const { keywordObjects } = resp;
            setKeywordList(keywordObjects);
            restoreData(response?.id);
            resetForm({});
            await showToast({
                type: 'success',
                message: 'Adicionado com sucesso!'
            });
        }

        return response;
    };

    const buttonKeywordUpdate = async (values, setEditButton) => {
        let response = null;
        if (values?.type === ProjectString.TYPE_TEXT) {
            response = await putKeywordTextAsync(values);
        }
        if (values?.type === ProjectString.TYPE_LINK) {
            response = await putKeywordLinkAsync(values);
        }
        if (values?.type === ProjectString.TYPE_REDIRECT) {
            response = await putKeywordRedirectAsync(values);
        }
        if (values?.type === ProjectString.TYPE_JSON) {
            response = await putKeywordJsonAsync(values);
        }
        if (response === false) {
            return false;
        }
        const resp = await getListKeywordAsync();
        const { keywordObjects } = resp;
        setKeywordList(keywordObjects);
        restoreData(response?.id);
        setEditButton(false);
        await showToast({
            type: 'success',
            message: 'Atualizado com sucesso!'
        });
        return response;
    };

    const buttonKeywordDelete = async (values, newArray) => {
        let response = null;
        if (values?.type === ProjectString.TYPE_TEXT) {
            response = await deleteKeywordTextAsync(values?.id);
        }
        if (values?.type === ProjectString.TYPE_LINK) {
            response = await deleteKeywordLinkAsync(values?.id);
        }
        if (values?.type === ProjectString.TYPE_REDIRECT) {
            response = await deleteKeywordRedirectAsync(values?.id);
        }
        if (values?.type === ProjectString.TYPE_JSON) {
            response = await deleteKeywordJsonAsync(values?.id);
        }
        if (response !== false) {
            const resp = await getListKeywordAsync();
            const { keywordObjects } = resp;
            setKeywordList(keywordObjects);
            setButtonArray(() => [...newArray]);
            await showToast({
                type: 'success',
                message: 'Deletado com sucesso!'
            });
        }

        return false;
    };

    const previewComponent = async (values) => {
        const request = {
            ...values
        };
        return request;
    };

    const orderButtonArray = (response) => {
        const buttons = [];
        response?.textButtons?.forEach((button) => {
            button.type = ProjectString.TYPE_TEXT;
            buttons.push(button);
        });
        response?.linkButtons?.forEach((button) => {
            button.type = ProjectString.TYPE_LINK;
            buttons.push(button);
        });
        response?.redirectButtons?.forEach((button) => {
            button.type = ProjectString.TYPE_REDIRECT;
            buttons.push(button);
        });
        response?.jsonButtons?.forEach((button) => {
            button.type = ProjectString.TYPE_JSON;
            button.value = JSON.stringify(button.value);
            buttons.push(button);
        });
        const buttonOrder = buttons.sort((a, b) => {
            if (a.position < b.position) {
                return -1;
            }
            return 0;
        });
        setButtonArray(() => [...buttonOrder]);
    };

    const restoreData = async (id) => {
        const response = await getKeywordOneAsync(id);
        if (!response?.errorMessage) {
            setInitialDataKeyword({
                id: response?.id,
                keyword: response?.keyword,
                title: response?.header?.title,
                menuMessage: response?.header?.menuMessage,
                headerId: response?.header?.id
            });
            orderButtonArray(response);
            setIsEdit(true);
            return true;
        }
        setIsEdit(false);
        return response;
    };

    const searchKeyword = async (keyword, page = 1) => {
        if (keyword === '') {
            const resp = await getListKeywordAsync();
            return resp;
        }
        const response = await searchKeyWordAsync(keyword, page);
        return response;
    };

    return (
        <KeywordContext.Provider
            value={{
                setToast,
                toast,
                openToast,
                setOpenToast,
                keywordCreate,
                buttonArray,
                setButtonArray,
                previewComponent,
                initialDataKeyword,
                setInitialDataKeyword,
                restoreData,
                setIsEdit,
                isEdit,
                buttonKeywordCreate,
                buttonKeywordUpdate,
                buttonKeywordDelete,
                keywordUpdate,
                setKeywordList,
                keywordList,
                searchKeyword,
                setSearch,
                search,
                informationPage,
                setInformationPage,
                setLoadingItems,
                loadingItems,
                constructKeywordData
            }}
        >
            {children}
        </KeywordContext.Provider>
    );
};
