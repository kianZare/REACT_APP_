import React from "react";
import { useState } from "react";
import { createUser } from "../utils";

const CreateUser = () => {
    const [username, setUsername] = useState()
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()

    const submitHandler = async (event) => {
        event.preventDefault()
        console.log(username)
        console.log(email)
        console.log(password)
        await createUser(username, email, password)
    }
    return (
        <div className="signup">
        <form onSubmit={submitHandler}>
            <label>username:
                <input onChange={(e) => setUsername(e.target.value)} required/>
            </label>
            <br/>

            <label>Email:
                <input onChange={(e) => setEmail(e.target.value)} required/>
            </label>
            <br/>

            <label>Password:
                <input type="password" onChange={(e) => setPassword(e.target.value)} required/>
            </label>
            <br/>
            <button type="submit"> Click here to create an account</button>
        </form>
        </div>
    )
}

export default CreateUser;