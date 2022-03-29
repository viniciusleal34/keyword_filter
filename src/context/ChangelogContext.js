/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-no-constructed-context-values */

import React, { createContext, useState } from 'react';
import { searchLogAsync } from '../services/api-service';
import TypeComponent from '../utils/getLabelTypeButton';

const ChangelogContext = createContext();

const ChangelogStore = ({ children }) => {
    const [logData, setLogData] = useState([]);
    const [informationPage, setInformationPage] = useState({});
    const [loadingItems, setLoadingItems] = useState(true);
    const [search, setSearch] = useState('');

    const searchLogs = async (page) => {
        const resp = await searchLogAsync(search, page);
        // delete resp?.logs;
        // setInformationPage(resp);
        return resp;
    };

    const constructObjectsData = async (response, isSearch = false) => {
        setLoadingItems(true);
        const logObjects = response?.logs?.map((logObject) => ({
            user: logObject.user,
            keyword: logObject.keyword,
            editDate: logObject.editDate,
            action: logObject.action,
            componentType: TypeComponent[logObject.componentType],
            actualValue: JSON.parse(logObject.actualValue),
            oldValue: JSON.parse(logObject.oldValue)
        }));
        if (isSearch) {
            setLogData(logObjects);
        } else {
            setLogData(() => [...logData, ...logObjects]);
        }
        delete response?.logs;
        setInformationPage(response);
        setTimeout(() => {
            setLoadingItems(false);
        }, 300);
    };

    return (
        <ChangelogContext.Provider
            value={{
                logData,
                setLogData,
                searchLogs,
                informationPage,
                setInformationPage,
                loadingItems,
                constructObjectsData,
                setLoadingItems,
                setSearch,
                search
            }}
        >
            {children}
        </ChangelogContext.Provider>
    );
};

export { ChangelogContext, ChangelogStore };
