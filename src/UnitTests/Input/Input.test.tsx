import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Input from './Input';

describe('Input component', () => {
    test("should renders successfully", () => {
        render(<Input name='input' label='label' testId='input' />);

        const element = screen.getByTestId("input");

        expect(element).toBeInTheDocument();

        const labelElement = screen.getByText("label")
        
        expect(labelElement).toBeInTheDocument();
    });

    test('should have placeholder', () => {
        render(<Input name='input' placeholder='placeholder' />);

        const element = screen.getByPlaceholderText('placeholder')

        expect(element).toBeInTheDocument();
    });

    test('should be a password input', () => {
        render(<Input type='password' testId='input' />);

        const element = screen.getByTestId("input");

        expect(element).toHaveAttribute('type', 'password');
    });

    test('should be disabled', () => {
        render(<Input disabled testId="input" />);

        const inputElement = screen.getByTestId("input");

        inputElement.focus();

        expect(inputElement).not.toHaveFocus();
    });

    test('should be loading', () => {
        render(<Input loading testId="input" />);

        const inputElement = screen.getByTestId("input");

        inputElement.focus();

        expect(inputElement).not.toHaveFocus();
    });

    test('should displays an error', () => {
        render(<Input error='error!' testId="input" />);

        const element = screen.getByText("error!");

        expect(element).toBeInTheDocument();
    });
});