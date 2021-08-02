import {shallow} from 'enzyme';
import GithubRepo from "./GithubRepo";

it('should render component', () => {
    const component = shallow(<GithubRepo />);
    const wrapper = component.find('.Main');
    expect(wrapper.length).toBe(1);
})
