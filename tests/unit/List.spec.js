// Import the mount() method from the test utils
// and the component you want to test
import { mount } from '@vue/test-utils'
import List from "../../src/components/List.vue";
describe('List component', () => {
    // Now mount the component and you have the wrapper
    const testData = [
        {id: 1,
            title: 'Foo',
            done: true
        }, {
            id: 2,
            title: 'Bar',
            done: false
        }, {
            id: 3,
            title: 'Foobar',
            done: false
        }]
    const wrapper = mount(List, {
        propsData: {
            list: testData
        }
    })
    const emptyListWrapper = mount(List, {
        propsData: {}
    })

    it('renders the correct amount of tasks', () => {
        const items = wrapper.findAll('.list-item');
        expect(items.length).toEqual(testData.length);
    })

    it('renders the correct amount of done tasks', () => {
        const items = wrapper.findAll('.done');
        const doneItems = testData.filter(item => item.done);
        expect(items.length).toEqual(doneItems.length);
    })

    it('renders the correct amount of not done tasks', () => {
        //Version 1
        const notDoneElements = wrapper.findAll('.list-item:not(.done)')
        const notDoneItems = testData.filter(item => !item.done);
        expect(notDoneElements.length).toEqual(notDoneItems.length);
        //Version 2
        const elements = wrapper.findAll('.list-item');
        const doneElements = wrapper.findAll('.done');
        expect(elements.length - doneElements.length).toEqual(notDoneItems.length)
    })


    //Homework start

    it('if no list item is provided List component displays text "Add your first Todo task"', () => {
        expect(emptyListWrapper.html()).toContain("Add your first Todo task")
    })

    it('checks if done is true after clicking on not done task"', () => {
        const notDoneElements = wrapper.findAll('.list-item:not(.done)')
        let i;
        for(i=0;i<notDoneElements.length;i++){
            wrapper.find('.list-item:not(.done)').trigger('click')//the trigger doesnt change the done value for some reason
        }
        const notDoneElementsNow = wrapper.findAll('.list-item:not(.done)')
        expect(notDoneElementsNow.length).toBe(false)
    })
});