import React from 'react'
import { Navbar, Home } from './component/index';
import './App.css'

class App extends React.Component {

  constructor(){
      super()
      this.state = {
          companyName:'webshine Learning',
          staff:["sakthi","sabari","jagadeesh","Deepak","francis"],
          program:[
              {name:"front-end",lang:"HTML, CSS, JS"},
              {name:"Back-end",lang:"python, java, Dot.Net"},
          ]
      }
  }
  render () {
      const { companyName, staff, program } = this.state
    return (
      <>
        <Navbar />
        <Home sendData={program}  />
        <div className='head'>
          <h1>Hello {companyName === 'webshine Learning' ? 'vaishnavan':'user not found'}</h1>
          <p>HTML, CSS, Js, React, Node, Express, MongoDB</p>
          {staff.map((staffData,i) => {
              return(
                  <div key={i}>
                      <h2>{i+1}.{staffData}</h2>
                  </div>
              )
          })}
        </div>
      </>
    )
  }
}

export default App
