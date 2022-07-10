// https://enzymejs.github.io/enzyme/

import {shallow, mount} from 'enzyme';

import LoginCmp from './LoginCmp'

describe('LoginCmp', () => {
  const mockUser = {
    username: 'puki',
    password: '123456'
  }

  describe('submit btn', () => {
    it('should have disabled attribute when inputs are empty', () => {
      expect.assertions(2);
      const wrapper = shallow(<LoginCmp />)
  
      const btnWrapper = wrapper.find('.btn-submit')
      expect(btnWrapper.hasClass('is-block')).toBe(true)
      expect(btnWrapper.props()["disabled"]).toBe(true)
    })

    it('should have disabled attribute when password is empty', async () => {
      expect.assertions(2);
      const wrapper = shallow(<LoginCmp />) // shallow - no need to mount the children cmps
      const user = {
        username: 'puki',
        password: ''
      }

      wrapper.setState(user)

      const btnWrapper = wrapper.find('.btn-submit')
      expect(btnWrapper.hasClass('is-block')).toBe(true)
      expect(btnWrapper.props()["disabled"]).toBe(true)
    })

    it('should have disabled attribute when username is empty', async () => {
      expect.assertions(2);
      const wrapper = shallow(<LoginCmp />) // shallow - no need to mount the children cmps
      const user = {
        username: '',
        password: '123456'
      }

      wrapper.setState(user)

      const btnWrapper = wrapper.find('.btn-submit')
      expect(btnWrapper.hasClass('is-block')).toBe(true)
      expect(btnWrapper.props()["disabled"]).toBe(true)
    })

    it('should not have disable attribute submit btn', () => {
      expect.assertions(2);

      const wrapper = shallow(<LoginCmp />) // shallow - no need to mount the children cmps
      const user = {
        username: 'puki',
        password: '123456'
      }

      wrapper.setState(user)

      const btnWrapper = wrapper.find('.btn-submit')
      expect(btnWrapper.hasClass('is-block')).toBe(false)
      expect(btnWrapper.props()["disabled"]).toBe(false)
    })
  })

  it('should trigger submit event with the user details', async () => {
    expect.assertions(3);
    const onSubmitMock = jest.fn(val => val) // get a mock function
    const wrapper = mount(<LoginCmp onSubmit={onSubmitMock} />) // mount - we need to render the nested 'input-cmp' cmps

    const textInput = wrapper.find('input[name="username"]')
    textInput.simulate('change', { target: { value: mockUser.username } });

    const passwordInput = wrapper.find('input[name="password"]')
    passwordInput.simulate('change', { target: { value: mockUser.password } });

    wrapper.find("form").simulate('submit');

    expect(onSubmitMock).toHaveBeenCalled()

    const resVal = onSubmitMock.mock.results[0].value
    expect(resVal.username).toBe(mockUser.username)
    expect(resVal.password).toBe(mockUser.password)
  })
})