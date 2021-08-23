import React from 'react';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import NavBar from "./hoc/NavBar/NavBar";
import Main from './pages/main/Main';

const Quiz = React.lazy(() => import('./pages/quiz/Quiz'));
const LodashSandbox = React.lazy(() => import('./pages/Sandbox/LodashSandbox'));
const MomentSandbox = React.lazy(() => import('./pages/Sandbox/MomentSandbox'));
const GithubRepo = React.lazy(() => import('./pages/github_repo/GithubRepo'));
const AppImpulse = React.lazy(() => import('./pages/the-impulse/App'));
const AppTodo = React.lazy(() => import('./pages/todo/App'));

const App = () => {

    return (
        <BrowserRouter>
            <Switch>
                <Route exact path='/' component={Main}/>
                <React.Suspense fallback={<p>ЗАГРУЗКА</p>}>
                    <NavBar>
                        <Route path='/github-repo' component={GithubRepo}/>
                        <Route path='/the-impulse' component={AppImpulse}/>
                        <Route path='/quiz' component={Quiz}/>
                        <Route path='/lodash' component={LodashSandbox}/>
                        <Route path='/moment' component={MomentSandbox}/>
                        <Route path='/todo' component={AppTodo}/>
                    </NavBar>
                </React.Suspense>
            </Switch>
        </BrowserRouter>
    );
};

export default App;