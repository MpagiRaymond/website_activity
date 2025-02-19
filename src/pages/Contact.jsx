import React, {useState} from 'react'
import './Contact.css'

const Contact = () => {
  const [name, setName] =  useState('')
  const [email, setEmail] = useState('')

  const handleSubmit = () => {
    setName(name);
    setEmail(email);
  }

  return (
    <div style={{display:"flex", flexDirection: "column"}}>
    <h1>Sign in</h1>
    <form onSubmit={handleSubmit}>
      {/* <label>Name</label> */}
      <input type="text" name="name" placeholder="Name"/>
      {/* <label>Email</label> */}
      <input type="email" name="email" placeholder="Email" />
      {/* <label>Message</label> */}
      <textarea name="message" placeholder='Message'></textarea>
      <button type="submit">SUBMIT</button>
    </form>
    </div>
  )
}
export default Contact;