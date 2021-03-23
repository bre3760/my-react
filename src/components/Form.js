import React, { Component } from 'react'

class Form extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             username:'',
             comments:'',
             topic:'option1'
        }
    }
    
    handleUsernameChange = (event) => {
        //event.target.value gets the value
        this.setState({
            username: event.target.value
        })
    }

    handleCommentsChange = (event) => {
        //event.target.value gets the value
        this.setState({
            comments: event.target.value
        })
    }

    handleTopicChange = (event) => {
        //event.target.value gets the value
        this.setState({
            topic: event.target.value
        })
    }

    handleSubmit = (event) => {
        alert(`${this.state.username} ${this.state.comments} ${this.state.topic}`)
        event.preventDefault()
    }



    render() {
        return (
            <form onSubmit = {this.handleSubmit}>
                <div>
                <label>Username</label>
                <input type="text" value={this.state.username} onChange={this.handleUsernameChange} name="" id=""/>
                </div>

                <div>
                    <label > Comments </label>
                    <textarea value={this.state.comments} onChange={this.handleCommentsChange}></textarea>
                </div>

                <div>
                    <label>Topic</label>
                    <select value={this.state.topic} onChange={this.handleTopicChange}>
                        <option value="option1"> Opt 1</option>
                        <option value="option2"> Opt 2</option>
                        <option value="option3"> Opt 3</option>
                    </select>
                    
                </div>

                <button type="submit" > Submit  </button>
                
            </form>
        )
    }
}

export default Form
