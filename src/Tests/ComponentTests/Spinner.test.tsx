// Spinner.test.tsx
import React from 'react';
import { render, screen } from '@testing-library/react';
import Spinner from 'Components/Spinner';


describe('Spinner Component', () => {
    describe('Renderization and Style Props', () => {

        test('should render a default version without props', () => {
            render(<Spinner />);
            const element = screen.getByRole('status');
            expect(element).toHaveClass('w-12 h-12 text-blue-200 animate-spin');
        });

        test('should render correctly with size prop', () => {
            const { rerender } = render(<Spinner size='sm' />);
            let element = screen.getByRole('status');
            expect(element).toHaveClass('w-6 h-6');

            rerender(<Spinner size="md" />);
            element = screen.getByRole('status');
            expect(element).toHaveClass('w-12 h-12');

            rerender(<Spinner size="lg" />);
            element = screen.getByRole('status');
            expect(element).toHaveClass('w-16 h-16');

            rerender(<Spinner size="xl" />);
            element = screen.getByRole('status');
            expect(element).toHaveClass('w-24 h-24');
        });

        test('should render correctly with variant prop', () => {
            const { rerender } = render(<Spinner variant='primary' />);
            let element = screen.getByRole('status');
            expect(element).toHaveClass('text-blue-200');
            let pathElement = screen.getByTestId('spinner-path');
            expect(pathElement).toHaveClass('text-blue-400');

            rerender(<Spinner variant='secondary' />);
            element = screen.getByRole('status');
            expect(element).toHaveClass('text-green-200');
            pathElement = screen.getByTestId('spinner-path');
            expect(pathElement).toHaveClass('text-green-400');

            rerender(<Spinner variant='light' />);
            element = screen.getByRole('status');
            expect(element).toHaveClass('text-transparent');
            pathElement = screen.getByTestId('spinner-path');
            expect(pathElement).toHaveClass('text-white');
        });
    });
});