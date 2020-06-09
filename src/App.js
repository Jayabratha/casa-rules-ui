import React from 'react';
import logo from './logo.svg';
import RuleApp from './RuleApp/RuleApp';
import { Provider } from 'react-redux'
import { ruleStore } from './RulesStore';

import './App.css';

function App() {

    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
            </header>
            <Provider store={ruleStore}>
                <RuleApp></RuleApp>
            </Provider>
        </div>
    );
}

export default App;
