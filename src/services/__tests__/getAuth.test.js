import '@testing-library/jest-dom';

import * as auth from '../getAuth';

describe('testing return getAuth', () => {
    afterEach(() => jest.clearAllMocks());

    it('should have called getEmailUser the getListKeywordAsync method', async () => {
        const expectedResult = 'user.teste@teste.com';
        const mockMethod = jest
            .spyOn(auth, 'getEmailUser')
            .mockImplementation(() => Promise.resolve(expectedResult));

        const response = await auth.getEmailUser();

        expect(mockMethod._isMockFunction).toBeTruthy();
        expect(mockMethod).toHaveBeenCalledTimes(1);
        expect(response).toEqual(expectedResult);
    });

    it('should have called getEmailUser return null', async () => {
        const mockMethod = jest
            .spyOn(auth, 'getEmailUser')
            .mockImplementation(() => Promise.resolve(null));

        const response = await auth.getEmailUser();

        expect(mockMethod._isMockFunction).toBeTruthy();
        expect(mockMethod).toHaveBeenCalledTimes(1);
        expect(response).toEqual(null);
    });

    it('should have called getIdentifier return success', async () => {
        const mockMethod = jest
            .spyOn(auth, 'getIdentifier')
            .mockImplementation(() => Promise.resolve('plugin'));

        const response = await auth.getIdentifier();

        expect(mockMethod._isMockFunction).toBeTruthy();
        expect(mockMethod).toHaveBeenCalledTimes(1);
        expect(response).toEqual('plugin');
    });

    it('should have called getIdentifier return null', async () => {
        const mockMethod = jest
            .spyOn(auth, 'getIdentifier')
            .mockImplementation(() => Promise.resolve(null));

        const response = await auth.getIdentifier();

        expect(mockMethod._isMockFunction).toBeTruthy();
        expect(mockMethod).toHaveBeenCalledTimes(1);
        expect(response).toEqual(null);
    });
});

describe('testing return insert item in asyncStorage', () => {
    afterEach(() => jest.clearAllMocks());

    it('should have called setEmailUser and attribute value', async () => {
        auth.setEmailUser('teste@teste.com');
        const expectedResult = 'teste@teste.com';

        const response = localStorage.getItem('user');
        expect(response).toEqual(expectedResult);
    });

    it('should have called setIdentifier and attribute value ', async () => {
        auth.setIdentifier('plugin');
        const expectedResult = 'plugin';

        const response = localStorage.getItem('identifier');
        expect(response).toEqual(expectedResult);
    });
});
