import React, { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import Employe from './Employe';


function Edit() {
  const [name, setName] = useState("")
  const [age, setAge] = useState("")
  const [id, setId] = useState("")

  let history = useNavigate()
  var index = Employe.map( (e)=> { return e.id }).indexOf(id);

  const handelSubmite = e => {
    e.preventDefault();

    let a = Employe[index]
    a.name = name
    a.age = age
    history('/')
  }

  useEffect(() => {
    setName(localStorage.getItem('name'))
    setAge(localStorage.getItem('age'))
    setId(localStorage.getItem('id'))
  }, [])

  return (
    <div>
      <form className='container' style={{ width: '40%' }}>
        <div className="form-group">
          <label>Name</label>
          <input type="text" className="form-control" placeholder="Enter Name" value={name} onChange={e => setName(e.target.value)} />

        </div>
        <div className="form-group">
          <label>Age</label>
          <input type="text" className="form-control" placeholder="Age" value={age} onChange={e => setAge(e.target.value)} />
        </div>

        <button type="submit" className="btn btn-primary" onClick={(e) => handelSubmite(e)}>Update</button>
      </form>
    </div>
  )
}

export default Edit
