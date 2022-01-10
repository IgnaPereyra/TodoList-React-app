import React from 'react';
import './AddTodo.css';
import { connect } from 'react-redux';
import { addTodo } from '../../actions/'


const AddTodo = (props) => {
  const [todo, setTodo] = React.useState({
    title:'',
    description:'No especificado',
    place:'No especificado',
    date:'No especificado',
    status: 'Todo',
  });

  const handleChange = (e) => {
    switch(e.target.id) {
      case 'title':
        return setTodo({...todo, title: e.target.value});
      case 'description':
        return setTodo({...todo, description: e.target.value});
      case 'place':
        return setTodo({...todo, place: e.target.value});
      case 'date':
        return setTodo({...todo, date: e.target.value});
      default:
        return false;
    };
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    let inputBlank = document.querySelectorAll('.add-input');
    props.addTodo([todo])
    inputBlank.forEach(el => el.value = '')
  }

  return (
    <div className="addtodo-body">
    <form onSubmit={(e) => handleSubmit(e)}>
      <h3>AddTodo</h3>
      <div>
      <label name="title" id="label-title">Title</label><br></br>
      <input type='text' name='title' placeholder="Su titulo..." id="title" className="add-input" onChange={handleChange} autoComplete="off" maxLength="28" required></input>
      </div>
      <div className="description-div">
        <label name="description" id="label-description">Description</label><br></br>
        <textarea name="description" placeholder="Describa su tarea..." id="description" className="add-input" onChange={handleChange} maxLength="58" ></textarea>
      </div>
      <div>
        <label name="place" id="label-place">Place</label><br></br>
        <input type="text" name="place" placeholder="Lugar..." id="place" className="add-input" onChange={handleChange} maxLength="28" autoComplete="off"></input>
      </div>
      <div className="date-div">
        <label name="date" id="label-date">Date</label><br></br>
        <input type="text" name="date" placeholder="Introduzca fecha..." id="date" className="add-input" onChange={handleChange} maxLength="28" autoComplete="off"></input>
      </div>
      <button className="submit-btn">Add</button>
    </form>
    </div>
  )
};

function mapDispatchToProps(dispatch) {
  return {
    addTodo: todo => dispatch(addTodo(todo)),
  }
}


export default connect(null, mapDispatchToProps)(AddTodo);