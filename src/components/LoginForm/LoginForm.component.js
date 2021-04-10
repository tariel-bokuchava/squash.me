//import './LoginForm.styles.scss';

import React, { Component } from 'react';
import { Row, Col, Form, Input, Button, Checkbox } from 'antd';
import debugLog from '../../includes/DebugFunctions/DebugFunctions';

export class LoginForm extends Component {
    
    constructor(props){
        super(props);

        this.state = {
            cUserName: "tariel.bokuchava@gmail.com",
            cPassword: "Gr8success"
        }
    }

    checkSignInData = (values) => {
        debugLog('checkLoginPassword called: ');
        debugLog('UserName = ' + values.username);
        debugLog('Password = ' + values.password);
        debugLog('Check result = ' + (values.username !== this.state.cUserName ?  0 : (values.password !== this.state.cPassword ? 0 : 1)));
        
        this.props.setSignedInState(values.username !== this.state.cUserName ?  0 : (values.password !== this.state.cPassword ? 0 : 1))
    }

    render () {
        const layout = {
            labelCol: { span: 8 },
            wrapperCol: { span: 16 },
          };
          const tailLayout = {
            wrapperCol: { offset: 8, span: 16 },
          };
          
          
          const onFinish = (values) => {
            console.log('Success:', values);
            this.checkSignInData(values);
          };
          
          const onFinishFailed = (errorInfo) => {
            console.log('Failed:', errorInfo);
          };
        return (
            <div>
                <Row>
                  <Col span={24}><br/></Col>
                </Row>
                <Row>
                  <Col span={8}></Col>
                  <Col span={8}>
                      <div>
                        <Form
                        {...layout}
                        name="basic"
                        initialValues={{ remember: true }}
                        onFinish={onFinish}
                        onFinishFailed={onFinishFailed}
                      >
                        <Form.Item
                          label="Username"
                          name="username"
                          rules={[{ required: true, message: 'Please input your username!' }]}
                        >
                          <Input/>
                        </Form.Item>
            
                        <Form.Item
                          label="Password"
                          name="password"
                          rules={[{ required: true, message: 'Please input your password!' }]}
                        >
                          <Input.Password/>
                        </Form.Item>
            
                        <Form.Item {...tailLayout} name="remember" valuePropName="checked">
                          <Checkbox>Remember me</Checkbox>
                        </Form.Item>
            
                        <Form.Item {...tailLayout}>
                          <Button type="primary" htmlType="submit">
                            Submit
                          </Button>
                        </Form.Item>
                      </Form>
                    </div>
                  </Col>
                  <Col span={8}></Col>
                </Row>
                </div>
                )
    }
}