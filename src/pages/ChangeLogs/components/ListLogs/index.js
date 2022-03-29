import React, { useEffect, useContext } from 'react';
import { getLogs } from '../../../../services/api-service';
import UIInfiniteScroll from '../../../../components/UI/infinityScroll';

import {
    Container,
    Content,
    ContentHeader,
    ContentFooter,
    LogItem,
    ButtonLog,
    HeaderLog,
    ConfigurationLog,
    KeywordLog,
    Divisor
} from './styles';
import ProjectString from '../../../../constants/project-constants';
import { ChangelogContext } from '../../../../context/ChangelogContext';
import Button from '../../../../components/Button/Button';

export function ListLogs() {
    const {
        logData,
        informationPage,
        searchLogs,
        constructObjectsData,
        loadingItems,
        search
    } = useContext(ChangelogContext);

    useEffect(async () => {
        const response = await getLogs(1);
        constructObjectsData(response);
    }, []);

    const loadingMoreLogs = async () => {
        if (search !== '' && informationPage?.hasNextPage) {
            const { currentPage } = informationPage;
            const response = await searchLogs(currentPage + 1);
            await constructObjectsData(response);
        } else if (search === '' && informationPage?.hasNextPage) {
            const { currentPage } = informationPage;
            const response = await getLogs(currentPage + 1);
            constructObjectsData(response);
        }
    };

    function getOldValues(logObject) {
        if (logObject.action === ProjectString.TYPE_ACTION_ADD) {
            return <p />;
        }

        if (
            logObject.componentType === ProjectString.BUTTON_TEXT ||
            logObject.componentType === ProjectString.BUTTON_JSON
        ) {
            return (
                <ButtonLog>
                    <p>
                        <b>Titulo:</b> {logObject?.oldValue?.Title}
                    </p>
                    <p>
                        <b>Valor:</b> {logObject?.oldValue?.Value}
                    </p>
                </ButtonLog>
            );
        }

        if (logObject.componentType === ProjectString.BUTTON_LINK) {
            return (
                <ButtonLog>
                    <p>
                        <b>Titulo:</b> {logObject?.oldValue?.Title}
                    </p>
                    <p>
                        <b>Uri:</b> {logObject?.oldValue?.Uri}
                    </p>
                </ButtonLog>
            );
        }

        if (logObject.componentType === ProjectString.BUTTON_REDIRECT) {
            return (
                <ButtonLog>
                    <p>
                        <b>Titulo:</b> {logObject?.oldValue?.Title}
                    </p>
                    <p>
                        <b>Serviço:</b>{' '}
                        {logObject?.oldValue?.DestinationService}
                    </p>
                    <p>
                        <b>Bloco de Destino:</b>{' '}
                        {logObject?.oldValue?.DestinationState}
                    </p>
                </ButtonLog>
            );
        }

        if (logObject.componentType === ProjectString.TEXT_MENU) {
            return (
                <HeaderLog>
                    <p>
                        <b>Titulo:</b> {logObject?.oldValue?.Title}
                    </p>
                    <p>
                        <b>Mensagem:</b> {logObject?.oldValue?.MenuMessage}
                    </p>
                </HeaderLog>
            );
        }

        if (logObject?.componentType === ProjectString.TEXT_KEYWORD) {
            return (
                <KeywordLog>
                    <p>
                        <b>Palavra-chave:</b> {logObject?.oldValue?.Keyword}
                    </p>
                </KeywordLog>
            );
        }

        if (
            logObject?.componentType ===
            ProjectString.TEXT_GENERAL_CONFIGURATION
        ) {
            return (
                <ConfigurationLog>
                    <p>
                        <b>Fuzzy match ativado:</b>{' '}
                        {logObject?.oldValue?.IsFuzzyMatchEnable}
                    </p>
                    <p>
                        <b>Confiabilidade:</b>{' '}
                        {logObject?.oldValue?.FuzzyMatchThreshold}
                    </p>
                </ConfigurationLog>
            );
        }
    }

    function getActualValues(logObject) {
        if (logObject?.action === ProjectString.TYPE_ACTION_DELETE) {
            return <p />;
        }

        if (
            logObject?.componentType === ProjectString.BUTTON_TEXT ||
            logObject?.componentType === ProjectString.BUTTON_JSON
        ) {
            return (
                <ButtonLog>
                    <p>
                        <b>Titulo:</b> {logObject?.actualValue?.Title}
                    </p>
                    <p>
                        <b>Valor:</b> {logObject?.actualValue?.Value}
                    </p>
                </ButtonLog>
            );
        }

        if (logObject?.componentType === ProjectString.BUTTON_LINK) {
            return (
                <ButtonLog>
                    <p>
                        <b>Titulo:</b> {logObject?.actualValue?.Title}
                    </p>
                    <p>
                        <b>Uri:</b> {logObject?.actualValue?.Uri}
                    </p>
                </ButtonLog>
            );
        }

        if (logObject?.componentType === ProjectString.BUTTON_REDIRECT) {
            return (
                <ButtonLog>
                    <p>
                        <b>Titulo:</b> {logObject?.actualValue?.Title}
                    </p>
                    <p>
                        <b>Serviço:</b>{' '}
                        {logObject?.actualValue?.DestinationService}
                    </p>
                    <p>
                        <b>Bloco de Destino:</b>{' '}
                        {logObject?.actualValue?.DestinationState}
                    </p>
                </ButtonLog>
            );
        }

        if (logObject?.componentType === ProjectString.TEXT_MENU) {
            return (
                <HeaderLog>
                    <p>
                        <b>Titulo:</b> {logObject?.actualValue?.Title}
                    </p>
                    <p>
                        <b>Mensagem:</b> {logObject?.actualValue?.MenuMessage}
                    </p>
                </HeaderLog>
            );
        }

        if (logObject?.componentType === ProjectString.TEXT_KEYWORD) {
            return (
                <KeywordLog>
                    <p>
                        <b>Palavra-chave:</b> {logObject?.actualValue?.Keyword}
                    </p>
                </KeywordLog>
            );
        }

        if (
            logObject?.componentType ===
            ProjectString.TEXT_GENERAL_CONFIGURATION
        ) {
            return (
                <ConfigurationLog>
                    <p>
                        <b>Fuzzy match ativado:</b>{' '}
                        {logObject?.actualValue?.IsFuzzyMatchEnable}
                    </p>
                    <p>
                        <b>Confiabilidade:</b>{' '}
                        {logObject?.actualValue?.FuzzyMatchThreshold}
                    </p>
                </ConfigurationLog>
            );
        }
    }

    return (
        <Container>
            {logData?.map((logObject) => (
                <Content action={logObject?.action}>
                    <ContentHeader>
                        <Button
                            icon="builder-text-message"
                            variant="secondary"
                        />
                        <strong>{logObject?.keyword}</strong>
                    </ContentHeader>
                    <LogItem>
                        <ContentFooter>
                            <p>
                                <b>Usuário:</b> {logObject?.user}
                            </p>
                            <p>
                                <b>Data:</b>{' '}
                                {new Date(logObject?.editDate).toLocaleString(
                                    'pt-br'
                                )}
                            </p>
                            <p>
                                <b>Componente:</b> {logObject?.componentType}
                            </p>
                            <p>
                                <b>Ação:</b> {logObject?.action}
                            </p>
                        </ContentFooter>
                        {logObject?.action !==
                            ProjectString.TYPE_ACTION_ADD && (
                            <>
                                <Divisor />
                                <ContentFooter>
                                    <ContentHeader>
                                        <Button
                                            icon="arrow-ball-up"
                                            variant="secondary"
                                        />
                                        <strong>Valor antigo</strong>
                                    </ContentHeader>
                                    {getOldValues(logObject)}
                                </ContentFooter>
                            </>
                        )}
                        {logObject?.action !==
                            ProjectString.TYPE_ACTION_DELETE && (
                            <>
                                <Divisor />
                                <ContentFooter>
                                    <ContentHeader>
                                        <Button
                                            icon="arrow-ball-down"
                                            variant="secondary"
                                        />
                                        <strong>Valor atual</strong>
                                    </ContentHeader>
                                    {getActualValues(logObject)}
                                </ContentFooter>
                            </>
                        )}
                    </LogItem>
                </Content>
            ))}
            <UIInfiniteScroll
                fetchMore={loadingMoreLogs}
                Items={loadingItems}
            />
        </Container>
    );
}

