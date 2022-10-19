import React, { Fragment } from 'react'

import { Link,useNavigate } from 'react-router-dom';
import Employe from './Employe';

function Home() {

    const history=useNavigate()
const handelDelete = (id)=>{
    var index=Employe.indexOf(id);
    Employe.splice(index,1);
    history('/')
}

const handelEdit=(id,name,age)=>{
    localStorage.setItem('name',name);
    localStorage.setItem('age',age);
    localStorage.setItem('id',id);
}

    return (
        <Fragment>
            <h1>Indium Employees</h1>
            
            <table className='table table-striped table-hover table-bordered container'>
                <thead className='thead-dark"'>
                    <tr>
                        <th>
                            Name
                        </th>
                        <th>
                            Age
                        </th>
                        <th>
                           Action
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {
                        Employe.length > 0 ?
                            Employe.map((item) => {
                                return (
                                    <tr key={item.id}>
                                        <td>
                                            {item.name}
                                        </td>
                                        <td>
                                            {item.age}
                                        </td>
                                        <td>
                                            <Link to={`/edit`}>
                                            <button className='btn btn-primary' onClick={()=>handelEdit(item.id,item.name,item.age)} >Edit</button>
                                            </Link>
                                           
                                            <button className='btn btn-danger' onClick={()=>handelDelete(item.id)}>Delete</button>
                                        </td>
                                    </tr>

                                )
                            }):
                            "no data is available"
            }
                </tbody>
            </table>
            <Link to={`/add`}>
            <button className='btn btn-secondary'>Add user</button>
            </Link>
        </Fragment>
    )
}

export default Home
