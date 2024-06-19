import { theme } from '@chakra-ui/pro-theme';
import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import { Auth0ProviderWithHistory } from './features/auth/components';

const proTheme = extendTheme(theme);
const extendedConfig = {
  colors: { ...proTheme.colors, brand: proTheme.colors.teal }
};

const myTheme = extendTheme(extendedConfig, proTheme);

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
  <BrowserRouter>
    <Auth0ProviderWithHistory>
      <ChakraProvider theme={myTheme}>
        <App />
      </ChakraProvider>
    </Auth0ProviderWithHistory>
  </BrowserRouter>
);
