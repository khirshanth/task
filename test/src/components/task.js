import React,{useState,useEffect} from 'react'
import axios from "axios";



function Task() {
    const [todos,setTodos]=useState()
    const headings = todos && Object.keys((todos[0]))
    const [select,setSelect]=useState("")
    
    useEffect(()=>{
      axios({
          method:"get",
          url:"https://jsonplaceholder.typicode.com/todos"
      }).then((res) =>{
          setTodos(res.data)
          console.log(res.data.completed,"completed value")
      })
    },[])
    console.log(select)
    return (
        <div>
            <input name="select" value={select} onChange={(e)=> {setSelect(e.target.value)}}/>
            <table cellPadding={0} cellSpacing={0}>
               <thead>
                  <tr>{todos && headings.map((heading) => <th>{heading}</th>)}</tr>
               </thead>
               
               <tbody>
                   {todos && todos.filter((val)=>{
                               if(select === ""){
                                   return val
                               }else if(val.title.toLowerCase().indexOf(select.toLowerCase()) > -1){
                                   return val
                               }
                           }).map(row => <tr>
                       {
                        headings && headings.map(ele => 
                            
                               <td>
                                   {row[ele]}
                               </td>
                           )
                       }
                   </tr>)}
               </tbody>
               
             
              
              
            </table>
        </div>
    )
}

export default Task
