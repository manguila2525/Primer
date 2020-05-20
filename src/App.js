import React, { Fragment, Component } from "react";
import Formu from "./components/Formu";
import Info from "./components/Info";
import { todos } from "./todos.json";
import { empleado } from './tareas.json'
import "./App.css";

console.log(todos);
class App extends Component {
  constructor() {
    super();
    this.state = {
      todos,
      empleado
    };
    this.obtener = this.obtener.bind(this);
  }

  obtener(todo){
    this.setState({
      todos: [...this.state.todos, todo]
    })
  }
  render() {
    
    const todos = this.state.todos.map((todo, i) => {
      return (
        <div className="col-md-4 ">
          <div className="card mt-4">
          <img className="card-img-top" src="holder.js/100px180/" alt="" />
          <div className="card-body">
            <h4 className="card-title">{todo.title}</h4>
            
            <p className="card-text">{todo.descriptions}</p>

            
          </div>
        </div>
        </div>
        
      );
    });


const unEmpleado = this.state.empleado[0].nombre;
    const empleados = this.state.empleado.map((trabajador, i)=>{
      return(
       
        trabajador.nombre
          // <li className="list-group-item">
          //   {trabajador.nombre}
          // </li>
        
      );
      
    });

    return (
      <Fragment>
        <div className="container">
          <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
            <a className="navbar-brand" href="/">
              taras <span className="badge badge-pill badge-light">{this.state.todos.length}</span>
            </a>
          </nav>
          <div className="row">
            <div className="col-md-8 mt-5">
              <Info />
            </div>
            <div className="col-md-4 mt-5">
              <Formu algo={unEmpleado} obtener={this.obtener}/>
            </div>
            {todos}
            
            <div className="col-md-12">
              <Formu algo="Formulario 2" />
            <ul className="list-group">
              {empleados}
            </ul>
            </div>
           
          </div>
        </div>
      </Fragment>
    );
  }
}

export default App;
