import React from 'react'

class Home extends React.Component {
  render () {
    const { sendData } = this.props
    return (
      <>
        <h1>welcome to Banner</h1>
        {sendData.map((recive, i) => {
          return (
            <div key={i}>
              <h1>{recive.name}</h1>
              <h3>{recive.lang}</h3>
            </div>
          )
        })}
      </>
    )
  }
}

export default Home
