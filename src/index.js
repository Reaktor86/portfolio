import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import ErrorBoundary from "./hoc/ErrorBoundary/ErrorBoundary";

// redux
import {createStore, applyMiddleware, compose} from "redux";
import rootReducer from "./pages/the-impulse/redux/rootReducer";
import {Provider} from "react-redux";
import reduxThunk from 'redux-thunk';

// pages
import Main from './pages/main/Main';
import GithubRepo from "./pages/github_repo/GithubRepo";
import TheImpulse from "./pages/the-impulse/App";
import NavBar from "./hoc/NavBar/NavBar";

const composeEnhancers =
    typeof window === 'object' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
            // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
        }) : compose;

const enhancer = composeEnhancers(
    applyMiddleware(reduxThunk),
    // other store enhancers if any
);

const theImpulseStore = createStore(rootReducer, enhancer);

ReactDOM.render(
  <React.StrictMode>
      <ErrorBoundary>
          <BrowserRouter>
              <Switch>
                  <Route exact path='/' component={Main}/>
                  <NavBar>
                      <Route path='/github-repo' component={GithubRepo}/>
                      <Provider store={theImpulseStore}>
                          <Route path='/the-impulse' component={TheImpulse}/>
                      </Provider>
                  </NavBar>
              </Switch>
          </BrowserRouter>
      </ErrorBoundary>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
