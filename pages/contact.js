import React, { useState } from 'react'
import STYLES from '../styles/Contact.module.css'

const contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault()

    const data = { Name: Inputs.Name, Email: Inputs.Email, Phone: Inputs.Phone, Complain: Inputs.Complain }
    const options = { method: 'POST', body: JSON.stringify(data) };

    fetch('http://localhost:3000/api/PostContact', options)
      .then(response => response.json())
      .then(response => console.log(response))
      .catch(err => console.error(err));

    setInputs({
      Name: '',
      Email: '',
      Phone: '',
      Complain: ""
    })
  }
  const handleChange = (e) => {

    const value = e.target.value

    setInputs({
      ...Inputs,
      [e.target.name]: value
    })

  }

  const [Inputs, setInputs] = useState({
    Name: '',
    Email: '',
    Phone: '',
    Complain: ""
  })


  return (
    <form className={STYLES.container} onSubmit={handleSubmit} >
      <label htmlFor='Name' >Name</label>
      <input name='Name' value={Inputs.Name} onChange={handleChange} />
      <label htmlFor='Email' >Email</label>
      <input name='Email' value={Inputs.Email} onChange={handleChange} />
      <label htmlFor='Phone' >Phone</label>
      <input name='Phone' value={Inputs.Phone} onChange={handleChange} />
      <label htmlFor='Complain' >Complain</label>
      <input name='Complain' value={Inputs.Complain} onChange={handleChange} />
      <input type='Submit' title='Submit' />
    </form>

  )
}

export default contact