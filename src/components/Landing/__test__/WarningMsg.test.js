import React from 'react';
import { shallow } from 'enzyme';
import WarningMsg from '../Section/WarningMsg'

const findByTestAtrr = (component, attr) => {
    const wrapper = component.find(`[data-test='${attr}']`);
    return wrapper;
};

describe('WarningMsg Component', ()=>{
    test('Should render', ()=>{
        let intialProps = {
            blockstatus: true
        }
        let wrapper = shallow(<WarningMsg {...intialProps}/>)
        const component = findByTestAtrr(wrapper, 'warning-msg')
        expect(component.length).toBe(1);
    })

    test('Should Not render', ()=>{
        let intialProps = {
            blockstatus: null
        }
        let wrapper = shallow(<WarningMsg {...intialProps}/>)
        const component = findByTestAtrr(wrapper, 'warning-msg')
        expect(component.length).toBe(0);
    })

})