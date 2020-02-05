import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    useHistory
} from 'react-router-dom'
import PokemonDetail from './PokemonDetail'
import Home from './Home'
export default function App(props) {
    return (
        <Router>
            <div className='container'>
                <center><h1 id='web-title'>P O K E - X P L O R E</h1></center>
                <Switch>
                    <Route exact path='/'>
                        <Home />
                    </Route>    
                    <Route path='/:name'>
                        <PokemonDetail />
                    </Route>
                </Switch>
            </div>
        </Router>
    )
}