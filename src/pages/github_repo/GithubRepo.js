import React, {Component} from 'react';
import './GithubRepo.css';
import RepoForm from "../../components/github_repo/RepoForm/RepoForm";
import githubBig from '../../img/github_repo/github_big.png';
import githubSmall from '../../img/github_repo/github_small.jpg';

class App extends Component {

    render() {

        let _ = require('lodash');
        console.log(_.isEqual(1, 2));
        let ar = [1,2,3,56,73,90,42];
        console.log(_.dropRight(ar, 2))
        console.log(_.sum(ar));
        console.log(_.findIndex(ar, function (e){
            return e === 56;
        }))
        console.log(_.filter(ar, function (e){
            return e > 3;
        }))
        console.log(_.size(ar));

        return (
            <div className="App" data-cy='main'>
                <h1>Скачать репозиторий Github</h1>
                <RepoForm>
                    <div className='mediaTags'>
                        <picture>
                            <source srcSet={githubBig} media='(min-width: 800px)'/>
                            <img src={githubSmall} alt='лого'/>
                        </picture>
                        <video controls width='350px'>
                            <source src='/media/Nextcloud.mp4' type="video/mp4"/>
                            Your browser doesn't support HTML5 video tag.
                        </video>
                    </div>
                    <audio autoPlay>
                        <source src="/media/salut.mp3" type='audio/mp3'/>
                        Ваш браузер не поддерживает HTML5 аудио.
                    </audio>
                </RepoForm>
            </div>
        )
    }
}

export default App;
