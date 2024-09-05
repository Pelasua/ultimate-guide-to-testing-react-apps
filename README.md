# The Ultimate Guide to Testing React Apps

This project aims to sharing with the community the various types of tests by developing a React application. The repository is the result of reading different articles, watching some videos and sharing opinions with other devs. **It is not a standard**, so feel free to discuss any part of this repository by creating a PR (in order to improve this guide).

## Setup your project

In most cases, when you create a React app, some testing dependencies are installed automatically. However, if you want to add some of them manually, follow the instructions bellow:

### Jest + Testing Library
\`\`\`
npm install --save-dev jest @testing-library/react @testing-library/jest-dom     
\`\`\`

And if you use TypeScript:

\`\`\`
npm install --save-dev @types/jest
\`\`\`


## Let's test!

There are multiple types of tests depending on what you want to test. If you go to the *Tests* folder, you can see all tests organized by type.

### Unit tests

The tests cover the minimal logic parts of your application. By 'minimal logic parts,' I mean simple functions or hooks that contain specific functionalities that you want to ensure work correctly.
Use cases:
- To verify the correct output of a formatting function.

### Component tests

Similar to unit tests, they cover the minimal and reusable component like a custom input, button...
Use cases:
- To verify the right rendering of a component.
- To verify the use of its props.
- To verify its states and the possibility of changing any of them.
- To verify the correct styles (styles that are general and applied throughout the app wherever the component is used).

### Integration tests

