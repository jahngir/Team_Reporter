import React from 'react';
import { PageHeader } from 'antd';
import 'antd/dist/antd.css';
import { Button } from 'antd';
import './signup.css';
import { Input } from 'antd';
import { Space } from 'antd';

function Signup() {

    return (
        <div className='Card'>
            <PageHeader

    className="site-page-header"
    title="Team Reporter"
    subTitle="Signup Page"
    
  />
            <div className='signupinfo'>
            <div className='emaildiv'>
            <Input className='Email' placeholder="Email" />    
            </div>
            <div className='passdiv'>
            <Space direction="vertical">
    <Input.Password placeholder="Password" />
    </Space>
            </div>
            <div className='buttons'>
            <Button className='Signup' type="primary">Signup</Button>  
            </div>
              <div className='buttons'>
              Already have an account? <a href=""> Login</a>
              </div>
            </div>
             
        </div>
        
    )
}

export default Signup;

