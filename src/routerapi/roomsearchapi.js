import axios from 'axios';
async function  roomsearchapi(data){
    const base_url="http://localhost:5000/api/room/findAll";
    try{
 var response=await fetch(base_url, {
    method: 'GET',
    headers: {
        "Content-Type": "application/json",
    }
  });
  const result = await response.json();
  console.log(result);
return  result;
    }catch(error){
        console.log(error);
    }
}
export default roomsearchapi;