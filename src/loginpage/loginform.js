import React, { useState } from 'react';
import { useNavigate  } from "react-router-dom";
import Form from 'react-bootstrap/Form';
import { House } from 'react-bootstrap-icons';
import Button from 'react-bootstrap/Button';
import './logincs.css'
import { ToastContainer, toast } from 'react-toastify';

import loginapi from '../routerapi/loginapi';
const Loginform = () => {
    let navigate  = useNavigate();
    const [Email, setEmail] = useState('')
    const [phoneNumber, setphoneNumber] = useState('')
     async function validateForm(e) {
        e.preventDefault();
        if (Email.length == 0) {
            toast.error("Please enter EmailID",{position: toast.POSITION.BOTTOM_CENTER,autoClose:200});
            return
          }
          if (phoneNumber.length == 0) {
            toast("Please enter phone Number",{position: toast.POSITION.BOTTOM_CENTER,autoClose:200})
            return
          }
          let dataObject = {
            emailId: Email,
            phoneNumber: phoneNumber,
          }
          const userorCustomer=await loginapi(dataObject);
if(userorCustomer.responseData.isFlag==0){
    navigate('/Roomsearch');
}else{
    navigate("/ownerReg");
}
    }
    return (
        <div className="parentN" >
        <div className='topbar'>
            <div className='centerIcon'>
           
        <House className='houseIcon' color="royalblue" size={96} />
            </div>
        </div>
            <div className='card' style={{ borderTopLeftRadius: "150px"}} >
            <div className='loginheader'>
                <div className='logintext'>Login</div>
            </div>
            <div className='formcard'>
        <Form className="form-group" onSubmit={validateForm}>
        <div className='namecard'>
        <div className='emailtext' style={{fontSize:"30px",marginBottom:"15px"}}>Email</div>
        <div className="mb-3">
<input type="email" style={{height:"70px",fontSize:"20px"}} className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" onChange={(e) => setEmail(e.target.value)}></input>
<div className="invalid-feedback">
please enter valid email.
</div>
</div>
        </div>

        <div className='namecard'>
        <div className='emailtext' style={{fontSize:"30px",marginBottom:"15px"}}>PhoneNumber</div>
        <div className="mb-3">
<input type="text" data-validation="number" style={{height:"70px",fontSize:"20px"}} className="form-control " id="exampleFormControlInput1" placeholder="phone Number" onChange={(e) => setphoneNumber(e.target.value)}>

</input>
<div className="invalid-feedback">
please enter valid email.
</div>
</div>
        </div>
        <div className='namecard'>
            
        <Button className='namecardbt' variant="dark" size="lg" type="submit" >Login</Button>
        <ToastContainer className='toast-message'  />
        </div>
        </Form>
        <div className='signupredir'>
                    <div>Don't have any account? <a href='/signup'>Sign Up</a></div>
                </div>
                </div>

               </div>
        </div>
    )
}

export default Loginform
