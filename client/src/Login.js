import React from "react"

function Login(){
    return (
        <div>
            <div>
                <form>
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
                        <input type="email" placeholder="Enter Email"/>
                    </div>
                    <div>
                        <label htmlFor="password">Password</label>
                        <input type="password" placeholder="Enter Password"/>
                    </div>
                    <button>Login</button>
                </form>
            </div>
        </div>
    )
}

export default Login