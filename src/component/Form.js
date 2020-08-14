import React, { Component } from 'react'
import {connect} from 'react-redux'

class Form extends Component {

    constructor(props) {
        super(props)

        this.state = {

            username: '',
            comment: '',
            topic: 'React',
        }
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    handleUsernameChange = (event) => {
        this.setState({
            username: event.target.value
        })
    }

    handleCommentChange = (event) => {
        this.setState({
            comment: event.target.value
        })
    }

    handleTopicChange = (event) => {
        this.setState({
            topic: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        console.log(this.state);
        if (this.state.comment === '' || this.state.username === "") {
            alert("plz fill all the block")
        }
        else {
            this.props.history.push("/Context", this.state);
            this.props.setUser({username:this.state.username, comment:this.state.comment})
        }

    }

    render() {
        return (


            <>
                <div>
                <label > username </label>
                <input type = "text"
                name = "uname"
                value = { this.state.username }
                onChange = { this.handleUsernameChange }/> 
                </div>
                <div>
                <label> comments </label>
                <input type = "text"
                name = "comment"
                value = { this.state.comment }
                onChange = { this.handleCommentChange }/>
                
                </div>

                <div >
                <label> Topic  </label>
                <select value = { this.state.topic }
                onChange = { this.handleTopicChange } >
                <option value = "react" > React </option>
                <option value = "angular" > Angular </option> 
                <option value = "vue" > Vue </option>
                </select> 
                </div> 
                <button type = "" onClick = { this.handleSubmit } > Submit </button> 
             </>
        )
    }
}

function mapStateToProps(state){
    return{
      mainlist: state.employelist
    }
  }
  
  function mapDispatchToProps(dispatch){
    return{
      setUser:(userObj) =>{
        dispatch({type:"ADD_EMPLOYEE", payload:userObj})
      }
    }
  }
  export default connect(mapStateToProps,mapDispatchToProps)(Form)
  