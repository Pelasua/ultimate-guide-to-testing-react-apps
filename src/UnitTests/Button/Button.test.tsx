import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Button from './Button';

test("Button renders successfully", () => {
    render(<Button onClick={()=>{
        alert('alert')
    }}>Test Button</Button>);

    const element = screen.getByText(/Test Button/i);

    expect(element).toBeInTheDocument();
})