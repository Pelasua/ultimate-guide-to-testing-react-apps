import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import Input from '../../Components/Input';

describe('Input component', () => {
    describe('General renderization', () => {
        test("should render successfully", () => {
            render(<Input name='input' label='label' type='text' />);

            const element = screen.getByRole('textbox');

            expect(element).toBeInTheDocument();

            const labelElement = screen.getByText("label");

             expect(labelElement).toBeInTheDocument();
        });
    });

    describe('Props', () => {
        test('should have placeholder', () => {
            render(<Input name='input' placeholder='placeholder' />);

            const element = screen.getByPlaceholderText('placeholder');

            expect(element).toBeInTheDocument();
        });

        test('should be a password input', () => {
            render(<Input placeholder='Password' type='password' role='pass' />);

            const element = screen.getByPlaceholderText('Password');

            expect(element).toHaveAttribute('type', 'password');
        });

        test('should be disabled', () => {
            render(<Input disabled />);

            const element = screen.getByRole('textbox');

            element.focus();

            expect(element).not.toHaveFocus();
        });

        test('should be loading', () => {
            render(<Input loading />);

            const element = screen.getByRole('textbox');

            element.focus();

            expect(element).not.toHaveFocus();
        });

        test('should display an error', () => {
            render(<Input error='error!' />);

            const element = screen.getByRole('textbox');

            expect(element).toBeInTheDocument();
        });
    });

    describe('Styles', () => {
        test('should display the error message with error styles', () => {
            render(<Input error='error!' />);

            const element = screen.getByText('error!');

            expect(element).toHaveClass('text-red-500 text-xs');
        });

        test('should display the error message with with an underline decoration', () => {
            render(<Input error='error!' />);

            const element = screen.getByText('error!');

            expect(element).toHaveStyle({
                textDecoration: 'underline'
            });
        });

        test('should display the label styles successfully', () => {
            render(<Input label='Input label' />);

            const element = screen.getByText('Input label');

            expect(element).toHaveClass('flex flex-col items-start text-sm gap-1 text-gray-500 w-full');
        });

        test('should display the input with red border if there is an error', () => {
            render(<Input error='error' />);

            const element = screen.getByRole('textbox');

            expect(element).toHaveClass('border-solid border border-red-500');

        });
    });

    describe('State changes and Custom hooks', () => {
        test('should vibrate if there is an error', async () => {
            const { rerender } = render(<Input />);
            let element = screen.getByRole('textbox');

            expect(element).not.toHaveClass(' animate-vibrate ');

            rerender(<Input error="Invalid input" />);
            element = screen.getByRole('textbox');


            await waitFor(() => {
                expect(screen.getByRole('textbox')).toHaveClass('animate-vibrate');
            });

            await waitFor(() => {
                expect(screen.getByRole('textbox')).not.toHaveClass('animate-vibrate');
            });
        });
    });
});