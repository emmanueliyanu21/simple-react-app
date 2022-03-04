import React, { useState, useRef } from 'react'
import './Style.css';
import { Form, Input, Button } from 'antd';
import { useDispatch } from "react-redux";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { loginAction } from "../../actions/auth.action";
import Spin from "../../components/Loader";
import { Navigate } from 'react-router-dom';

const Login = () => {
    const formRef = useRef();
    const dispatch = useDispatch();
    const auth = sessionStorage.getItem('isAuthenticated')
  const [loading,setLoading] = useState(false);
  const [query, setQuery] = useState({
    email: '',
    password: '',
  });


  const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setQuery((prevState) => ({
        ...prevState,
        [name]: value
    }));
    };
    const onFinish = async () => {
        setLoading(true) 
  
        const formdata = {
          email: query.email,
          password: query.password,
        }
        console.log(formdata)
  
         const response = await dispatch(loginAction.sendLoginDetails(formdata));
        console.log(response);
        if(response.data.success === true) {
          setLoading(false) 
          formRef.current.setFieldsValue({
              email: '',
              password: '',
          });
        toast.success('Action Successful', {
          autoClose: 2000,
          hideProgressBar: true})
      }
      else {
        toast.error(response?.data?.message,{
          autoClose: 2000,
          hideProgressBar: true })
          setLoading(false) 
        }
    }

    if (auth){
        return <Navigate to='/company-admin'/>
    }

  return (
    <div className='wrapper-background'>
        <div className='background'>
            <h2>Login</h2>
        <Form className='loginPage'
      name="basic"
      labelCol={{
        span: 24,
      }}
      wrapperCol={{
        span: 24,
      }}
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
      autoComplete="off"
    >
      <Form.Item
        label="Username"
        name="username"
        rules={[
          {
            required: true,
            message: 'Please input your username!',
          },
        ]}
      >
        <Input value={query.email} name='email' onChange={(e)=>handleInput(e)} />
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
        rules={[
          {
            required: true,
            message: 'Please input your password!',
          },
        ]}
      >
        <Input.Password value={query.password} name='password' onChange={(e)=>handleInput(e)} />
      </Form.Item>

      <Form.Item
        name="remember"
        valuePropName="checked"
        wrapperCol={{
         
          span: 16,
        }}
      >
        <p>You don't have an account? Create an account</p>
      </Form.Item>

      <Form.Item
        wrapperCol={{
          
          span: 24,
        }}
      >
        <Button type="primary" htmlType="submit">
          Submit {loading &&  <Spin />}
        </Button>
      </Form.Item>
    </Form>
    </div>
        </div>
  )
}

export default Login