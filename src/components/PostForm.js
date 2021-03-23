import React, { Component } from 'react'
import axios from 'axios'

class PostForm extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             userId:'',
             title:'',
             body:''
        }
    }
    
    chengeHandler = (event)=> {
        this.setState({
            [event.target.name]: event.target.value // by using the name we don't need different handler for each input
        })

    }

    submitHandler = (event) =>{
        event.preventDefault()
        console.log(this.state)
        axios.post('http://127.0.0.1:5000/api_bokeh/test_post', this.state)
        .then( (response)=>{
            console.log(response)
            
        })
        .catch( (error) => {
            console.log(error)
        })

    }

    render() {
        const {userId,title,body} = this.state
        return (
            <div>
                <form onSubmit={this.submitHandler}>
                    <div>
                        <input type="text" name="userId" value={userId} onChange={this.chengeHandler}/>
                    </div>
                    <div>
                        <input type="text" name="title" value={title} onChange={this.chengeHandler}/>
                    </div>
                    <div>
                        <input type="text" name="body" value={body} onChange={this.chengeHandler}/>   
                    </div>
                    <button type="submit">Submit</button>
                </form>
            </div>
        )
    }
}

export default PostForm
