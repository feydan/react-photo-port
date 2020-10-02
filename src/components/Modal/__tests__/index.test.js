import React from 'react'
import { render, cleanup, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import Modal from '../'

const mockToggleModal = jest.fn();

const currentPhoto = {
  name: 'green parrot',
  category: 'portraits',
  description: 'blah',
  index: 0
}

afterEach(cleanup)

describe('PhotoList is rendering', () => {
  it('renders', () => {
    render(<Modal currentPhoto={currentPhoto} onClose={mockToggleModal}/>);
  });

  it('renders', () => {
    const { asFragment } = render(<Modal currentPhoto={currentPhoto} onClose={mockToggleModal}/>)
    expect(asFragment()).toMatchSnapshot()
  });
});

describe('Click Event', () => {
  it('calls onClose handler', () => {
    const { getByText } = render(<Modal
      onClose={mockToggleModal}
      currentPhoto={currentPhoto}
    />);

    fireEvent.click(getByText('Close this modal'));

    expect(mockToggleModal).toHaveBeenCalledTimes(1);
  });
})  