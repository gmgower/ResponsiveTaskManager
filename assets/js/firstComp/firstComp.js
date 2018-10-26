import React, { Component} from 'react'
import ReactDOM from 'react-dom'

class Layout extends Component {
  constructor () {
    super()
    this.state = {
      name: 'Mada'
    }
  }
  clickedBtn = () => {
    console.log('Yo')
  }
  render () {
    return (
        // code here
      )
  }
}

const app = document.getElementById('app')

ReactDOM.render(<Layout />, app)
