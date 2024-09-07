import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Input from '../../Components/Input';

describe('Input component', () => {
    test("should render successfully", () => {
        render(<Input name='input' label='label' type='text' />);

        const element = screen.getByRole('textbox');

        expect(element).toBeInTheDocument();

        const labelElement = screen.getByText("label");
        
        expect(labelElement).toBeInTheDocument();
    });

    test('should have placeholder', () => {
        render(<Input name='input' placeholder='placeholder' />);

        const element = screen.getByPlaceholderText('placeholder');

        expect(element).toBeInTheDocument();
    });

    test('should be a password input', () => {
        render(<Input placeholder='Password' type='password'role='pass' />);

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