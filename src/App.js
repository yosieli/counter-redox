import React from 'react';
import Counter from  './components/counter'
import {Provider} from 'react-redux'
import store from './store'
import './App.css';

function App() {
  return (
    <Provider store = {store}>
     <Counter/>
    </Provider>
    
  );
}

export default App;
