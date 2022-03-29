import React, { useContext, useEffect, useState } from 'react';
import { withLoadingAsync } from '../../services/common-service';
import { getApplicationDataAsync } from '../../services/application-service';
import { track } from '../../services/analytics-service';

import * as S from './styles';
import { KeywordContext } from '../../context/KeywordContext';
import { EXTENSION_TRACKS } from '../../constants/tracking';
import { setEmailUser, setIdentifier } from '../../services/getAuth';
import { Header } from '../../components/Header';
import { ListKeyword } from './components/ListKeyword';
import { Aside } from './components/Aside';
import { ChangelogContext } from '../../context/ChangelogContext';
import { getListKeywordAsync } from '../../services/api-service';
import Input from '../../components/Input';
import Button from '../../components/Button/Button';

// eslint-disable-next-line react/prop-types
export const Home = ({ children }) => {
    const [isOpen, setOpen] = useState(false);
    const [application, setApplication] = useState({ shortName: 'init' });
    const { setLogData } = useContext(ChangelogContext);

    const {
        setInitialDataKeyword,
        setButtonArray,
        setIsEdit,
        searchKeyword,
        constructKeywordData,
        setSearch,
        search
    } = useContext(KeywordContext);

    useEffect(() => {
        withLoadingAsync(async () => {
            setApplication(await getApplicationDataAsync());
            track(EXTENSION_TRACKS.open, {
                botId: application.name
            });
        });
        if (application?.emailOwner) {
            setEmailUser(application?.emailOwner);
            setIdentifier(application?.applicationJson?.identifier);
        }
    }, [application.shortName]);

    useEffect(() => {
        setLogData([]);
    }, []);

    const newKeyword = () => {
        setInitialDataKeyword({
            keyword: '',
            title: '',
            menuMessage: '',
            id: ''
        });
        setButtonArray([]);
        setOpen(!isOpen);
        setIsEdit(false);
    };

    return (
        <S.LayoutWrapper>
            <S.Layout>
                <Header
                    title="Keyword filter"
                    handleAside={newKeyword}
                    icon="add-persistent-menu"
                    name="Nova Palavra chave"
                    showLog
                />
                <S.SearchContainer>
                    <div>
                        <Input
                            name="keyword"
                            value={search}
                            placeholder="Pesquisar palavra chave"
                            onChange={(e) => {
                                setSearch(() => e?.target.value);
                            }}
                        />
                    </div>
                    <Button
                        icon="search"
                        variant="primary"
                        onClick={async () => {
                            if (search !== '') {
                                const response = await searchKeyword(search, 1);
                                constructKeywordData(response, true);
                            } else {
                                const response = await getListKeywordAsync();
                                constructKeywordData(response, true);
                            }
                        }}
                    />
                </S.SearchContainer>
                <S.Section>{children}</S.Section>
                <ListKeyword setOpen={setOpen} open={isOpen} />
            </S.Layout>
            {isOpen && <Aside setOpen={setOpen} />}
        </S.LayoutWrapper>
    );
};
