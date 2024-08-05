import React from 'react'
import { useState } from 'react';

export default function Form () {
    let [form, setForm] = useState({ fullName: '', email: '' });
    
    const handleInputChange = (e) => {
        let fiedName = e.target.name;
        let fieldValue = e.target.value;
        setForm(currData => ({...currData, [fiedName]: fieldValue}));
        // setForm({ ...form, [fiedName]: fieldValue });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setForm({ fullName: '', email: '' });
    }

  return (
    <>
        <form onSubmit={handleSubmit}>
            <label htmlFor='name'>Name:</label>
            <input id='name' name='fullName' value={form.fullName} onChange={handleInputChange}  type="text" />
            <label htmlFor='email'>Email:</label>
            <input id='email' name='email' value={form.email} onChange={handleInputChange}  type="text" />
            
            <button>Submit</button>
        </form>
    </>
  )
}