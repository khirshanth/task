
import React,{useState,useEffect,useContext} from "react"
import axios from "axios"
import {Link, useHistory} from "react-router-dom"
import Todo from "./todo";
import Payment from "./payment"
import {credentialValue} from "../App"
import Task from "./task";
const Home =  () => {
     const [query,setQuery] = useState('')
     const [pagenumber,setPageNumber] = useState(1)
     const  [credentials]  =   useContext(credentialValue)
     const history = useHistory()
    console.log(credentials,'-------')
    // const handleClick = () =>{
    //     axios({
    //         method:"get",
    //         url:"http://localhost:8000/logout",

    //     }).then((res) =>{
    //         console.log(res)
    //         history.push('/register')
    //     })
    // }

    const debounce  = (fn,delay) =>{
          let timeoutId;
          return function(...args){
              if(timeoutId){
                  clearTimeout(timeoutId);
              }
              timeoutId = setTimeout(()=>{
                     fn(...args);
              },delay);
          }
    }
    const handleSearch = debounce(e =>{
        console.log('changed')
        setQuery(e.target.value)
        setPageNumber(1)
    },3000)
Task(query,pagenumber)
    return (
        <div>
            {/* <p>Welcome {credentials && credentials}</p>
            {credentials && <button onClick={handleClick}>Logout</button>}
            {!credentials && <Link to="/register">Register</Link>}
            {credentials && <Todo/>}
            {!credentials && <Payment/> } */}
            <input name="query" placeholder="enter" onChange={handleSearch} />
            {/* {books && books.map((book) =>{
                return <div key={book}>{book}</div>
            })} */}
            {/* <div>{loading && "loading...."}</div> */}
        <Task/>
      
        </div>
    )
}

export default Home
