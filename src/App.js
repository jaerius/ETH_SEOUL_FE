import logo from './logo.svg';
import './App.css';
import { Stack, MantineProvider } from "@mantine/core"


function App() {
  return (
    <MantineProvider withGlobalStyles withNormalizeCSS>
    <Stack spacing={24}>
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
    </Stack>
    </MantineProvider>
  );
}

export default App;
