import React, { useState } from "react";
// import Button from '@mui/material/Button';
// import AddIcon from '@mui/icons-material/Add';

const CreateNote = (props) => {

    const[note ,setNote]=useState({
        title:'',
        content:'',
    });

    const InputEvent = (event) =>{
        // const value=event.target.value;
        // const name=event.target.name;
        const{name,value}=event.target;
        

        setNote((prevData) => {
            return {
                ...prevData,
                [name]:value,
            }
        });
        
    } 

    const addEvent = (event) =>{
        event.preventDefault();
        props.passNote(note);
        setNote({
            title:'',
            content:'',
        });
    };
    return (
        <>
        <div className="main_note"> 
            <form>
                <input type="text" name="title" value={note.title} onChange={InputEvent} placeholder="Title" autoComplete="off" />
                <textarea rows="" column="" name="content" value={note.content} onChange={InputEvent} placeholder="Write a note ..." />
                <button className="plus_sign" onClick={addEvent}>
                    <h3>+</h3>
                </button>
            </form>
        </div>
        </>
    );
};

export default CreateNote;
