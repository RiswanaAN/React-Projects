import React from 'react'
import axios from 'axios';
import { useState, useEffect } from 'react';
import ListItem from './ListItem';
import { Link } from 'react-router-dom';

function ListContainer() {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    axios.get("https://reqres.in/api/users?page=2").then(response => {
      setEmployees(response.data.data); 
    });
    }, []); 
    return (
        <div>
            <div className='container'>
                <div className='headingContainer'>
                    <h1>Employees Profile</h1> 
                    <Link to= '/addEmployee'>
                        <button className='addButton'>New Employee</button>
                    </Link>
                </div>
                <div className='listContainer'>
                <ListItem employees= {employees} />
                </div>
            </div>
        </div>
  )
}

export default ListContainer;