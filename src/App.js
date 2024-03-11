import React, { Component } from 'react';
import Video from './Video';
import Home from './Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { connectToMongoDB, closeMongoDBConnection } from './database'; 
// Import MongoDB connection function

class App extends Component {
  async componentDidMount() {
    try {
      // Connect to MongoDB Atlas when the component mounts
      await connectToMongoDB();
      console.log("Connected to MongoDB Atlas.");
    } catch (error) {
      console.error("Error connecting to MongoDB Atlas:", error);
    }
  }

  componentWillUnmount() {
    // Close MongoDB connection when the component unmounts
    closeMongoDBConnection();
    console.log("Closed MongoDB connection.");
  }

  render() {
    return (
      <div>
        <Router>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/:url" component={Video} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
