/* eslint-disable react/no-array-index-key */
import React, { useContext } from 'react';
import PropTypes from 'prop-types';

import { Container, Modal } from './styles';
import { KeywordContext } from '../../context/KeywordContext';

export function TextComponents({ buttonObject, open, setOpen }) {
    const { buttonArray } = useContext(KeywordContext);

    return (
        <Modal
            data-testid="modal"
            isOpen={open && buttonObject?.menuMessage !== ''}
            onRequestClose={() => setOpen(false)}
            contentLabel="Example Modal"
        >
            <Container>
                <div>
                    {buttonObject?.title && (
                        <strong aria-label="titulo">
                            {buttonObject?.title}
                        </strong>
                    )}
                    <p>{buttonObject?.menuMessage}</p>
                </div>
                <footer>
                    {buttonArray?.map((element, index) => (
                        <button
                            aria-label={element?.title}
                            type="submit"
                            key={index.toString()}
                        >
                            {element?.title}
                        </button>
                    ))}
                </footer>
            </Container>
        </Modal>
    );
}

TextComponents.propTypes = {
    buttonObject: PropTypes.object,
    open: PropTypes.bool,
    setOpen: PropTypes.func
};
