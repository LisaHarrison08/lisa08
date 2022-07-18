import React from 'react';
import Main from "./components/Main";
import { BrowserRouter } from 'react-router-dom';
import './App.css';


function App() {
    return (
        <BrowserRouter>
                <div className="App">
                    <Main style={{maxWidth: '100vw', paddingX: '10'}} />
                </div>
        </BrowserRouter>
    );
}

export default App;
