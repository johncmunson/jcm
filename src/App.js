import React from 'react'
import {
    BrowserRouter as Router,
    Route
} from 'react-router-dom'
import Home from './Home.js'
import About from './About.js'
import Portfolio from './Portfolio.js'

const App = (props) => (
    <Router>
        <div>
            <Route exact path='/' component={Home} />
            <Route path='/about' component={About} />
            <Route path='/portfolio' component={Portfolio} />
        </div>
    </Router>
)

export default App
