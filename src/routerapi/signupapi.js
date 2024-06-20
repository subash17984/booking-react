import axios from 'axios';
async function  signupapi(data){
    const base_url="http://localhost:5000/api/guest/signup";
    try{
 var response=await axios.post(base_url,data)
console.log(response);
return  response;
    }catch(error){
        console.log(error);
    }
}
export default signupapi;