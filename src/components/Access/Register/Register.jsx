import './Register.scss'
import { useContext, useEffect } from "react";
import { UserContext } from "../../../context/UserContext/UserState";
import { Form, Input, Button } from 'antd';
import { useNavigate } from "react-router-dom";


function Register() {

    const { clearMessage, register, message } = useContext(UserContext);

    const navigate = useNavigate()

    const onFinish = (values) => {  
      register(values)
      setTimeout(() => {
          navigate("/")
          clearMessage()
      },3000)
    };
   
    const onFinishFailed = (errorInfo) => {
      console.log("Failed:", errorInfo);
    };

    return (
        <div className="container">
          {/* <div className='text'>
            <p className='title'>Bienvenido!</p>
            <p className='subtitle'>Por favor, introduce tus datos.</p>
          </div> */}
          <Form
            name="basic"
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 16 }}
            initialValues={{ remember: true }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
          >
              <Form.Item
              label="Name"
              name="name"
              rules={[{ required: true, message: "Please input your name!" }]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              label="Email"
              name="email"
              rules={[{ required: true, message: "Please input your email!" }]}
            >
              <Input />
            </Form.Item>
    
            <Form.Item
              label="Phone"
              name="phone"
              rules={[{ required: true, message: "Please enter your phone!" }]}
            >
              <Input.Password />
            </Form.Item>
            
            <Form.Item
              label="Password"
              name="password"
              rules={[{ required: true, message: "Please input your password!" }]}
            >
              <Input.Password />
            </Form.Item>


            {message}
    
            <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
              <Button type="primary" htmlType="submit">
                    Submit
              </Button>
            </Form.Item>
          </Form>
        </div>
      );
}

export default Register