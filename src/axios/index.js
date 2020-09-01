import axios from 'axios';

export async function request(){
  const response = await axios.get(process.env.REACT_APP_URL, 
    {headers:{"X-Auth-Token": process.env.REACT_APP_HEADER_TOKEN}}
    );
  console.log(response.data);
  return response.data;
}