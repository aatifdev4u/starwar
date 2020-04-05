import React from 'react';
import { shallow } from 'enzyme';
import Planet from '../Section/Planet'

const findByTestAtrr = (component, attr) => {
    const wrapper = component.find(`[data-test='${attr}']`);
    return wrapper;
};

describe('Planet Component', ()=>{

    describe('Should render', ()=>{
        let wrapper;
        beforeEach(()=>{
            const planet={
                name: 'Alderaan',
                population: 100000
            };
            wrapper = shallow(<Planet planet={planet}/>)
        })

        test('should Planet render without error',()=>{
            const component = findByTestAtrr(wrapper, 'planet-item')
            expect(component.length).toBe(1);
        })

        test('should render Planet title',()=>{
            const title = findByTestAtrr(wrapper, 'planet-title')
            expect(title.length).toBe(1);
        })
    })

    describe('Should Not render', ()=>{
        let wrapper;
        beforeEach(()=>{
            const planet={};
            wrapper = shallow(<Planet planet={planet}/>)
        })

        test('should not render Planet',()=>{
            const component = findByTestAtrr(wrapper, 'planet-item')
            expect(component.length).toBe(0);
        })
    })
})