import React from 'react';
import {render, screen, fireEvent, waitFor} from '@testing-library/react';
import App from './App';

describe('Form tests', () => {
  const fillForm = (inputStringValue: string,inputWordsValue: string ) => {
    const inputString = screen.getByLabelText('Input string:');
    const inputWords = screen.getByLabelText('Input words:');
    const submit = screen.getByRole('button')

    fireEvent.change(inputString, {target: {value: inputStringValue}})
    fireEvent.change(inputWords, {target: {value: inputWordsValue}})
    fireEvent.click(submit)
  }

  test('renders form', () => {
    render(<App />);

    const textToCheck = [
      'thequickbrownfox',
      'quick,brown,the,fox',
      'bedbathandbeyond',
      'bed,bath,bedbath,and,beyond',
      'Input string:',
      'Input words:',
      'Submit',
    ]

    textToCheck.forEach(value => {
      expect(screen.getByText(value)).toBeInTheDocument();
    })
  });

  test('test data 1', async () => {
    render(<App />);
    fillForm('thequickbrownfox', 'quick,brown,the,fox')

    await waitFor(() => {
      expect(screen.getByText('Result: ["the","quick","brown","fox"]')).toBeInTheDocument()
    })
  });

  test('test data 2', async () => {
    render(<App />);
    fillForm('bedbathandbeyond', 'bed,bath,bedbath,and,beyond')

    await waitFor(() => {
      expect(screen.getByText('Result: ["bed","bath","and","beyond"]')).toBeInTheDocument()
    })
  });
})
