import React from 'react';
import ReactDOM from 'react-dom'
import './index.css'
import SignIn from './Components/SignIn.js'

class App extends React.Component {
    render() {
        return (
            <div className='container'>
                <SignIn />
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'))