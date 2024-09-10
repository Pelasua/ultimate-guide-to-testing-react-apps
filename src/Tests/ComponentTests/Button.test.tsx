import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Button from '../../Components/Button';

describe('Button component', () => {
    test("should render successfully", () => {
        render(<Button onClick={() => { }}>Test Button</Button>);

        const element = screen.getByRole('button', {
            name: /Test Button/i
        });

        expect(element).toBeInTheDocument();
    });

    test('should be disabled', () => {
        const handleClick = jest.fn();
        render(<Button onClick={handleClick} disabled>Test Button</Button>);

        const element = screen.getByRole('button');
        fireEvent.click(element);

        expect(element).toBeDisabled();
        
        expect(handleClick).toHaveBeenCalledTimes(0);
    });

    test('should be loading', () => {
        render(<Button onClick={() => { }} loading>Test Button</Button>);
        const element = screen.getByRole('button');

        expect(element).toBeDisabled();
        expect(element).toHaveTextContent('Loading ...');
    });

    test('should activate onClick event', () => {
        const handleClick = jest.fn();
        render(<Button onClick={handleClick}>Test Button</Button>);

        const element = screen.getByRole('button');
        fireEvent.click(element);

        expect(handleClick).toHaveBeenCalledTimes(1);
    });

    test('should have a specific type: submit', () => {
        render(<Button type="submit">Submit</Button>);
        const element = screen.getByRole('button', { name: /Submit/i });
    
        expect(element).toHaveAttribute('type', 'submit');
    });

    test('should have basic styles', () => { 
        render(<Button variant='primary'>Button</Button>);
        const element = screen.getByRole('button', { name: /Button/i });

        expect(element).toHaveClass('rounded-full py-2 px-1 font-semibold');
     });

     test('should render a primary button', () => { 
        render(<Button variant='primary'>Button</Button>);
        const element = screen.getByRole('button', { name: /Button/i });

        expect(element).toHaveClass('bg-blue-400 hover:bg-blue-500 text-white');
     });

    test('should render a secondary button', () => { 
        render(<Button variant='secondary'>Button</Button>);
        const element = screen.getByRole('button', { name: /Button/i });

        expect(element).toHaveClass('bg-green-400 hover:bg-green-500 text-white');
     });

     test('should render an outline button', () => { 
        render(<Button variant='outline'>Button</Button>);
        const element = screen.getByRole('button', { name: /Button/i });

        expect(element).toHaveClass('bg-white hover:bg-blue-400 text-blue-400 hover:text-white border-solid border-2 border-blue-400');
     });
});