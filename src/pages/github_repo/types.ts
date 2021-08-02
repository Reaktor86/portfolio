import {stringify} from "querystring";

export interface IRepo {
    name: string
    created_at: string //"2020-12-27T19:45:01Z"
    created_ago?: string
    owner: {
        login: string
    }
    size: number
}

export interface IRepoListProps {
    errorMessage: string
    list: IRepo[]
}

export type TypeAction = 'getRepos' | 'getStat' | null

export class TestClass {
    private readonly key1: string
    private readonly key2: number

    constructor(key1: string, key2: number) {
        this.key1 = key1
        this.key2 = key2
    }

    getKey1() {
        return this.key1
    }
    getKey2() {
        return this.key2
    }
}