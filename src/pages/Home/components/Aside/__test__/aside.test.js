/* eslint-disable react/jsx-no-constructed-context-values */
/* eslint-disable no-unused-vars */
import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import {  render, screen } from '@testing-library/react';
import UserEvent from '@testing-library/user-event';
import { KeywordContext } from '../../../../../context/KeywordContext';

import { Aside } from '../index';

describe('Test Aside', () => {
    const handleEvent = jest.fn();
    let rtlContainer;

    beforeEach(() => {
        const { container } = render(
            <KeywordContext.Provider
                value={{
                    keywordCreate: handleEvent,
                    isEdit: false,
                    previewComponent: handleEvent,
                    initialDataKeyword: { keyword: '' },
                    keywordUpdate: handleEvent
                }}
            >
                <Aside setOpen={handleEvent} />
            </KeywordContext.Provider>
        );
        rtlContainer = container;
    });

    it('should render inputs', () => {
        expect(screen.getByLabelText('keyword')).toBeInTheDocument();
        expect(screen.getByLabelText('title')).toBeInTheDocument();
        expect(screen.getByLabelText('menuMessage')).toBeInTheDocument();
        expect(screen.queryByText('Lista de botões')).toBeFalsy();
    });
});

describe('Test Aside', () => {
    const handleEvent = jest.fn();
    let rtlContainer;

    beforeEach(() => {
        const { container } = render(
            <KeywordContext.Provider
                value={{
                    keywordCreate: handleEvent,
                    isEdit: true,
                    previewComponent: handleEvent,
                    initialDataKeyword: {keyword: 'keyword', title: 'teste'},
                    keywordUpdate: handleEvent
                }}
            >
                <Aside setOpen={handleEvent} />
            </KeywordContext.Provider>
        );
        rtlContainer = container;
    });

    it('should render inputs', () => {
        console.log(screen.queryAllByLabelText('title')[0]);
        expect(screen.getByLabelText('keyword')).toBeInTheDocument();
        expect(screen.queryAllByLabelText('title')[0]).toBeInTheDocument();
        expect(screen.getByLabelText('menuMessage')).toBeInTheDocument();
        expect(screen.queryAllByLabelText('title')[1]).toBeInTheDocument();

    });
});