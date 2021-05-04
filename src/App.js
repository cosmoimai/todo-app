import React, {useState,useEffect} from 'react';
import { Button,FormControl,Input,InputLabel } from '@material-ui/core';
import logo from './logo.svg';
import './App.css';
import Todo from './todo';
import db from './firebase';
import firebase from "firebase";

function App() {

  const [todos, setTodos] = useState([]);
  const[input,setinput] = useState('')
  console.log(input);

  //when the app loads , we need to listen to the database and fetch new todos as they get added/removed
  useEffect(() => {
    //this code fires when app.js loads
    db.collection('todos').orderBy('timestamp', 'desc').onSnapshot(snapshot => {
      console.log(snapshot.docs.map( doc => doc.data()));
      setTodos(snapshot.docs.map(doc => ({id: doc.id ,todo: doc.data().todo})))
    })
  }, [input]);

  const addTodo = (event) => {
    //this will fire off when we click the button
    event.preventDefault(); //I will stop refreshing

    db.collection('todos').add({
      todo: input,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    })
    //console.log("HEY HERE")
    setTodos([...todos,input])
    setinput(''); //clear up the input after clicking add todo button
  }

  return (
    <div className="App">
      <h1>HELLO!!</h1>
      <form >
        {/* <input /> */}
        <FormControl>
          <InputLabel>Write Todos🧨</InputLabel>
          <Input type="text" value={input} onChange={event=> {setinput(event.target.value)}}></Input>
        </FormControl>
        <Button disabled={!input} type="submit" onClick={addTodo} variant="contained" color="primary">
          ADD TODO
        </Button> 
        {/* <button disabled={!input} type="submit" onClick={addTodo}>ADD TODO</button> */}
      </form>
      
      <ul> 
        {todos.map((todo) => (
          <Todo todo={todo}/>
        ))}
      </ul>
    </div>
  );
}

export default App;
