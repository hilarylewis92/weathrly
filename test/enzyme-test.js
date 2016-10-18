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
  const input = wrapper.find('.input-field');
  const submit = wrapper.find('#submit-btn');
  input.simulate('change', {target: {value:'castle-rock'} });
  submit.simulate('click');
  expect(wrapper.state('location')).to.equal('castle-rock');
});

it('should render 7 objects from the array', function(){
  const wrapper = mount(<Application source='https://weatherly-api.herokuapp.com/api/weather/'/>);
  const input = wrapper.find('.input-field');
  const submit = wrapper.find('#submit-btn');
  input.simulate('change', {target: {value:'castle-rock'} });
  submit.simulate('click');
  expect(wrapper.find('.weather-day')).to.have.lengthOf(7);
});
