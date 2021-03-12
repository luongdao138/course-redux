import React from 'react';
import { Route, Switch } from 'react-router-dom';
import AboutPage from './components/about/AboutPage';
import Header from './components/common/Header';
import CoursesPage from './components/courses/Courses';
import HomePage from './components/home/HomePage';
import PageNotFound from './components/PageNotFound';

function App() {
  return (
    <div className='App container-fluid'>
      <Header />
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/about' component={AboutPage} />
        <Route path='/courses' component={CoursesPage} />
        <Route path='*' component={PageNotFound}></Route>
      </Switch>
    </div>
  );
}

export default App;
