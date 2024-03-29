import React, { useState, useContext } from 'react';

import Logo from '../../olx-logo.png';
import './Signup.css';
// import { Firebase } from '../../firebase/config';
import { FirebaseContex } from '../../store/Context';
import { useHistory } from 'react-router-dom'


export default function Signup() {
  const history = useHistory()
  // State
  const [userName, setUserName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [password, setPassword] = useState('')
  const { firebase } = useContext(FirebaseContex)

  const hadndelSubmit = (event) => {
    event.preventDefault()
    firebase.auth().createUserWithEmailAndPassword(email, password).then((result) => {
      result.user.updateProfile({ displayName: userName }).then(() => {
        firebase.firestore().collection('users').add({
          id: result.user.uid,
          username: userName,
          phone: phone
        }).then(() => {
          history.push("/login")
        })

      })
    })
  }

  return (
    <div>
      <div className="signupParentDiv">
        <img width="200px" height="200px" src={Logo}></img>
        <form onSubmit={hadndelSubmit}>
          <label htmlFor="fname">Username</label>
          <br />
          <input
            className="input"
            value={userName}
            onChange={(event) => setUserName(event.target.value)}
            type="text"
            id="fname"
            name="name"
            defaultValue="John"
          />
          <br />
          <label htmlFor="fname">Email</label>
          <br />
          <input
            className="input"
            type="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            id="fname"
            name="email"
            defaultValue="John"
          />
          <br />
          <label htmlFor="lname">Phone</label>
          <br />
          <input
            className="input"
            type="number"
            value={phone}
            onChange={(event) => setPhone(event.target.value)}
            id="lname"
            name="phone"
            defaultValue="Doe"
          />
          <br />
          <label htmlFor="lname">Password</label>
          <br />
          <input
            className="input"
            type="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            id="lname"
            name="password"
            defaultValue="Doe"
          />
          <br />
          <br />
          <button>Signup</button>
        </form>
        <a href='/login'>Login</a>
      </div>
    </div>
  );
}
