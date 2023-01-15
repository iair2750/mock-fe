import { FC } from 'react';
import { Provider } from 'react-redux';
import { store } from 'app-redux';
import { Main } from 'main';
import './assets';
import { BrowserRouter } from 'react-router-dom';

export const App: FC = () => (
	<Provider store={store}>
		<BrowserRouter>
			<Main />
		</BrowserRouter>
	</Provider>
);
