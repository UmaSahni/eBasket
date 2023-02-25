import React, { createContext, useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import axios from 'axios';

export const ShoesContext = createContext()




const GetShoes = (page, oderby, filterBy,reset) =>{
  let baseURL = `https://turquoise-snapper-hat.cyclic.app/mens-shoes?_page=${page}&_limit=8`
  if(oderby){
    baseURL= `https://turquoise-snapper-hat.cyclic.app/mens-shoes?_page=${page}&_limit=8&_sort=price&_order=${oderby}`
  }
  if(filterBy){
    baseURL= `https://turquoise-snapper-hat.cyclic.app/mens-shoes?_page=${page}&_limit=8&brand=${filterBy}`
  }
  if(oderby && filterBy){
    baseURL= `https://turquoise-snapper-hat.cyclic.app/mens-shoes?_page=${page}&_limit=8&_sort=price&_order=${oderby}&brand=${filterBy}`
  }
  if(reset){
    baseURL = `https://turquoise-snapper-hat.cyclic.app/mens-shoes?_page=${page}&_limit=8`
  }
    return  axios.get(baseURL)
  }

const convertToNum = (page) =>{
    if(NaN || 0<=page || typeof (page) === "string" || null){
      return page = 1
    } else{
      return +page
    }
  }

const ShoesContextProvider = ({children}) => {
    const [data, setData] = useState([])
    let [searchParams, setSearchParams] = useSearchParams();
    const [page, setPage] = useState( convertToNum (searchParams.get ("page")))
    const [total, setTotal] = useState(0)
    const [order, setOrderBy] = useState("asc")
    const [filterBy, setFilterBy] = useState(false)
    const [reset, setReset] = useState(false)
    const [query , setQuery] = useState("")
    
    const handleSerach = () =>{
        axios.get(`https://turquoise-snapper-hat.cyclic.app/mens-shoes?q=${query}`)
        .then((res)=> setData(res.data))
   setQuery("")
  }  

  
    
    useEffect(()=>{
        GetShoes(page,order, filterBy, reset).then((res)=>{
          setTotal(res.headers.get("x-total-count"))
          return setData(res.data)
        })
    
    },[page,order, filterBy,reset])
 
    useEffect(()=>{
        let paramObj = {page,order}
        if(order){
            paramObj = {page,order}
        }
        if(filterBy){
            paramObj = {page,filterBy}
        }
        if(order && filterBy){
            paramObj = {page,order,filterBy}
        }
        if(reset){
            paramObj = {page}
        }
        setSearchParams(paramObj)
    },[page,order, filterBy,reset])
      
    const LastPage = Math.ceil(total/8)
    const handleClick = (val) =>{
    setPage(page+val)
     }

    const HandleChange = (val) =>{
    setPage(val)
    }
    const handleChangeBrand = (val) =>{
      setFilterBy(val)
    }
   const handleResetBrand = () =>{
    setReset(true)
   }
    return (
    <ShoesContext.Provider value = {{data,LastPage, HandleChange,handleClick,page,order,setOrderBy, setFilterBy, filterBy,handleChangeBrand,handleResetBrand,query, GetShoes,setQuery, setData,  handleSerach }} >{children}</ShoesContext.Provider>
  )
}

export default ShoesContextProvider