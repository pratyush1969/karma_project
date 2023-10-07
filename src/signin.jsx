import React from 'react'
import './App.css'
import { useState } from 'react'
import { database } from './FirebaseConfig'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from '@firebase/auth'
import { useNavigate } from 'react-router'
import toast from "react-hot-toast"
const Signin = () => {
    const [login, setlogin] = useState(false)
    const directory = useNavigate()
    const handlesubmit = (e, type) => {
        e.preventDefault();
        console.log(e.target.email.value)
        const email = e.target.email.value
        const password = e.target.password.value
        if (type === "signup") {
            createUserWithEmailAndPassword(database, email, password).then(data => {
                console.log(data, "authData")
                directory("/home")
            }).catch(err => {
                alert("Already Signed in")
                // toast.success("User already Exists. ")
                setlogin(true)
            })
        }
        else {
            signInWithEmailAndPassword(database, email, password).then(data => {
                console.log(data, "authData")
                directory("/home")
            }).catch(err => {
                alert("invalid")
            })
        }
    }
    return (
        <div className='form-container'>
            <h1>{login ? 'SignIn' : 'SignUp'}</h1>
            <form onSubmit={(e) => handlesubmit(e, login ? 'signin' : 'signup')}>
                <input name="email" placeholder="Email" /><br />
                <input name="password" type="password" placeholder="Password" /><br />
                <button>
                    {login ? 'SignIn' : 'SignUp'}
                </button>
            </form>

        </div>
    )
}

export default Signin
