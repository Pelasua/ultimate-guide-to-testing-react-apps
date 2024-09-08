import React from "react";
import { render, screen } from "@testing-library/react";
import SimpleForm from "Pages/SimpleForm";

describe('Simple Form Page', () => { 

    test('should render an empty form without results', () => { 
        render(<SimpleForm/>);

        const formTitle = screen.getByText('Digimon search');
        expect(formTitle).toBeInTheDocument();

        const input = screen.getByPlaceholderText('Search the name of the Digimon...');
        expect(input).toBeInTheDocument();

        const inputLabel = screen.getByLabelText('Digimon name');
        expect(inputLabel).toBeInTheDocument();

        const acceptButton = screen.getByRole('button', {
            name: 'Accept',
        });
        expect(acceptButton).toBeInTheDocument();

        const historyTitle = screen.getByText('History');
        expect(historyTitle).toBeInTheDocument();
        
        const history = screen.getByText('No data');
        expect(history).toBeInTheDocument();
     });
    
 });