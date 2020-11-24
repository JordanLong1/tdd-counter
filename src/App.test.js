import { render, screen } from '@testing-library/react';
import App from './App';
import {shallow} from 'enzyme'; 

test('app renders with no error', () => {
    const wrapper = shallow(<App />); 
    const component = wrapper.find('.app-container'); 
    expect(component.exists()).toBe(true);
});

test('renders the Count component', () => {
  const wrapper = shallow(<App />); 
  const count = wrapper.find('Count'); 
  expect(count.exists()).toBe(true);
})
