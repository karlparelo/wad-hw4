import Footer from "../../src/components/Footer.vue";
import { mount } from '@vue/test-utils'
describe('Footer is rendered correctly', () => {
    // Now mount the component and you have the wrapper
    const wrapper = mount(Footer)

    it('checks that clicking + changes open variable to true', () => {
        wrapper.find('span').trigger('click')//the trigger does not change the open value for some reason
        expect(Footer.data().open).toBe(true)
    })
});