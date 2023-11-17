import React, { useState, useEffect } from 'react';
import './listatodo.css';

const ListaToDo = ({ onTodo, onDelete, onAdd, url, email }) => {
  const [tarea, setTarea] = useState('');
  const [toDo, setToDo] = useState([]);
  const [loading, setLoading] = useState(false);



  const change = (event) => {
    setTarea(event.target.value);
  }
  const addTarea = async () => {
    setToDo([...toDo, tarea]);
  }

  const addToDo = async () => {
    setLoading(true);
    const auxToDo = [...toDo, { label: tarea, done: false }];
    const response = await fetch(`${url}${email}`, {
      method: 'PUT',
      body: JSON.stringify(auxToDo),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const data = await response.json();
  
    setTarea('');
    getToDo();
    setLoading(false);
  };
  
  const deleteToDo = async (id) => {
    setLoading(true);
    const aux2ToDo = toDo.filter((tarea) => tarea.label !== id);
    const response = await fetch(`${url}${email}`, {
      method: 'PUT',
      body: JSON.stringify(aux2ToDo),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const data = await response.json();
    setToDo(aux2ToDo);
    setLoading(false);
  };

  const borrar = (indice) => {
    const nuevoToDo = toDo.filter((tarea, i) => i !== indice);
    setToDo(nuevoToDo);
  }

  const getToDo = () => {
    setLoading(true);
    fetch(`${url}${email}`)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        if (Array.isArray(data)) {
          setToDo(data);
        }
      })
      .finally(() => setLoading(false));
  };

  return (
    <div className='container-todo'>
      <h1>Bienvenido {email}</h1>
      <h2>Ingresa una Nueva Tarea</h2>
      <div className='input'><input  type="text" className='input' placeholder="Ingresa Tarea" onChange={change} />
        <button className='btn-agregar' onClick={addToDo}>Agregar</button></div>

      <div>
        <ul>
          {toDo.map((tarea, indice) => {
            return (
              <li key={indice}>{tarea.label}
                <button className='btn-borrar' onClick={() => deleteToDo(tarea.label)}><span>Borrar
                </span></button>
              </li>

            )
          })}
        </ul>
      </div>
    </div>

  );
};

export default ListaToDo;
