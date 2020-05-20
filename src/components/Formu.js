import React, {Component} from 'react'
export default class Formu extends Component {

    constructor(){
        super()
        this.state = {
            title : '',
            author : '',
            descriptions: '',
            priority: 'low'
        }
        this.onString = this.onString.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }
  onString(e){
       const {value, name}= e.target;
       this.setState({
           [name]: value
       })
    }
onSubmit(e){
    e.preventDefault();
    this.props.obtener(this.state)
    console.log(this.state)
}
    render(){
        
  
    return (
        <>
        <div className="container mt-5">
        <h1 className="my-5 text-center">{this.props.algo}</h1>
            <form onSubmit={this.onSubmit}>
                <div className="form-group">
                <input type="text" placeholder="Title" name="title" className="form-control" onChange={this.onString} />
                </div>
                <div className="form-group">
                <input type="text" placeholder="Author" name="author" className="form-control" onChange={this.onString}/>
                </div>
                <div className="form-group">
                <textarea name="descriptions" placeholder="Description" cols="43" rows="4" onChange={this.onString}></textarea>
                </div>
                <div className="form-group">
                <select  name="priority" className="form-control" onChange={this.onString}>
                    <option>low</option>
                    <option>Medium</option>
                    <option>high</option>
                </select>
                </div>
                <div className="form-group">
                <input type="submit" value="Enviar" className="form-control btn btn-primary"/>
                </div>
          </form> 
        </div>
          
        </>
    )
    }
  
}
