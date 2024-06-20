import axios from 'axios';
async function  loginapi(data){
    const base_url="http://localhost:5000/api/guest/login";
    try{
 var response=await fetch(base_url, {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json'
    }
  });
  const result = await response.json();
  console.log(result);
return  result;
    }catch(error){
        console.log(error);
    }
}
export default loginapi;