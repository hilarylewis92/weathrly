var expect = require('chai').expect;
const React = require('react');
const Application = require('../lib/application');
// const Application = require('../lib/application');
// require('locus');
import {shallow, mount, render} from 'enzyme';


  it('should render to the page', function() {
    const browser = shallow(<Application/>);
    expect(browser.find('.input-field')).to.have.length(1);
});

it('should render to the page', function() {
  const browser = shallow(<Application/>);
  expect(browser.find('#submit-btn')).to.have.length(1);
});

it('should allow me to input a location', function(){
  const wrapper = mount(<Application/>);
  // const input = wrapper.find('.input-field');
  // const submit = wrapper.find('#submit-btn');
  // input.simulate('change', {target: {value:'castle-rock'} });
  // submit.simulate('click');
  expect(wrapper.state('location').to.equal(''));
});

it('should allow me to click submit', function(){
  const wrapper = mount(<Application/>);
  const submit = wrapper.find('#submit-btn');
  submit.simulate('click');
  expect(wrapper.state('weather').to.equal('data'));
});
