import React, {Profiler} from 'react';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import NavBar from "./hoc/NavBar/NavBar";
import Main from './pages/main/Main';
const Quiz = React.lazy(() => import('./pages/quiz/Quiz'));
const LodashSandbox = React.lazy(() => import('./pages/github_repo/components/Sandbox/LodashSandbox'));
const MomentSandbox = React.lazy(() => import('./pages/github_repo/components/Sandbox/MomentSandbox'));
const GithubRepo = React.lazy(() => import('./pages/github_repo/GithubRepo'));
const AppImpulse = React.lazy(() => import('./pages/the-impulse/App'));

const App = () => {

    function onRenderCallback(
        id, // проп "id" из дерева компонента Profiler, для которого было зафиксировано изменение
        phase, // либо "mount" (если дерево было смонтировано), либо "update" (если дерево было повторно отрендерено)
        actualDuration, // время, затраченное на рендер зафиксированного обновления
        baseDuration, // предполагаемое время рендера всего поддерева без кеширования
        startTime, // когда React начал рендерить это обновление
        commitTime, // когда React зафиксировал это обновление
        interactions // Множество «взаимодействий» для данного обновления
    ) {
        // Обработка или логирование результатов...
    }

    return (
        <BrowserRouter>
            <Switch>
                <Route exact path='/' component={Main}/>
                <React.Suspense fallback={<p>ЗАГРУЗКА</p>}>
                    <NavBar>
                        <Route path='/github-repo' component={GithubRepo}/>
                        <Route path='/the-impulse' component={AppImpulse}/>
                        <Profiler id='ProfilerApp' onRender={onRenderCallback}>
                            <Route path='/quiz' component={Quiz}/>
                        </Profiler>
                        <Route path='/lodash' component={LodashSandbox}/>
                        <Route path='/moment' component={MomentSandbox}/>
                    </NavBar>
                </React.Suspense>
            </Switch>
        </BrowserRouter>
    );
};

export default App;