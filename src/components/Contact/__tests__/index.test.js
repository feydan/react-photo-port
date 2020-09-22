import React from 'react'
import { render, cleanup } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import ContactForm from '..'

// const categories = [
//   { name: 'portraits', description: 'Portraits of people in my life' }
// ]
// const mockCurrentCategory = jest.fn();
// const mockSetCurrentCategory = jest.fn();
// const mockContactSelected = jest.fn();
// const mockSetContactSelected = jest.fn();

afterEach(cleanup)

const renderContactForm =  () => render(<ContactForm/>);

describe('Contact component', () => {
  it('renders', () => {
    renderContactForm
  });
 
  it('matches snapshot', () => {
    const { asFragment } = renderContactForm()
    expect(asFragment()).toMatchSnapshot()
  });
})

describe('Elements are visible', () => {
  it('inserts Contact into the h1', () => {
    const { getByTestId } = renderContactForm()
    expect(getByTestId('h1tag')).toHaveTextContent('Contact')
  })
  it('inserts Submit into the submit button', () => {
    const { getByTestId } = renderContactForm()
    expect(getByTestId('buttonSubmit')).toHaveTextContent('Submit')
  })
})