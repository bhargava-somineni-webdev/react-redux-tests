import { renderComponent, expect } from '../test_helper';
import App from '../../src/components/app';

//Use 'describe' to group together similar tests
describe('App', () => {
    let component;
    beforeEach(() => {
        //create instance of the target component, 'App' is our target component
        component = renderComponent(App);
    });

    //Use 'it' to test single attribute of a target component
    it('shows a comment box', () => {
        //Use 'expect' to test assertion about a target component
        expect(component.find('.comment-box')).to.exist;
    });

     it('shows a comment list', () => {
        //Use 'expect' to test assertion about a target component
        expect(component.find('.comment-list')).to.exist;
    });
});