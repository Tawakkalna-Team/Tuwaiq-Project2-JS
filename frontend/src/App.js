import React from 'react';
import { Route } from 'react-router-dom';
import Header from './components/Header';
import Main from './components/Main';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {

	return <div className="App">
		<Header/>
		<Main/>
	</div>;
};

export default App;
