import { useContext } from 'react'
import React from 'react'
import { UserContext } from "./App"

const UserProfile = () =>{

    const state = {
        name:"Newton", 
        age:3
    }
    
    return (
        <UserContext.Provider value={state}>
            <h1 id="name">Name:- {state.name}</h1>
            <h1 id='age'>Age:- {state.age}</h1>
        </UserContext.Provider>
    )

}

export {UserProfile}