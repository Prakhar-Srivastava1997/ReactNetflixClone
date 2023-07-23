import './SignIn.css';
//import mainLogo from '../asset/main-logo.png';
import { useEffect, useState } from 'react';
import axios from 'axios';
import {Link, useNavigate} from 'react-router-dom'

const SignIn = ()=>{

    const [emailOrPhone, setEmailOrPhone] = useState('');
    const [password, setPassword] = useState('');
    const [userList, setUserList] = useState([]);
    const [validLogin, setValidLogin] = useState(false)
    const navigate = useNavigate()

    useEffect(()=>{
        if(localStorage.getItem("LoginCred")){
            navigate('/userdashboard')
        }
        return async()=>{
            const resp = await axios.get('http://localhost:5000/users').catch((err)=>alert(err.message))

            setUserList(resp.data);
        }
    }
    , [])

    const submitFormHandler = (e)=>{
        e.preventDefault();
        userList.map((data)=>{
            if((data.email === emailOrPhone || data.contact === emailOrPhone) && data.password===password){
                localStorage.setItem("LoginCred", JSON.stringify({"email_phone":emailOrPhone, "password":password, "username":data.username}))
                setValidLogin(true)
                alert("Bravo! SignIn Successful..")
                navigate('/userdashboard')
                setEmailOrPhone('');
                setPassword('')
            }
            else{
                alert("Invalid Credentials...");
                setEmailOrPhone('');
                setPassword('')
            }
        })
    }

    return (
        <>
            <div className="main-container">
                <img src="asset/main-logo.png" alt="logo" className='logo-signin'/>
                <div className="form-container">
                    <form onSubmit={submitFormHandler}>
                        <h1 className='SignIn-Heading'>Sign In</h1>
                        <div className="fields">
                            <input type="text" placeholder="Email or phone number" name="emailorphone" value={emailOrPhone} onChange={(e)=>{setEmailOrPhone(e.target.value)}}/>
                            <input type="password" placeholder="Password" name="password" value={password} onChange={(e)=>{setPassword(e.target.value)}}/>
                        </div>
                        <button type="submit" className="login-btn">Sign In</button>
                        <div className='checkbox'>
                            <input type="checkbox"/>
                            <p>Remember Me</p>
                        </div>
                        <div className='signup'>
                            <p>New to Netflix? <Link to="/signup">Sign up now</Link></p>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default SignIn;