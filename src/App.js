import React from 'react';
import './App.css';
import Counter from './components/Counter';
import CounterRedux from './components/CounterRedux';
import Profile from './components/Profile';
import { useSelector } from 'react-redux';

function App() {
    const alias = useSelector(state => state.profile.alias);
    return (
        <div className="App">
        <header className="App-header">
            <h1> React Redux demo </h1>
        </header>
        <main>
            <h2>Welcome, {alias}!</h2>
            <Profile />
            <Counter />
            <Counter />
            <CounterRedux />
            <CounterRedux />
        </main>
        </div>
    );
}

export default App;
