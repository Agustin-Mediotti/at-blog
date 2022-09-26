import { render, screen } from '@testing-library/react';
import TerminalView from '../components/terminal/TerminalView';
import { TerminalContextProvider } from "react-terminal";

test('renders the help message', () => {
  
  render(
    <TerminalContextProvider>
        <TerminalView />
    </TerminalContextProvider>
  );

  const helpMessage = screen.getByText(/Type "help" for more information./i);
  expect(helpMessage).toBeInTheDocument();
});
