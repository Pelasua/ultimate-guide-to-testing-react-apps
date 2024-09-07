
import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import ItemList from '../../Components/ItemList';


describe('ItemList component', () => {
    const mockData: {
        value: string,
        label: string
    }[] = [
            {
                value: '1',
                label: 'label 1'
            },
            {
                value: '2',
                label: 'label 2'
            },
            {
                value: '3',
                label: 'label 3'
            },
        ];

    test('should render with data successfully', () => {
        render(<ItemList data={mockData} />);

        expect(screen.getByText(/label 1/i)).toBeInTheDocument();
        expect(screen.getByText(/label 2/i)).toBeInTheDocument();
        expect(screen.getByText(/label 3/i)).toBeInTheDocument();
    });

    test('should render without data successfully', () => {
        render(<ItemList data={[]} />);

        expect(screen.getByText(/No data/i)).toBeInTheDocument();
    });
});
