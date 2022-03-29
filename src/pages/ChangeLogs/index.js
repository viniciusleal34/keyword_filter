import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useContext } from 'react/cjs/react.development';
import { Header } from '../../components/Header';
import { KeywordContext } from '../../context/KeywordContext';
import { ListLogs } from './components/ListLogs';

import * as S from './styles';
import { ChangelogContext } from '../../context/ChangelogContext';
import { getLogs } from '../../services/api-service';
import Input from '../../components/Input';
import Button from '../../components/Button/Button';

// eslint-disable-next-line react/prop-types
export const ChangeLogs = ({ children }) => {
    const [isOpen, setOpen] = useState(false);

    const { setKeywordList } = useContext(KeywordContext);
    const { searchLogs, setSearch, search, constructObjectsData, setLogData } =
        useContext(ChangelogContext);

    const history = useHistory();

    const redirectHome = () => {
        history.push('/');
        setKeywordList([]);
    };

    return (
        <S.LayoutWrapper>
            <S.Layout>
                <Header
                    title="Changelogs"
                    handleAside={redirectHome}
                    icon="arrow-ball-left"
                    name="Voltar"
                />
                <S.SearchContainer>
                    <div>
                        <Input
                            name="keyword"
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
                            setLogData(() => []);
                            if (search === '') {
                                const response = await getLogs(1);
                                constructObjectsData(response, true);
                            } else {
                                const response = await searchLogs(1);
                                constructObjectsData(response, true);
                            }
                        }}
                    />
                </S.SearchContainer>
                <S.Section>{children}</S.Section>
                <ListLogs setOpen={setOpen} open={isOpen} />
            </S.Layout>
        </S.LayoutWrapper>
    );
};
