import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    useHistory,
    Link
} from 'react-router-dom'
import PokemonDetail from './PokemonDetail'
import Home from './Home'
export default function App(props) {
    return (
        <Router>
            <div className='container'>
                <center><Link id='web-title' to="/"><h1>P O K E - X P L O R E</h1></Link></center>
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