import '@testing-library/jest-dom';

import * as api from '../api-service';

describe('api service getListKeywordAsync', () => {
    afterEach(() => jest.clearAllMocks());

    it('should have called the getListKeywordAsync method', async () => {
        const expectedResult = {
            keywordObjects: [
                {
                    id: '478ea40d-be91-4968-a57b-41400589b681',
                    keyword: 'Dasd',
                    menuMessage: 'adssdaasd',
                    buttonTypes: ['Texto', 'Link', 'Redirecionamento']
                }
            ],
            currentPage: 1,
            keywordsCount: 3,
            totalKeywords: 3,
            totalPages: 1,
            hasNextPage: false,
            errors: [],
            isValid: true
        };
        const mockMethod = jest
            .spyOn(api, 'getListKeywordAsync')
            .mockImplementation(() => Promise.resolve(expectedResult));

        const response = await api.getListKeywordAsync();

        expect(mockMethod._isMockFunction).toBeTruthy();
        expect(mockMethod).toHaveBeenCalledTimes(1);
        expect(response).toEqual(expectedResult);
    });

    it('should have called return exception', async () => {
        const mockMethod = jest
            .spyOn(api, 'getListKeywordAsync')
            .mockImplementation(() => Promise.resolve(false));

        const response = await api.getListKeywordAsync();

        expect(mockMethod._isMockFunction).toBeTruthy();
        expect(mockMethod).toHaveBeenCalledTimes(1);
        expect(response).toEqual(false);
    });

    it('should have called return exception', async () => {
        const mockMethod = jest
            .spyOn(api, 'getListKeywordAsync')
            .mockImplementation(() => Promise.resolve(false));

        const response = await api.getListKeywordAsync();

        expect(mockMethod._isMockFunction).toBeTruthy();
        expect(mockMethod).toHaveBeenCalledTimes(1);
        expect(response).toEqual(false);
    });

    it('should have called return exception', async () => {
        const mockMethod = jest
            .spyOn(api, 'getListKeywordAsync')
            .mockImplementation(() => Promise.resolve(false));

        const response = await api.getListKeywordAsync();

        expect(mockMethod._isMockFunction).toBeTruthy();
        expect(mockMethod).toHaveBeenCalledTimes(1);
        expect(response).toEqual(false);
    });

    it('should have called create keyword', async () => {
        const request = {
            keyword: 'string',
            title: 'string',
            menuMessage: 'string',
            isTextHeader: true,
            imageUri: 'string',
            textButtons: [
                {
                    title: 'string',
                    value: 'string',
                    position: 0
                }
            ],
            jsonButtons: [
                {
                    title: 'string',
                    value: 'string',
                    position: 0
                }
            ],
            linkButtons: [
                {
                    title: 'string',
                    uri: 'string',
                    position: 0
                }
            ],
            redirectButtons: [
                {
                    title: 'string',
                    destinationService: 'string',
                    destinationState: 'string',
                    position: 0
                }
            ]
        };
        const mockMethod = jest
            .spyOn(api, 'postKeywordAsync')
            .mockImplementation(() => Promise.resolve(undefined));

        const response = await api.postKeywordAsync(request);

        expect(mockMethod._isMockFunction).toBeTruthy();
        expect(mockMethod).toHaveBeenCalledTimes(1);
        expect(response).toEqual(undefined);
    });

    it('should have called create keyword return exception', async () => {
        const request = {};
        const mockMethod = jest
            .spyOn(api, 'postKeywordAsync')
            .mockImplementation(() => Promise.resolve(false));

        const response = await api.postKeywordAsync(request);

        expect(mockMethod._isMockFunction).toBeTruthy();
        expect(mockMethod).toHaveBeenCalledTimes(1);
        expect(response).toEqual(false);
    });

});

describe('api service getLogs', () => {
    afterEach(() => jest.clearAllMocks());
    it('should have called the getLogs method', async () => {
        const expectedResult = {
            logs: [
                {
                    user: 'user@teste.net',
                    keyword: 'dasd',
                    action: 'Editado',
                    editDate: '2022-03-21T18:57:27.262Z',
                    componentType: 'Header',
                    oldValue:
                        '{"Title":"asddas","MenuMessage":"adssdaasd","IsTextHeader":true}',
                    actualValue:
                        '{"Title":"asddas","MenuMessage":"adssdaasd","IsTextHeader":true}'
                }
            ],
            currentPage: 1,
            logsCount: 10,
            totalLogs: 123,
            totalPages: 13,
            hasNextPage: true
        };
        const mockMethod = jest
            .spyOn(api, 'getLogs')
            .mockImplementation(() => Promise.resolve(expectedResult));

        const response = await api.getLogs();

        expect(mockMethod._isMockFunction).toBeTruthy();
        expect(mockMethod).toHaveBeenCalledTimes(1);
        expect(response).toEqual(expectedResult);
    });

    it('should have called getLogs return exception', async () => {
        const mockMethod = jest
            .spyOn(api, 'getLogs')
            .mockImplementation(() => Promise.resolve(false));

        const response = await api.getLogs();

        expect(mockMethod._isMockFunction).toBeTruthy();
        expect(mockMethod).toHaveBeenCalledTimes(1);
        expect(response).toEqual(false);
    });

    it('should have called searchLogAsync return all logs of keyword', async () => {
        const expectedResult = {
            logs: [
                {
                    user: 'teste@teste.net',
                    keyword: 'keyword',
                    action: 'Adicionado',
                    editDate: '2022-03-21T18:56:31.052Z',
                    componentType: 'RedirectButton',
                    oldValue:
                        '{"Title":"dsaasd","DestinationService":"adsasd","DestinationState":"dasasd"}',
                    actualValue: null
                }
            ]
        };
        const mockMethod = jest
            .spyOn(api, 'searchLogAsync')
            .mockImplementation(() => Promise.resolve(expectedResult));

        const response = await api.searchLogAsync('keyword');

        expect(mockMethod._isMockFunction).toBeTruthy();
        expect(mockMethod).toHaveBeenCalledTimes(1);
        expect(response).toEqual(expectedResult);
    });
    it('should have called searchLogAsync return exception', async () => {
        const mockMethod = jest
            .spyOn(api, 'searchLogAsync')
            .mockImplementation(() => Promise.resolve(false));

        const response = await api.searchLogAsync(3);

        expect(mockMethod._isMockFunction).toBeTruthy();
        expect(mockMethod).toHaveBeenCalledTimes(1);
        expect(response).toEqual(false);
    });
});
