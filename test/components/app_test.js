import { renderComponent, expect } from '../test_helper';
import App from '../../src/components/app';

//Use 'describe' to group together similar tests
describe('App', () => {
    //Use 'it' to test single attribute of a target component
    it('shows correct text', () => {

        //create instance of the target component, 'App' is our target component
        const component = renderComponent(App);

        //Use 'expect' to test assertion about a target component
        expect(component).to.contain('React simple starter');

    });
});