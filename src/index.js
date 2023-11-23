import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import { ThemeProvider as SCThemeProvider } from 'styled-components';
import { ThemeProvider, createTheme } from '@mui/material';
import { GlobalStyle } from 'components/GlobalStyle';
import { Provider } from 'react-redux';
import { persistor, store } from 'redux/store';
import { BrowserRouter } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';

const theme = createTheme({
	palette: {
		primary: {
			main: '#ccbb99'
		},
		secondary: {
			main: '#00ff00'
		},
	}
});

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<Provider store={store}>
			<PersistGate loading={null} persistor={persistor}>
				<BrowserRouter basename="/goit-react-hw-08-phonebook">
					<SCThemeProvider theme={{}}>
						<ThemeProvider theme={theme}>
							<App />
							<GlobalStyle />
						</ThemeProvider>
					</SCThemeProvider>
				</BrowserRouter>
			</PersistGate>
		</Provider>
	</React.StrictMode>
);
