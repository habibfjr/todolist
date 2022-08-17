import React, { useEffect, useState } from 'react';
import { v4 as uuidv4} from 'uuid';
import ToDoAdd from '../components/ToDoAdd'
import ToDoList from '../components/ToDoList'
import '../assets/style.css'

const Index =()=>{
    const LOCAL_STORAGE_KEY = "list-todos"
    const [toDos, setToDos] = useState([])
    const[toDo,setToDo] = useState({
        id:'',
        name:'',
        desc:''
    })

    const addToDoHandler = (toDo) =>{
        const newToDo = [{id: uuidv4(), name: toDo.name, desc: toDo.desc}]
        setToDos([...toDos, ...newToDo])
        localStorage.setItem(
            LOCAL_STORAGE_KEY,
            JSON.stringify([...toDos, ...newToDo])
        )
    }   

    const deleteToDoHandler = (id) => {
        const updatedToDos = toDos.filter(toDo => toDo.id !== id)
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(updatedToDos))
        setToDos(updatedToDos)
    }

    const editToDoHandler = (id) => {
        const getItem = toDos.find(item => item.id === id)
            setToDo({id, name: getItem.name, desc: getItem.desc})
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        if (!toDo.name || !toDo.desc){
            alert('Name and Description are required')
            return
        } else if (!toDo.id){
            addToDoHandler(toDo)
        } else {
            const updateItem = toDos.map(x=>x.id === toDo.id ? {...x, name : toDo.name, desc: toDo.desc} : x)
            setToDos(updateItem)
            localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(updateItem))
        }
        setToDo({
            id:'',
            name:'',
            desc:''
        })
    }

    useEffect(() =>{
        const listToDos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
        listToDos && setToDos(listToDos)
    }, [setToDos])

    return (
        <div className="page">
        <br /> <br /><h1>Welcome! <br /> Create Your To-Do List Here</h1> <br />
        <ToDoAdd setToDo={setToDo} toDo={toDo} handleSubmit={handleSubmit}/>
        <ToDoList
        deleteToDos={deleteToDoHandler}
        editToDos={editToDoHandler}
        toDos={toDos} />
        </div>
    )
}

export default Index