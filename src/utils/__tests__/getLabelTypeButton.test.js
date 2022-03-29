/* eslint-disable no-unused-vars */
import ButtonTitle from '../getLabelTypeButton';

import '@testing-library/jest-dom';

describe('Testing object initial data of "ifs"', () => {
    afterEach(() => jest.clearAllMocks());
    it('should have return "Botão de Texto"', async () => {
        const expectedResult = "Botão de Texto";

        expect(ButtonTitle.TextButton).toEqual(expectedResult);
    });
    it('should have return "Botão de Link"', async () => {
        const expectedResult = "Botão de Link";

        expect(ButtonTitle.LinkButton).toEqual(expectedResult);
    });
    it('should have return "Botão de Json"', async () => {
        const expectedResult = "Botão de Json";

        expect(ButtonTitle.JsonButton).toEqual(expectedResult);
    });
    it('should have return "Botão de Redirecionamento"', async () => {
        const expectedResult = "Botão de Redirecionamento";

        expect(ButtonTitle.RedirectButton).toEqual(expectedResult);
    });
    it('should have return "Palavra-chave"', async () => {
        const expectedResult = "Palavra-chave";

        expect(ButtonTitle.KeywordMenu).toEqual(expectedResult);
    });
    it('should have return "Menu"', async () => {
        const expectedResult = "Menu";

        expect(ButtonTitle.Header).toEqual(expectedResult);
    });
    it('should have return "Configuracão Geral"', async () => {
        const expectedResult = "Configuracão Geral";
        expect(ButtonTitle.Configuration).toEqual(expectedResult);
    });
});
