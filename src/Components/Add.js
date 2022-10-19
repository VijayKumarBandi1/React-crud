import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import Employe from './Employe';
import { v4 as uuid } from 'uuid'

function Add() {

    const [name, setName] = useState("")
    const [age, setAge] = useState("")

    let history = useNavigate()

    const handelSubmite = e => {
        e.preventDefault();
        const ids = uuid();
        let uniqueId = ids;
        let a = name
        let b = age;
        Employe.push({ id: uniqueId, name: a, age: b });
        history('/')
    }

    return (
        <div>
            <form className='container' style={{ width: '40%' }}>
                <div className="form-group">
                    <label>Name</label>
                    <input type="text" className="form-control" placeholder="Enter Name" required onChange={e => setName(e.target.value)} />

                </div>
                <div className="form-group">
                    <label>Age</label>
                    <input type="text" className="form-control" placeholder="Age" required onChange={e => setAge(e.target.value)} />
                </div>

                <button type="submit" className="btn btn-primary" onClick={e => handelSubmite(e)}>Submit</button>
            </form>
        </div>
    )
}

export default Add
