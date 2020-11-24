import React from 'react'; 
import {shallow} from 'enzyme';
import Count from './Count'; 


const setUp = () => shallow(<Count />)

describe('Count component', () => {

    it('renders count component without throwing error', () => {
        const wrapper = setUp(); 
        const component = wrapper.find('.count-container'); 
        expect(component.length).toBe(1); 
    }); 

    it(`starts the state 'count' at 0`, () => {
        const wrapper = setUp(); 
        const text = wrapper.find('p'); 
        expect(text.text()).toBe('The current count is: 0'); 
    }); 

    it('onClick, the state count increments by 1', () => {
        const wrapper = setUp(); 
        const btn = wrapper.find('.increment'); 
        btn.simulate('click'); 

        expect(wrapper.state().count).toBe(1); 
    }); 

    it('onClick decrements the counter by one', () => {
        const wrapper = setUp(); 
        const btn = wrapper.find('.decrement'); 
        btn.simulate('click'); 

        expect(wrapper.state().count).toBe(-1); 
    });

})
