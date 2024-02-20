import React from 'react'

function ListItem(props) {
  return (
    <>
        <ul className='unorderedList'>
          {props.employees.map((emp) => (
            <li key={emp.id} className='listItems'>
              <img className='imageItem' src={emp.avatar} alt={`Employee ${emp.id}`} />
              <h3 className='nameTag'>{emp.first_name} {emp.last_name}</h3>
              <p className='email' >{emp.email}t</p>
            </li>
          ))}
        </ul>
    </>
  )
}

export default ListItem;