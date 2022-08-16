import React from 'react';

const Index =({deleteHandler, editHandler, name, id, desc})=>{
    return (
        <div className="card-container">
            <div className="card-header">
                <h1>To-Do</h1>
                <hr /> <br />
            </div>
            <div className="card-content">
            <div className="card-field"><b>Title: <br /> {name}</b>  </div> <br />
            <div className="card-field">Description: <br /> {desc} </div>
            </div>
                <br />
                <div className="card-button">
            <button className="card-edit" onClick={()=> editHandler(id)}>
                Edit
            </button>
            <button className="card-del" onClick={()=> deleteHandler(id)}>
                Delete
            </button>
                </div>
        </div>
    )
}

export default Index