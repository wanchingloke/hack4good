import React from "react"
import React, {useState} from 'react' 
import axios from 'axios'
function Login(){
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    function handleSubmit(event){
        event.preventDefault();
        axios.post('')
    }
    return (
        <div>
            <div>
                <form>
                    <div onSubmit={handleSubmit}>
                        <label htmlFor="roleSelect">You are a: </label>
                        <select id="roleSelect">
                            <option value="">Select...</option>
                            <option value="volunteer">Volunteer</option>
                            <option value="administrator">Administrator</option>
                        </select>
                    </div>
                    <div>
                        <label htmlFor="email">Email</label>
                        <input type="email" placeholder="Enter Email"
                        onChange={e => setEmail(e.target.value)}/>
                    </div>
                    <div>
                        <label htmlFor="password">Password</label>
                        <input type="password" placeholder="Enter Password" 
                        onChange={e => setPassword(e.target.value)}/>
                    </div>
                    <button>Login</button>
                </form>
            </div>
        </div>
    )
}

export default Login