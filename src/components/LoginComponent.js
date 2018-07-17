import React from 'react';
import { connect } from 'react-redux';
import { startLogin } from '../actions/auth';
import { Form, Icon, Input, Button, Checkbox } from 'antd';
const FormItem = Form.Item;

export class LoginComponent extends React.Component{
  constructor(props){
    super(props);
    console.log(props);
    this.state = {
      email: null,
      password: null
    }
  }

  onChangeHandler = (e) => {
    const { name, value } = e.target;
    this.setState((prevState) => [name]: value)
  }

  handleSubmit = (e) => {
    console.log(this.props);
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
        this.props.onSubmit(values);
      }
    });
  }

  render() {
    const { email, password } = this.state;
    const { getFieldDecorator } = this.props.form;
    return (
      <div>
        <Form onSubmit={this.handleSubmit}>
          <FormItem>
            {getFieldDecorator('email', {
              rules: [{ required: true, message: 'Please input your email!' }],
            })(
              <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Email" name="email" value={email} onChange={this.onChangeHandler} />
            )}
          </FormItem>
          <FormItem>
            {getFieldDecorator('password', {
              rules: [{ required: true, message: 'Please input your Password!' }],
            })(
              <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Password" name="password" value={password} onChange={this.onChangeHandler} />
            )}
          </FormItem>
          <FormItem>
            {getFieldDecorator('remember', {
              valuePropName: 'checked',
              initialValue: true,
            })(
              <Checkbox>Remember me</Checkbox>
            )}
            <a className="login-form-forgot" href="">Forgot password</a>
            <Button type="primary" htmlType="submit" className="login-form-button">
              Log in
            </Button>
            Or <a href="">register now!</a>
          </FormItem>
        </Form>
      </div>
    )
  }
}

export default connect(undefined, undefined)(LoginComponent);
