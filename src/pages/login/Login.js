
import React, { useState } from 'react';
import './login.css';
import { Jumbotron } from 'react-bootstrap';
import { LoginForm } from '../../components/LoginForm';
import { RestPass } from '../../components/ForgotPass';




export const Login = () => {

    const [email, setemail] = useState("");
    const [password, setpassword] = useState("");
    const [formLoad, setFormLoad] = useState("login");
    
    const handleOnChange = e => {
        const{name, value} = e.target

        switch(name){
            case 'email': setemail(value);
        break;
            case 'password': setpassword(value);
        break;
            default:
        break;
        }
    };

    const handleOnRestSubmit = (e) => {
        e.preventDefault();
        
        if(!email) {
            return alert("Password reset");
        }
        //TODO submit the form
        console.log(email);
    };
    
    const handleOnSubmit = (e) => {
        e.preventDefault();

        if(!email || !password){
            return alert("Oops you most have forgotten something!");
        }
        //TODO submit the form
        console.log(email, password);
    };

    const formSwitcher = formType =>{
        setFormLoad(formType);
    };

    return (
        <div className="login">
           <Jumbotron className="form-box">
               {formLoad === 'login' && 
                <LoginForm 
                   handleOnChange={handleOnChange}
                   handleOnSubmit={handleOnSubmit} 
                   formSwitcher={formSwitcher}
                   email={email}
                   pass={password}
                />}

                {formLoad === 'reset' &&
                <RestPass 
                   handleOnChange={handleOnChange}
                   handleOnRestSubmit={handleOnRestSubmit} 
                   formSwitcher={formSwitcher}
                   email={email}
                 />}

            </Jumbotron>
        </div>
    )
}

