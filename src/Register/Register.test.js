// import { render, screen } from '@testing-library/react';
// import '@testing-library/jest-dom/extend-expect';
// import React from 'react'

import { render as renderer, unmountComponentAtNode } from 'react-dom'
import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom'
import Register from './Register';

describe('Testing Register component', () => {
    let element;
    beforeEach(() => {
        element = document.createElement("div")
        document.body.appendChild(element)
    })
    afterEach(() => {
        unmountComponentAtNode(element)
        element.remove()
        element = null
    })
    test('Demo test', () => { console.log('Test executed'); })
    test('section should not be there in Register component', () => {
        render(<Register />)
        const sectionElem = screen.queryByRole('section', { name: 'section' })
        expect(sectionElem).not.toBeInTheDocument()
    })
    test('TextField should be available in Register', () => {
        render(<Register />)
        const TextElem = screen.queryByRole('TextField', { name: 'TextField' })
        expect(TextElem).toBeInTheDocument()
    })
    test('should contain the text Register in the Register component',()=> {
        render(<Register />)
        expect(screen.getByText('Register')).toBeInTheDocument();
      })
      
    })
    it("1 button should be there in Register component", () => {
        renderer(<Register />, element)
        const ButtonTag = element.getElementsByTagName('Button').length
        expect(count).toBe(1)
    })

