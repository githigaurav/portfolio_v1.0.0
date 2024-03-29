import axios from 'axios'


const URL= window.location.hostname === "localhost" ? "http://localhost:3001" : "https://server-8bt8.onrender.com"

export const useNetwork =async(method="post", URI="", payload={}, dataType={"Content-Type":"application/json"})=>{   
    const response = await axios[method](`${URL}/${URI}`, payload , dataType)
    return response;
}