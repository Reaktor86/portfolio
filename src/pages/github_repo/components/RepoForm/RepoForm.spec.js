import {shallow} from "enzyme";
import RepoForm from "./RepoForm";
import style from './repoForm.module.css'

describe('RepoForm test', () => {

    let component;

    beforeEach(() => {
        component = shallow(<RepoForm />);
    })

    it('should render Media children', () => {
        const wrapper = component.find(style.picture);
        expect(wrapper.length).toBe(1);
    })

})

