import axios from 'axios';

const SetUrl  = ( ) =>{
    
}


export  const GetShoes = (page) =>{
    return  axios.get(`https://ebasket.onrender.com/mens-shoes?_page=${page}&_limit=8`)
  }