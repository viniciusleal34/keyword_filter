/* eslint-disable react/no-array-index-key */
import React, { useContext, useEffect } from 'react';
import PropTypes from 'prop-types';

import { Container, Content, ContentHeader, ContentFooter } from './styles';
import { KeywordContext } from '../../../../context/KeywordContext';
import {
    deleteKeywordAsync,
    getListKeywordAsync
} from '../../../../services/api-service';
import { showToast } from '../../../../services/common-service';
import UIInfiniteScroll from '../../../../components/UI/infinityScroll';
import Button from '../../../../components/Button';

export function ListKeyword({ setOpen, open }) {
    const {
        restoreData,
        keywordList,
        setKeywordList,
        constructKeywordData,
        informationPage,
        loadingItems
    } = useContext(KeywordContext);

    useEffect(async () => {
        const response = await getListKeywordAsync();
        constructKeywordData(response);
    }, []);

    const editInformation = async (id) => {
        if (open) {
            await setOpen(false);
        }
        await restoreData(id);
        await setOpen(true);
    };

    const removeKeyword = async (id) => {
        const response = await deleteKeywordAsync(id);
        if (response !== false) {
            const resp = await getListKeywordAsync();
            setKeywordList(resp?.keywordObjects);
        }
        await showToast({
            type: 'success',
            message: 'Deletado com sucesso!'
        });
    };

    const loadingMoreKeyword = async () => {
        if (informationPage?.hasNextPage) {
            const { currentPage } = informationPage;
            const response = await getListKeywordAsync(currentPage + 1);
            constructKeywordData(response);
        }
    };

    return (
        <Container>
            {keywordList?.map((keyword, index) => (
                <Content key={index.toString()}>
                    <ContentHeader>
                        <Button
                            icon="builder-text-message"
                            variant="secondary"
                        />
                        <strong>{keyword?.keyword}</strong>
                    </ContentHeader>
                    <ContentFooter>
                        <p>{keyword?.menuMessage}</p>
                        <div>
                            <Button
                                icon="edit"
                                variant="secondary"
                                onClick={() => editInformation(keyword?.id)}
                            />
                            <Button
                                icon="trash"
                                variant="secondary"
                                onClick={() => removeKeyword(keyword?.id)}
                            />
                        </div>
                    </ContentFooter>
                    {keyword?.buttonTypes.map((buttonName, i) => (
                        <button type="button" key={i.toString()}>
                            {buttonName}
                        </button>
                    ))}
                </Content>
            ))}
            {!loadingItems && (
                <UIInfiniteScroll
                    fetchMore={loadingMoreKeyword}
                    Items={keywordList}
                />
            )}
        </Container>
    );
}

ListKeyword.propTypes = {
    setOpen: PropTypes.func,
    open: PropTypes.bool
};
