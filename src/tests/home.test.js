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

  test('Verifica se a página possui um botão de criar', () => {
    render(<Home />);
    const button = screen.getByText(/criar/i)
    expect(button).toBeInTheDocument();
  });

  test('Verifica se a página possui um campo para exibir todas as tarefasr', () => {
    render(<Home />);
    const tarefas = screen.getByText(/todas a tarefas/i)
    expect(tarefas).toBeInTheDocument();
  });

});
