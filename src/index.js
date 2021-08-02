import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import ErrorBoundary from "./ErrorBoundary/ErrorBoundary";
import GithubRepo from "./pages/github_repo/GithubRepo";

ReactDOM.render(
  <React.StrictMode>
      <ErrorBoundary>
          <BrowserRouter>
              <Switch>
                  <Route exact path='/' component={App}/>
                  <Route path='/github-repo' component={GithubRepo}/>
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
