import React, { useState } from 'react'
import axios from 'axios'
function Create() {
  const [task, setTask] = useState()
  const HandleAdd = () => {
     axios.post('http://localhost:3001/add',{task: task})
     .then(result => {
      location.reload()
     })
     .catch(err => console.log(err))
  }
  return (
    <div className='create_form'>
       <input type="text" name='' id='' onChange={(e) => setTask(e.target.value)} />
       <button type='button' onClick={HandleAdd}>ADD</button>
    </div>
  )
}

export default Create
