import React from 'react'
import Sidebar from "../../Layout/Sidebar"
import Header from "../../Layout/Header"
import './LoginPage.css'

function LoginPage() {
    
    return(
          <div className="LoginPage">
            <div className="content-wrapper">
                <Header/>
                <div className="content">
                  <div className="name">FAVPICK</div>
                    <button className="button1">connect wallet</button>
                </div>

            </div>
          </div>
    )
}

export default LoginPage