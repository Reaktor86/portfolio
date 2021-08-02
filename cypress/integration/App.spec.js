import {sum} from "../../src/pages/github_repo/testJest";
import {mount} from "@cypress/react";
import GithubRepo from "../../src/pages/github_repo/GithubRepo";

describe('тест App', () => {

    it('Базовая проверка', () => {
        expect(sum(2,4)).to.eq(6);
    })

    it('App должен загрузиться', () => {
        mount(<GithubRepo/>);
        cy.get('.App')
    })
})