import { Alert, Divider } from "antd";
import { Button, Radio } from 'antd';
import { DownloadOutlined } from '@ant-design/icons';
import 'antd/dist/antd.css';
import React from "react";






const Login = ()=>
{
    const Handlelogin =()=>
    {
        Alert("Login");

    };
 return(
     <div>
        <p>User Name</p>
         <input placeholder="User Name" type="text"/>
         <p>Password</p>
         <input placeholder="Password" type="password"/>
         <Button onClick={Handlelogin}  type="primary" shape="round" icon={<DownloadOutlined />}>
          Login
        </Button>
     </div>

 );   
}
export default Login; 