import React from 'react';
import ToDoCard from '../ToDoCard'

const Index =({deleteToDos,editToDos, toDos})=>{

    return (
        <>
        {toDos.map(toDo => {
            return (
                <ToDoCard
                deleteHandler={deleteToDos}
                editHandler={editToDos}
                desc ={toDo.desc}
                id = {toDo.id}
                key = {toDo.id}
                name ={toDo.name}
                />
            )
        })}
        </>
    )
}

export default Index