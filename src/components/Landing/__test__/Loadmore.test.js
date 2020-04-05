import React from 'react';
import { shallow } from 'enzyme';
import Loadmore from '../Section/Loadmore';


const findByTestAtrr = (component, attr) => {
    const wrapper = component.find(`[data-test='${attr}']`);
    return wrapper;
};

describe('Loadmore Component', ()=>{
    test('Should render', ()=>{
        let intialProps = {
            nextPage: true
        }
        let wrapper = shallow(<Loadmore {...intialProps}/>)
        const component = findByTestAtrr(wrapper, 'load-more')
        expect(component.length).toBe(1);
    })

    test('Should Not render', ()=>{
        let intialProps = {
            nextPage: null
        }
        let wrapper = shallow(<Loadmore {...intialProps}/>)
        const component = findByTestAtrr(wrapper, 'load-more')
        expect(component.length).toBe(0);
    })

})