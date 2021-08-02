import React, {useState} from "react";
import style from './repoForm.module.css';
import styleList from '../RepoList/repoList.module.css';
import axios from 'axios';
import RepoList from "../RepoList/RepoList";
import {IRepo} from "../../../pages/github_repo/types";
import RepoPopup from "../RepoPopup/RepoPopup";

function RepoForm(props: any) {

    console.log(props)

    const ref = React.createRef<HTMLInputElement>();
    const [repoState, setRepoState] = useState<IRepo[]>([]);
    const [errorMessage, setErrorMessage] = useState<string>('нет репозиториев');

    const getRepos = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (!ref.current) {
            throw new Error('Ошибка отправки запроса');
        }

        const user = ref.current.value.trim();

        console.log(user);

        const apiUrl = `https://api.github.com/users/${user}/repos`;

        axios.get(apiUrl)
            .then((resp) => {
                if (resp.data.length === 0) {
                    setErrorMessage('нет репозиториев у данного пользователя');

                    // для проверки введи в инпут имя 'gegeg'
                    return;
                }
                setRepoState(resp.data);
                console.log('получена дата: ', resp.data);
            }).catch(() => {
            setErrorMessage('пользователь не найден');
            setRepoState([]);
        });
    }

    return (
        <>
            <div className={style.picture}>
                {
                    props.children
                }
            </div>

            <form className={style.form} onSubmit={getRepos}>
                <input
                    type='text'
                    placeholder='введите имя'
                    className={style.inputs}
                    ref={ref}
                    required
                />
                <button
                    type='submit'
                    className={style.button}
                >
                    Найти
                </button>
            </form>
            <RepoList
                errorMessage={errorMessage}
                render={({popupDownload, popupOpen, currentRepo, popupDownloadClose}: any) => (
                    <>
                        <div className={styleList.list}>
                            {
                                repoState.length === 0 ?
                                    <div className={styleList.bg__red}>
                                        <p className={styleList.text__grey}>{errorMessage}</p>
                                    </div>
                                    :
                                    repoState.map((item: any, index: number) => {

                                        return (
                                            <div key={index} className={styleList.bg__blue}>
                                                <p className={styleList.text__black}>{item.name}</p>
                                                <button
                                                    onClick={() => {
                                                        popupDownload(item)
                                                    }}
                                                >
                                                    скачать
                                                </button>
                                            </div>
                                        )
                                    })
                            }
                        </div>
                        {
                            popupOpen ?
                                <RepoPopup
                                    currentRepo={currentRepo}
                                    downloadCancel={popupDownloadClose}
                                />
                                : null
                        }
                    </>
                )}
            />
        </>
    )
}

export default RepoForm;

