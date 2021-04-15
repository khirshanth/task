
import React,{useState,useEffect,useContext} from "react"
import axios from "axios"
import {useHistory,useLocation,MemoryRouter,Route,Link} from "react-router-dom"
import "./auth.css"
import {credentialValue} from "../App"

function Auth() {
  
    const history = useHistory()
    const [params,setParams]=useState()
    const [message,setMessage]=useState()
    const [credentials,setCredentials]=useContext(credentialValue)
    const [users,setUsers] = useState()
    
   
    
    
    const SignIn = () =>{
   const [email,setEmail]=useState()
    const [password,setPassword]=useState()
    const [params,setParams]=useState()
    const [message,setMessage]=useState()
    useEffect(() =>{
      // axios.get("http://localhost:8000/getUsers")
      // .then((res) =>{
      //   console.log(res.data)
      //   setUsers(res.data)
      // })
      if(params){
        console.log(Object.values(params));
          setMessage(Object.values(params))
          setTimeout(()=>{
              setMessage("")
          },3000)
      }
    },[params])
      const handleSub = (e) => {
        e.preventDefault()
        let data = {email,password}
        console.log(data)
        axios.post('http://localhost:8000/signin',data)
        .then((res) =>{
          console.log(res)
          history.push("/")
        })
        .catch((err) =>{
         if(err.request){
             setParams(JSON.parse(err.request.response))
             console.log(JSON.parse(err.request.response))
         }
         
 
        })
     }
      return (
        <div>
          <form onSubmit={handleSub}>
          <input  value={email}  onChange={e => setEmail(e.target.value)} name="email"  placeholder="email"/>
          <input  value={password} onChange={e => setPassword(e.target.value)}  name="password"    placeholder="password"/>
          <p style={{color:"red"}}>{message}</p>
          <button type="submit">submit</button>
          </form>
        </div>
      )
    }
    const SignUp = () =>{
      const [email, setEmail] = useState("")
      const [firstName,setFirstname] = useState("")
      const [secondName,setLastname] = useState("")
      const [password, setPassword] = useState("")
      const [params,setParams]=useState()
      const [message,setMessage]=useState()
      useEffect(() =>{
        // axios.get("http://localhost:8000/getUsers")
        // .then((res) =>{
        //   console.log(res.data)
        //   setUsers(res.data)
        // })
        if(params){
          console.log(Object.values(params));
            setMessage(Object.values(params))
            setTimeout(()=>{
                setMessage("")
            },3000)
        }
      },[params])
      const handleSubmit = (e) => {
        e.preventDefault()
         console.log(email,password,firstName,secondName)
         let data ={firstName,secondName,email,password}
         axios.post("http://localhost:8000/signup",data)
         .then((res) =>{
           history.push("/")
           
          
         })
         .catch((err) =>{
          if(err.request){
              setParams(JSON.parse(err.request.response))
              console.log(JSON.parse(err.request.response))
          }
          
  
         })
        
      }
      return (
        <div>
          <form onSubmit={handleSubmit}>
           <input  value={firstName} onChange={e => setFirstname(e.target.value)} placeholder="firstname"/>
           <input  value={secondName} onChange={e => setLastname(e.target.value)}    placeholder="secondname"/>
          <input  value={email} onChange={e => setEmail(e.target.value)}   placeholder="email"/>
          <input  value={password} onChange={e => setPassword(e.target.value)}   placeholder="password"/>
          <p style={{color:"red"}}>{message}</p>
          <button type="submit">submit</button>
      </form>
        </div>
      )
    }
    // const handleDelete = (val) =>{
    //   console.log(val)
    //   axios({
    //     url:`http://localhost:8000/delete-users/${val}`,
    //     method:"get",
    //     withCredentials:true
    //   }).then((res)=>{
    //     console.log(res)
    //   }) .catch((err) =>{
    //    console.log(err.request.response)

    //  })
    // }
    return (
        <div className="container">
    
        <MemoryRouter>
        <Link to="/">SignIn</Link>
        <Link to="/user">SignUp</Link>
        <Route exact path="/" component={SignIn} />
        <Route exact path="/user" component={SignUp} />
        </MemoryRouter>
     
     
        </div>
    )
}

export default Auth
