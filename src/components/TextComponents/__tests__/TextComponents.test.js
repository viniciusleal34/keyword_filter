/* eslint-disable react/jsx-no-constructed-context-values */
/* eslint-disable no-unused-vars */

import React from 'react';
import { render, screen } from '@testing-library/react';
import { KeywordContext } from '../../../context/KeywordContext';

import { TextComponents } from '../index';

const buttonArray = [
    {
        id: '0e08041f-1cde-41ac-8b31-284ccdde7cea',
        title: 'teste1',
        value: 'teste1',
        type: 'text'
    },
    {
        id: 'ff14bc59-12aa-45d0-90f7-0f9b2f5a917b',
        title: 'teste2',
        value: 'teste2',
        type: 'text'
    },
    {
        id: '71a433bb-d153-4ed1-865e-fe472eb8b935',
        title: 'teste3',
        uri: 'https://portal.blip.ai/application/detail/plugin3/plugin/keyword-filter',
        type: 'link'
    },
    {
        id: 'fd1317ba-91d9-4103-b587-0dc40de691c8',
        title: 'das',
        destinationService: 'teste4',
        destinationState: 'teste6',
        type: 'redirect'
    }
];
const buttonObject = {
    headerId: '3a1b0ace-1512-4832-b3a2-fda427e950fa',
    id: '478ea40d-be91-4968-a57b-41400589b681',
    keyword: 'keyword',
    menuMessage: 'lorem Lorem lorem',
    title: 'Palavra'
};

describe('Testing with Component is visible', () => {
    const handleClick = jest.fn();
    let rtlContainer;

    beforeEach(() => {
        const { container } = render(
            <KeywordContext.Provider value={{ buttonArray }}>
                <TextComponents
                    buttonObject={buttonObject}
                    open
                    setOpen={handleClick}
                />
            </KeywordContext.Provider>
        );
        rtlContainer = container;
    });

    it('Should modal is open', () => {
        expect(screen.getByText('teste1')).toBeTruthy();
        expect(screen.getByText('teste2')).toBeTruthy();
        expect(screen.getByText('Palavra')).toBeTruthy();
        expect(screen.getByText('lorem Lorem lorem')).toBeTruthy();
    });
});

describe('Testing with Component is not visible', () => {
    const handleClick = jest.fn();
    let rtlContainer;

    beforeEach(() => {
        const { container } = render(
            <KeywordContext.Provider value={{ buttonArray }}>
                <TextComponents
                    buttonObject={buttonObject}
                    open={false}
                    setOpen={handleClick}
                />
            </KeywordContext.Provider>
        );
        rtlContainer = container;
    });

    it('should snapshot',() =>{
        expect(rtlContainer.firstChild).toMatchSnapshot();
    });

    it('Should modal is close', () => {
        expect(screen.queryByText('lorem Lorem lorem')).not.toBeTruthy();
    });
    
});
