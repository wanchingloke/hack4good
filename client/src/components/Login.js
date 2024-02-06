import React, {useState} from 'react' 
import axios from 'axios'

function Login(){
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    function handleSubmit(event){
        event.preventDefault();
        axios.post('http://localhost:8081/users', {email, password})
        .then(res => console.log(res))
        .catch(err => console.log(err));
        
    }
    return (
        <div>
            <div>
                <form onSubmit={handleSubmit}>
                    <div> 
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