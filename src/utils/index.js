import { writeCookie } from "../common";


export const createUser = async (username, email, password) =>{
    try {
        const response = await fetch("http://localhost:5001/createUser", {
            method: "POST",
            headers: {
                "Content-Type" : "application/json"
            },
            body: JSON.stringify({
                "username" : username,
                "email" : email,
                "password" :password
            })
        
        })
        const data = await response.json()
        console.log(data)
        
    } catch (error) {
        console.log(error)
    }
};



export const readUsers = async (cookie) =>{
    try {
        const response = await fetch(`${process.env.REACT_API_REST_API_URL}readUser`, {
            method: "GET",
            headers: {
                "Content-Type" : "application/json"
            }
        })
        const data = await response.json()
        //map through the reponse and creates an array containing just the usernames of the users 
        const usernames = data.users.map(users => users.username)
        return usernames
    } catch (error) {
        console.log(error)
    }
} 

export const loginUser =  async (username, email, password, setter) => {
    try {
        const response = await fetch(`${process.env.REACT_API_REST_API_URL}login`, {
            method: "POST",
            headers: {
                "Content-Type" : "application/json"
            },
            body: JSON.stringify({
                "username" : username,
                "email" : email,
                "password" : password
            })
        })
        const data = await response.json()
        console.log(data)
        setter(data.username)
        writeCookie("jwt_token", data.token, 7)
    } catch (error) {
        console.log(error)
    }
};

export const authCheck = async (jwtToken) => {
    try {
        const response = await fetch (`${process.env.REACT_API_REST_API_URL}authCheck`, {
            method: "GET",
            headers: {
                "Content-Type" : "application/json",
                "Authorization" : `Bearer ${jwtToken}`
            }
        })
        const data = await response.json()
        console.log(data)
        return data.username
    } catch (error) {
        console.log(error)
    }
};


export const updateUser = async (username, key, value) => {
    try {
        const response = await fetch(`${process.env.REACT_API_REST_API_URL}updateUser`, {
            method: "PUT",
            headers: {
                "Content-Type" : "application/json",
            },
            body: JSON.stringify({
                "username" : username,
                "key" : key,
                "value" : value
            })
        });
        const data = await response.json()
        console.log(data)
    } catch (error) {
        console.log(error)
    }
}


export const deleteUser = async (username) => {
    try {
        const response = await fetch(`${process.env.REACT_API_REST_API_URL}deleteUser`, {
            method: "DELETE",
            headers: {"Content-type" : "application/json"},
            body: JSON.stringify({
                "username" : username
        })
        })
        const data = await response.json()
        console.log(data)

    } catch (error) {
        console.log(error)
    }
}