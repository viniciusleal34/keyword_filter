/* eslint-disable no-unused-vars */
import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '@testing-library/react';

import { ButtonCreate } from '../index';


describe('Button with type "text" component', () => {
    const handleEvent = jest.fn();
    let rtlContainer;

    beforeEach(() => {
        const { container } = render(
            <ButtonCreate
                values={{}}
                type="text"
                handleBlur={handleEvent}
                handleChange={handleEvent}
                errors={{}}
                touched={{}}
                setSelectValue={handleEvent}
                setFieldValue={handleEvent}
            />
        );
        rtlContainer = container;
    });

    it('should render two button use text', () => {
        expect(screen.getByPlaceholderText('Titulo do botão')).toBeInTheDocument();
        expect(screen.getByPlaceholderText('Valor do botão')).toBeInTheDocument();
        expect(screen.queryByPlaceholderText('Link do botão')).not.toBeInTheDocument();
        expect(screen.queryByPlaceholderText('Serviço de redirecionamento')).not.toBeInTheDocument();
        expect(screen.queryByPlaceholderText('Bloco de redirecionamento')).not.toBeInTheDocument();
        expect(screen.queryByPlaceholderText('Insira seu JSON aqui')).not.toBeInTheDocument();
    });
});

describe('Button with type "link" component', () => {
    const handleEvent = jest.fn();
    let rtlContainer;

    beforeEach(() => {
        const { container } = render(
            <ButtonCreate
                values={{}}
                type="link"
                handleBlur={handleEvent}
                handleChange={handleEvent}
                errors={{}}
                touched={{}}
                setSelectValue={handleEvent}
                setFieldValue={handleEvent}
            />
        );
        rtlContainer = container;
    });

    it('should render two button use text', () => {
        expect(screen.getByPlaceholderText('Titulo do botão')).toBeInTheDocument();
        expect(screen.getByPlaceholderText('Link do botão')).toBeInTheDocument();
        expect(screen.queryByPlaceholderText('Valor do botão')).not.toBeInTheDocument();
        expect(screen.queryByPlaceholderText('Serviço de redirecionamento')).not.toBeInTheDocument();
        expect(screen.queryByPlaceholderText('Bloco de redirecionamento')).not.toBeInTheDocument();
        expect(screen.queryByPlaceholderText('Insira seu JSON aqui')).not.toBeInTheDocument();
    });
});

describe('Button with type "json" component', () => {
    const handleEvent = jest.fn();
    let rtlContainer;

    beforeEach(() => {
        const { container } = render(
            <ButtonCreate
                values={{}}
                type="json"
                handleBlur={handleEvent}
                handleChange={handleEvent}
                errors={{}}
                touched={{}}
                setSelectValue={handleEvent}
                setFieldValue={handleEvent}
            />
        );
        rtlContainer = container;
    });

    it('should render two button use text', () => {
        expect(screen.getByPlaceholderText('Titulo do botão')).toBeInTheDocument();
        expect(screen.getByPlaceholderText('Insira seu JSON aqui')).toBeInTheDocument();
        expect(screen.queryByPlaceholderText('Valor do botão')).not.toBeInTheDocument();
        expect(screen.queryByPlaceholderText('Serviço de redirecionamento')).not.toBeInTheDocument();
        expect(screen.queryByPlaceholderText('Bloco de redirecionamento')).not.toBeInTheDocument();
        expect(screen.queryByPlaceholderText('Link do botão')).not.toBeInTheDocument();
    });
});

describe('Button with type "redirect" component', () => {
    const handleEvent = jest.fn();
    let rtlContainer;

    beforeEach(() => {
        const { container } = render(
            <ButtonCreate
                values={{}}
                type="redirect"
                handleBlur={handleEvent}
                handleChange={handleEvent}
                errors={{}}
                touched={{}}
                setSelectValue={handleEvent}
                setFieldValue={handleEvent}
            />
        );
        rtlContainer = container;
    });

    it('should render two button use text', () => {
        expect(screen.getByPlaceholderText('Titulo do botão')).toBeInTheDocument();
        expect(screen.getByPlaceholderText('Serviço de redirecionamento')).toBeInTheDocument();
        expect(screen.getByPlaceholderText('Bloco de redirecionamento')).toBeInTheDocument();
        expect(screen.queryByPlaceholderText('Valor do botão')).not.toBeInTheDocument();
        expect(screen.queryByPlaceholderText('Insira seu JSON aqui')).not.toBeInTheDocument();
        expect(screen.queryByPlaceholderText('Link do botão')).not.toBeInTheDocument();
    });
});