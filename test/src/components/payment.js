import React,{useState,useEffect} from 'react'
import axios from "axios"
import {useHistory,Redirect} from "react-router-dom"
function Payment() {
      const history = useHistory()
      const [data,setData]=useState()
      useEffect(() =>{
           if(data){
            //    <Redirect to={data}   />
            //    history.push({
            //        pathname:`${data}`
            //    })
            window.open(data,'_black')
           }

      },[data])
      const handleSubmit = () =>{
         axios({
             method:"post",
             url:"http://localhost:8000/payment-gateway"
         })
         .then((res)=>{
             console.log(res.data.payment_request.longurl)
             setData(res.data.payment_request.longurl)

         })
         .catch((err) =>{
             console.log(err)
         })
      }
    return (
        <div>
            <button onClick={handleSubmit}>Pay</button>
        </div>
    )
}

export default Payment
