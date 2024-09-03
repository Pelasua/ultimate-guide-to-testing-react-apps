import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Button from './Button';

describe('Button component', () => {
    test("should renders successfully", () => {
        render(<Button onClick={() => { }}>Test Button</Button>);

        const element = screen.getByRole('button', {
            name: /Test Button/i
        });

        expect(element).toBeInTheDocument();
    })

    test('should be disabled', () => {
        const handleClick = jest.fn();
        render(<Button onClick={handleClick} disabled>Test Button</Button>);

        const element = screen.getByRole('button');
        fireEvent.click(element);

        expect(element).toBeDisabled();
        
        expect(handleClick).toHaveBeenCalledTimes(0);
    })

    test('should be loading', () => {
        render(<Button onClick={() => { }} loading>Test Button</Button>);
        const element = screen.getByRole('button');

        expect(element).toBeDisabled();
        expect(element).toHaveTextContent('Loading ...')
    })

    test('should activate onClick event', () => {
        const handleClick = jest.fn();
        render(<Button onClick={handleClick}>Test Button</Button>);

        const element = screen.getByRole('button');
        fireEvent.click(element);

        expect(handleClick).toHaveBeenCalledTimes(1);
    })

    test('should have a specific type: submit', () => {
        render(<Button type="submit">Submit</Button>);
        const element = screen.getByRole('button', { name: /Submit/i });
    
        expect(element).toHaveAttribute('type', 'submit');
    });
})