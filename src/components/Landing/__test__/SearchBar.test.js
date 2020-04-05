import React from 'react';
import { shallow, mount } from 'enzyme';
import SearchBar from '../Section/SearchBar'

describe('SearchBar Component', ()=>{

    it('renders with props', () => {
        const wrapper = shallow(<SearchBar />);
        expect(wrapper.find('Search').length).toBe(1);
        expect(wrapper.find('Search').prop('placeholder')).toBe('Search planet...');
        expect(wrapper.find('Search').prop('size')).toBe('large');
        expect(wrapper.find('Search').prop('allowClear')).toBeTruthy();
        expect(wrapper.find('Search').prop('disabled')).toBeFalsy();
      });

    
})