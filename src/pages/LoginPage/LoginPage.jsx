import React from 'react'
import Sidebar from "../../Layout/Sidebar"
import Header from "../../Layout/Header"

function LoginPage() {
    
    return(
          <div className="LoginPage">
            <div className="content-wrapper">
                <Header/>
                <h1>Connect your wallet!</h1>
                <button className="button1">connect wallet</button>
                

            </div>
          </div>
    )
}

export default LoginPage