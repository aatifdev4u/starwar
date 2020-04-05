import React from 'react';
import { shallow } from 'enzyme';
import Navbar from '../NavBar';
import {  findByTestAtrr } from '../../../../TestUtils'


const setup = ()=>{
    const component = shallow(<Navbar/>);
    return component;
}


describe('Navbar Component', ()=>{

    let component;
    beforeEach(()=>{
        component = setup();
    })

    test('Should render Navbar menu', ()=>{
        const wrapper = findByTestAtrr(component, 'menu-bar');
        expect(wrapper.length).toBe(1);
    })

    test('Should render a logo', ()=>{
        const wrapper = findByTestAtrr(component, 'menu-right');
        expect(wrapper.length).toBe(1);
    })
})
