import { render, screen } from '@testing-library/react';
import Header from '../components/Header';

describe('Testes do Componente Header', () => {
  test('Verifica a renderização do componente', () => {
    render(<Header />);
  });

  test('Verifica se possui Título', () => {
    render(<Header />);

    const title = screen.getByText(/lista de tarefas/i)
    expect(title).toBeInTheDocument();
  });
});