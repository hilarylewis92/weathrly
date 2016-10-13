const assert = require('chai').assert;
// var expect = require('chai').expect
const React = require('react');
const Application = require('../lib/application');
const InputForm = require('../lib/application/input-form')
// const ActionButton = require('../app/components/ActionButton')
// import {shallow, mount, render} from 'enzyme'

describe('our test bundle', function () {
  it('should work', function () {
    assert(true);
  });
});

describe('application.jsx should render the input-form', function(){
  it('should have an input field to render the page',function(){
    const browser = shallow(<Application/>)
    expect(browser.contains(<InputForm location: {''}/>)).to.be.true
    expect(browser.props()).to.contain({location: ''})
  });
});
//
//   it('should have the button text render onto the page', function(){
//     const wrapper = render(<App/>)
//     console.log(wrapper.text())
//     expect(wrapper.text()).to.contain('Likes: 0Like! (+1)Dislike! (-1)')
//   })
// });
//
// describe("renders LikesCounter", function(){
//   it('should have 2 action button props', function(){
//     //define a specific wrapper
//     const wrapper = render(<LikesCounter />);
//     //find all of the action buttons
//
//     //assert that you ahve found the number of action buttons on the page
//     expect(wrapper.find('.ActionButtons').to.have.length(2)
//
//   });
//   it('should allow me to click the upvote button', function(){
//     //define a wrapper
//     const wrapper = mount(<LikesCounter />);
//     eval(locus)
//     expect(wrapper.state().count).to.equal(0)
//     //simulate a click event
//     wrapper.find('#like').simulate('click')
//     //expect the state to change from 0 to 1
//     expect(wrapper.state().count).to.equal(1)
//   });
//
//   it('should allow me to click the downvote button', function(){
//     const wrapper = <LikesCounter />
//     expect(wrapper.state().count).to.equal(0)
//     wrapper.find('#dislike').simulate('click')
//     expect(wrapper.state().count).to.equal(-1)
//   })
// });
