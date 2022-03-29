/* eslint-disable no-unused-vars */
import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '@testing-library/react';

import {Header} from '../index';

describe('Button component', () => {
    beforeEach(() => {
        render(
            <Header
                title="Keyword filter"
                handleAside={() => {}}
                icon="add-persistent-menu"
                name="voltar"
            />
        ); 
    });

    it('should render button back', () => {
        expect(screen.getByText('voltar')).toBeInTheDocument();
    });

    it('should no render button with title Logs ', () => {
        const logs = screen.queryByText(/Logs/g);
        expect(logs).not.toBeInTheDocument();
    });

    it('should render title Keyword Filter', () => {
        expect(screen.getByText('Keyword filter')).toBeInTheDocument();
    });


});

describe('Button component when use showLog', () => {

    beforeEach(() => {
        render(
            <Header
                title="Keyword filter"
                handleAside={() => {}}
                icon="add-persistent-menu"
                name="voltar"
                showLog
            />
        ); 
    });

    it('should render button with text Logs', () => {
        const logs = screen.queryByText(/Logs/g);
        expect(logs).toBeInTheDocument();
    });


});
