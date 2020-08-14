import React, { Component } from 'react'
import {connect} from 'react-redux'

class Context extends Component {
    // componentDidMount(){
    //     console.log(this.props.mainlist)
    // }

    render() {
        const {username,comment}= this.props.mainlist
        return (
            <div>
                <h1>Username is {username} </h1>
                <h1>comment is {comment}</h1>
            </div>
        )
    }
}

function mapStateToProps(state){
    return{
      mainlist: state.employelist
    }
  }
  
  export default connect(mapStateToProps)(Context)
  