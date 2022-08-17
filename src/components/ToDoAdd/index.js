import React from 'react';

const Index =({ toDo, setToDo, handleSubmit})=>{

    return (
        <form className="form-container" onSubmit={(e) => handleSubmit(e)}>
            <div className="form-field">
            <input
            type="text"
            placeholder="what's your plan?" value={toDo.name}
            onChange={e => setToDo({...toDo, name: e.target.value})}
            />
            
            <textarea
            type="text"
            placeholder="describe your plan here" value={toDo.desc}
            onChange={e => setToDo({...toDo, desc: e.target.value})}
            />
            <button
            type="submit"
            className="form-button">Add</button>
            </div>

        </form>
        
    )
}

export default Index