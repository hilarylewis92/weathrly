var expect = require('chai').expect;
const React = require('react');
const Application = require('../lib/application');
const LocationForm = require('../lib/location-forms');
const WeatherDisplay = require('../lib/weather-display');
const WeatherDay = require('../lib/weather-day');
import {shallow, mount, render} from 'enzyme';


describe('Application', function(){
  it('should render to the page', function() {
    const browser = shallow(<Application/>);
    expect(browser.find('#input-form')).to.have.length(1);
  });
});

describe('location form', function(){
  it('should render to the page', function() {
      const browser = shallow(<LocationForm/>);
      expect(browser.find('#submit-btn')).to.have.length(1);
    });

  it('should have the state of location empty', function(){
    const wrapper = shallow(<LocationForm />);
    const input = wrapper.find('.input-field');
    const inputValue = input.props().value
    expect(inputValue).to.equal(undefined);
  });

  it('should allow me to input a location', function(){
    const wrapper = shallow(<LocationForm />);
    const input = wrapper.find('.input-field');
    input.simulate('change', {target: {value:'castle-rock'} });
    const inputValue = input.props('castle-rock').value
    expect(inputValue).to.equal('castle-rock');
  });
});

describe('weather days', function(){
    it('should render 7 objects from the array', function(){
      const wrapper = shallow(<LocationForm source='https://weatherly-api.herokuapp.com/api/weather/'/>);
      const input = wrapper.find('.input-field');
      const submit = wrapper.find('#submit-btn');
      const weatherWrapper = mount(<WeatherDay />);
      input.simulate('change', {target: {value:'castle-rock'} });
      submit.simulate('click');
      expect(wrapper.find('.weather-day')).to.have.lengthOf(7);
    });


});

describe('weather days', function(){
  it.skip ('', function(){

  });

});
