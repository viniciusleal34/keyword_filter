import React from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import * as S from './styled';
import Button from '../Button/Button';

export const Header = ({
    title,
    handleAside,
    icon,
    name,
    showLog
}) => {
    const history = useHistory();

    return (
        <S.HeaderPluginWrapper>
            <bds-typo
                variant="fs-24"
                bold="bold"
                line-height="none"
                margin="false"
                tag="h1"
            >
                {title}
            </bds-typo>
            <div>
                <Button onClick={handleAside} icon={icon}>
                    {name}
                </Button>
                {showLog && (
                    <Button
                        onClick={() => {
                            history.push('changelog');
                        }}
                    >
                        Logs
                    </Button>
                )}
            </div>
        </S.HeaderPluginWrapper>
    );
};

Header.propTypes = {
    title: PropTypes.string,
    handleAside: PropTypes.func,
    icon: PropTypes.string,
    name: PropTypes.string,
    showLog: PropTypes.bool
};
