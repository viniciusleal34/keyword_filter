/* eslint-disable no-unused-vars */
import { objectButton } from '../getInformationButtonType';

import '@testing-library/jest-dom';
import ProjectString from '../../constants/project-constants';

describe('Testing object initial data of "ifs"', () => {
    afterEach(() => jest.clearAllMocks());
    it('should have return initialData of type Text', async () => {
        const expectedResult = {
            title: '',
            value: ''
        };

        const response = objectButton(ProjectString.TYPE_TEXT);
        expect(response.initialData).toEqual(expectedResult);
    });
    it('should have return initialData of type Link', async () => {
        const expectedResult = {
            title: '',
            uri: ''
        };

        const response = objectButton(ProjectString.TYPE_LINK);
        expect(response.initialData).toEqual(expectedResult);
    });
    it('should have return initialData of type redirect', async () => {
        const expectedResult = {
            title: '',
            destinationService: '',
            destinationState: ''
        };

        const response = objectButton(ProjectString.TYPE_REDIRECT);
        expect(response.initialData).toEqual(expectedResult);
    });
    it('should have return initialData of type JSON', async () => {
        const expectedResult = {
            title: '',
            value: ''
        };

        const response = objectButton(ProjectString.TYPE_JSON);
        expect(response.initialData).toEqual(expectedResult);
    });
});
