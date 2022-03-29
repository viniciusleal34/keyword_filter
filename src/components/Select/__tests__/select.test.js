/* eslint-disable no-unused-vars */
import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '@testing-library/react';

import userEvent from '@testing-library/user-event';
import {Select} from '../index';

describe('Select component', () => {
    const handleEvent = jest.fn();
    const mockOptions = [
        { value: 'Cat', label: 'Meow', title: "Cat" },
        { value: 'Dog', label: 'Woof',  title: "Dog" }
    ];

    it('should render correctly', () => {
        const { container } = render(
            <Select
                placeholder="Select.."
                value=""
                options={mockOptions}
                onChange={handleEvent}
            />
        );

        expect(container.firstChild).toMatchSnapshot();
    });

    it('should not render options', () => {
        expect(screen.queryByText('Meow')).not.toBeTruthy();
        expect(screen.queryByText('Woof')).not.toBeTruthy();
    });
});