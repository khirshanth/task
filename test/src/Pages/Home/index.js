import React from 'react'
import  {Jumbotron} from "react-bootstrap"
import Layout from "../../Component/Layout"
function Home(props) {
    return (
        <div>
          <Layout>
          <Jumbotron>
                <h1>Welcome to Admin Dashboard</h1>
          </Jumbotron>
          </Layout> 
   
        </div>
    )
}

export default Home
