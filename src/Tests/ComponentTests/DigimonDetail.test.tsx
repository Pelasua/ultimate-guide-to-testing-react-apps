import React from "react";
import { render, screen } from "@testing-library/react";
import DigimonDetail from "Components/DigimonDetail";



describe('DigimonDetail component', () => {
    describe('Renderization and Props', () => {
        const props = {
            src: "src test",
            name: "Digimon"
        };

        beforeEach(() => {
            render(<DigimonDetail {...props} />);
        });


        test('should render an image with the correct attributes', () => {
            const imgElement = screen.getByRole('img');

            expect(imgElement).toBeInTheDocument();
            expect(imgElement).toHaveAttribute('src', props.src);
            expect(imgElement).toHaveAttribute('alt', props.name);
        });

        test('should display the digimon name in a span', () => {
            const nameElement = screen.getByText(props.name, { selector: 'span' });

            expect(nameElement).toBeInTheDocument();
            expect(nameElement).toHaveTextContent(props.name);
        });

        test('should show a spinner when loading property is true', () => {
            render(<DigimonDetail loading />);
            const spinnerElement = screen.getByRole('status');

            expect(spinnerElement).toBeInTheDocument();
        });

    });

    describe('Styles', () => { 
        test('should have an image with a height of 13rem', () => {
            render(<DigimonDetail src='src' name='name' />);
            const imgElement = screen.getByRole('img');

            expect(imgElement).toHaveClass('h-52');
            
        });
    });
});