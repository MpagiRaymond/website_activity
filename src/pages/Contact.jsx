import React, {useState} from 'react'
import './Contact.css'

const Contact = () => {
  const [name, setName] =  useState('')
  const [email, setEmail] = useState('')
  const [pwd, setPwd] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(`Name:${name}, Email: ${email}, Password:${pwd}`)
  }

  return (
    <div className="dflex">
    <h1>Sign in</h1>
    <form onSubmit={handleSubmit}>
      {/* <label>Name</label> */}
      <input type="text" name="name" onChange={()=> setName(name)} placeholder="Name"/>
      {/* <label>Email</label> */}
      <input type="email" name="email" onChange={()=> setEmail(email)} placeholder="Email" />
      <div className="dflex drow pass">
        <input type="password" name="password" onChange={()=> setPwd(pwd)} placeholder="Password" />
        <input type="checkbox" name="viewpwd"  />
      </div>
      {/* <label>Message</label> */}
      <textarea name="message" placeholder='Message'></textarea>
      <button type="submit">SUBMIT</button>
    </form>
    </div>
  )
}
export default Contact;