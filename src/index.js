import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';
import configureStore from './store/configureStore';
import { Provider } from 'react-redux';
import { loadCourses } from './actions/courseActions';
import { loadAuthors } from './actions/authorActions';

const store = new configureStore(
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

store.dispatch(loadCourses());
store.dispatch(loadAuthors());

const Root = () => {
  return (
    <Provider store={store}>
      <Router>
        <App />
      </Router>
    </Provider>
  );
};

ReactDOM.render(<Root />, document.getElementById('root'));
