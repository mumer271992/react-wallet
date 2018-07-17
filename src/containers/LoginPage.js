import React from 'react';
import { connect } from 'react-redux';
import { startLogin } from '../actions/auth';
import { Card } from 'antd';
import { LoginComponent } from '../components/LoginComponent';
import { Form } from 'antd';

export class LoginPage extends React.Component{
  constructor(props){
    super(props);
    console.log("User: ", this.props.user);
    console.log("Access_token: ", this.props.access_token);
  }

  render () {
    const WrappedNormalLoginForm = Form.create()(LoginComponent);
    return (
      <div>
        <Card style={{ width: 500 }}>
          <WrappedNormalLoginForm onSubmit={this.props.startLogin}/>
        </Card>
      </div>
    );
  }
};

const mapDispatchToProps = (dispatch) => ({
  startLogin: (user) => dispatch(startLogin(user))
});

const mapStateToProps = (state) => {
  console.log("Initial state");
  console.log(state);
  return {
    access_token: state.auth.access_token,
    user: state.auth.user
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);
