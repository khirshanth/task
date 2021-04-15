import React,{useState,useEffect} from 'react'
import axios from "axios";



const Task  = (query,pagenumber)  => {
    const [loading,setLoading] = useState(false)
    const  [books,setBooks] =  useState([])
    const  [error,setError]=useState(true)
    const [hasmore,setHasmore] =useState()

useEffect(() =>{
    setLoading(true)
    setError(false)
    axios({
        method:"GET",
        url:"http://openlibrary.org/search.json",
        params:{q:query,page:pagenumber}
  })
  .then((res) =>
        {
            console.log(res.data.docs)
            // setBooks(prevBooks => {
            //     return  ([...prevBooks,res.data.docs.map(b => b.title)])
            // }
                // )
                setBooks(res.data.docs)
             setHasmore(res.data.docs.length > 0)
             setLoading(false)   
        }
  

  
  ) 
  console.log(books)
},[query,pagenumber])

    return {  loading ,error , hasmore   }

    // return null
}
    

export default Task
