// Import the mount() method from the test utils
// and the component you want to test
import { mount } from '@vue/test-utils'
import Header from "../../src/components/Header.vue";

describe('Header is rendered correctly', () => {
    // Now mount the component and you have the wrapper
    const wrapper = mount(Header)

    // Check that this component properly displays today's date

    it('Renders the correct date', () => {
        let today = new Date();
        let year=today.getFullYear()
        let month =today.getMonth()
        let weekDay=today.getDay()
        let weekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
        let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October',	'November', 'December']


        let date = today.getDate() < 10 ?  `0${today.getDate()}` : today.getDate();
        expect(wrapper.html()).toContain(date)
        expect(wrapper.html()).toContain(year)
        expect(wrapper.html()).toContain(months[month].toUpperCase().slice(0,3))
        expect(wrapper.html()).toContain(weekdays[weekDay].toUpperCase())
    })
});