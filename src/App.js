import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import Header from './components/common/Header';
import Footer from './components/common/Footer';

import HomePage from './components/home/HomePage';
import AboutPage from './components/about/AboutPage';
import CoursesPage from './components/course/CoursesPage';
import ManageCoursePage from './components/course/ManageCoursePage';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="container-fluid">
        <Header />
        <main className="main">
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/about" component={AboutPage} />
            <Route exact path="/courses" component={CoursesPage} />
            <Route exact path="/course" component={ManageCoursePage} />
            <Route
              exact
              path="/course/:id"
              component={ManageCoursePage}
            />
          </Switch>
        </main>
        <Footer />
      </div>
    );
  }
}

export default App;
