import { render, screen } from '@testing-library/react';
import Home from '../pages/Home';

describe('Testes da página Home', () => {
  test('Verifica a renderização do componente', () => {
    render(<Home />);
  });

  test('Verifica se a página possui um campo de input', () => {
    render(<Home />);
    const input = screen.getByPlaceholderText(/insira uma tarefa/i)
    expect(input).toBeInTheDocument();
  });

  test('Verifica se a página possui um botão de enviar', () => {
    render(<Home />);
    const button = screen.getByText(/criar/i)
    expect(button).toBeInTheDocument();
  });

});
