import React from 'react';
import { shallow } from 'enzyme';
import NoResultsFound from '../Section/NoResultsFound'

const findByTestAtrr = (component, attr) => {
    const wrapper = component.find(`[data-test='${attr}']`);
    return wrapper;
};

describe('NoResultsFound Component', ()=>{
    test('Should Not render', ()=>{
        let intialProps = {
            resultsfound: true
        }
        let wrapper = shallow(<NoResultsFound {...intialProps}/>)
        const component = findByTestAtrr(wrapper, 'no-results')
        expect(component.length).toBe(0);
    })

    test('Should render', ()=>{
        let intialProps = {
            resultsfound: false
        }
        let wrapper = shallow(<NoResultsFound {...intialProps}/>)
        const component = findByTestAtrr(wrapper, 'no-results')
        expect(component.length).toBe(1);
    })

})