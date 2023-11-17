import './App.css';
import Login from './components/login';
import Navbar from './components/navbar';
import { useState, useEffect } from 'react';
import ToDoList from './components/ListaToDo';

function App() {
  const url = 'https://playground.4geeks.com/apis/fake/todos/user/';
  const [showLogin, setShowLogin] = useState(false);
  const [showToDo, setShowTodo] = useState(false);
  const [email, setEmail] = useState(""); 

  const handleSignUp = async (email) => {

    const response = await fetch(`${url}${email}`, {
      method: 'POST',
      body: JSON.stringify([]),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    const data = await response.json();

    setShowLogin(false);
    setShowTodo(true);
  };

  const handleToDo = async (email) => {

    const response = await fetch(`${url}${email}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    const data = await response.json();
  }

  const handleDelete = async (email) => {

    const response = await fetch(`${url}${email}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    const data = await response.json();

  }

  const handleAdd = async (email) => {

    const response = await fetch(`${url}${email}`, {
      method: 'PUT',
      body: JSON.stringify([]),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    const data = await response.json();

  }

  return (
    <div className="App">
      <Navbar onLoginClick={() => setShowLogin(true)} />
      <div>
        {showToDo && <ToDoList onToDo={handleToDo} onDelete={handleDelete} onAdd={handleAdd} url={url} email={email}/>}
      </div>
      <div>
        {showLogin && <Login onSignUp={handleSignUp} setEmail={setEmail} />}
      </div>

    </div>
  );
}

export default App;
