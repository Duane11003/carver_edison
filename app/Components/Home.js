import React from 'react'
import Input from './Input.js'

function Home({name}) {
    return (
        <div>
            <h2>Welcome to Your Monthly Budget, {name}</h2>
            <Input />
        </div>
    )
}

export default Home