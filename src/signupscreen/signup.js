import React, { useState } from 'react';
import './signupcs.css'
import { House } from 'react-bootstrap-icons';
import Button from 'react-bootstrap/Button';
import { useNavigate  } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import MediaQuery from '../common/useFetchMediaQuery ';
import signupapi from '../routerapi/signupapi';
const Signup = () => {
  let navigate  = useNavigate();
  const matches=MediaQuery("(max-width:1200px)");
    const [firstEmail, setEmail] = useState("");
    const [firstPNo, setPNo] = useState('')
    const [firstcustomer, setcustomer] = useState(0)
    
   async function validateForm(e) {
    e.preventDefault();
        if (firstEmail.length == 0) {
          toast.error("Please enter EmailID",{position: toast.POSITION.BOTTOM_CENTER,autoClose:200});
            return
          }
          if (firstPNo.length == 0) {
            toast("Please enter phone Number",{position: toast.POSITION.BOTTOM_CENTER,autoClose:200})
            return
          }
          if (firstcustomer.length == 0) {
            toast("Please select customer",{position: toast.POSITION.BOTTOM_CENTER,autoClose:200})
            return
          }
          let data=firstcustomer=="1"?0:1;

          let dataObject = {
            emailId: firstEmail,
            phoneNumber: firstPNo,
            isFlag:data
          }
          const userorCustomer=await signupapi(dataObject);
          if(userorCustomer.data.error){
            toast(userorCustomer.data.error,{position: toast.POSITION.BOTTOM_CENTER,autoClose:200})
            return
          }
if(userorCustomer.data.responseData.isFlag==0){
    navigate('/Roomsearch');
}else{
    navigate("/ownerReg");
}
    }
    return (
      <div className="parent" style={{backgroundColor:'black'}}>
        <div className="topbar">
          <div className="centerIcon">
            <House
            className='houseimage'
              color="royalblue"
              size={96}
            />
          </div>
        </div>
        <div className="card" style={{ borderTopLeftRadius: "150px" }}>
          <div className="loginheader">
            <div className="logintext">Sign up</div>
          </div>
          <div className="formcard">
            <form onSubmit={validateForm}>
              <div className="namecard">
                <div
                  className="emailtext"
                >
                  House Owner/customer
                </div>
                <div
                  className="input-group"
                  style={{
                    width: "100%",
                    display: "block",
                    height: "70px",
                    fontSize: "20px",
                  }}
                >
                  <select
                    className="custom-select"
                    style={{
                      width: "100%",
                      display: "block",
                      height: "70px",
                      fontSize: "20px",
                    }}
                    onChange={(e) => setcustomer(e.target.value)}
                  >
                    <option selected value="0" disabled>
                      Choose customer/owner
                    </option>
                    <option value="1">customer</option>
                    <option value="2">Houseowner</option>
                  </select>
                </div>
                {/* <input type="switch" className="custom-control-input" id="customSwitches" style={{width:"100%",display:"block",height:"70px",fontSize:"20px"}} />  */}
              </div>
              <div className="namecard">
                <div
                  className="emailtext"
                >
                  Email
                </div>
                <input
                  style={{
                    width: "100%",
                    display: "block",
                    height: "70px",
                    fontSize: "20px",
                  }}
                  placeholder="example@gmail.com"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="namecard">
                <div
                  className="emailtext"
                >
                  PhoneNumber
                </div>
                <input
                className='mobileinput'
                  style={{
                    width: "100%",
                    display: "block",
                    height: "70px",
                    fontSize: "20px",
                  }}
                  type="number"
                  placeholder="phone Number"
                  maxLength="10"
                  pattern="[0-9]+"
                  onChange={(e) => setPNo(e.target.value)}
                />
              </div>
              <div className="namecard">
              <Button   className="namecardbt"
                  variant="dark"
                  size="lg"
                  type="submit" >SignUp</Button>
              </div>
           
            </form>
            <div className="signupredir">
              <div>
                {" "}
                Have any account? <a href="/">Login</a>
              </div>
              <ToastContainer className='toast-message'  />
            </div>
          </div>
        </div>
      </div>
    );
}

export default Signup
