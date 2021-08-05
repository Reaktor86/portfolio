import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import ErrorBoundary from "./hoc/ErrorBoundary/ErrorBoundary";
import Main from './pages/main/Main';
import GithubRepo from "./pages/github_repo/GithubRepo";
import NavBar from "./hoc/NavBar/NavBar";
import Quiz from "./pages/quiz/Quiz";
import App from "./pages/the-impulse/App";

ReactDOM.render(
  <React.StrictMode>
      <ErrorBoundary>
          <BrowserRouter>
              <Switch>
                  <Route exact path='/' component={Main}/>
                  <NavBar>
                      <Route path='/github-repo' component={GithubRepo}/>
                      <Route path='/the-impulse' component={App}/>
                      <Route path='/quiz' component={Quiz}/>
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
