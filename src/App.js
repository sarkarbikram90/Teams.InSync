import React, { Component } from 'react';
import Video from './Video';
import Home from './Home';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';


class App extends Component {
    render() {
        return (
            <div>
                <Router>
                    <Switch>
                        <Route path="/" exact component={Home} />
                        <Route path="/Video" component={Video} />
                        <Redirect to="/Video" component={Video}/>
                    </Switch>
                </Router>
            </div>
        );
    }
}


export default App;