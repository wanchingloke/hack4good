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
    <div className="pt-12 pr-20 pl-2 border-solid backdrop-blur-[2px] bg-white bg-opacity-0 border-[9px] border-stone-200 border-opacity-80 rounded-[50px] max-md:pr-5">
      <div className="flex gap-5 max-md:flex-col max-md:gap-0 max-md:">
        <div className="flex flex-col w-[55%] max-md:ml-0 max-md:w-full">
          <img
            loading="lazy"
            srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/f573096240a3e8445035bc2507123e9c0cb6b707737f0a0658fc9f341706c182?apiKey=0cba06582df446a9859eb90c47a74d7f&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/f573096240a3e8445035bc2507123e9c0cb6b707737f0a0658fc9f341706c182?apiKey=0cba06582df446a9859eb90c47a74d7f&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/f573096240a3e8445035bc2507123e9c0cb6b707737f0a0658fc9f341706c182?apiKey=0cba06582df446a9859eb90c47a74d7f&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/f573096240a3e8445035bc2507123e9c0cb6b707737f0a0658fc9f341706c182?apiKey=0cba06582df446a9859eb90c47a74d7f&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/f573096240a3e8445035bc2507123e9c0cb6b707737f0a0658fc9f341706c182?apiKey=0cba06582df446a9859eb90c47a74d7f&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/f573096240a3e8445035bc2507123e9c0cb6b707737f0a0658fc9f341706c182?apiKey=0cba06582df446a9859eb90c47a74d7f&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/f573096240a3e8445035bc2507123e9c0cb6b707737f0a0658fc9f341706c182?apiKey=0cba06582df446a9859eb90c47a74d7f&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/f573096240a3e8445035bc2507123e9c0cb6b707737f0a0658fc9f341706c182?apiKey=0cba06582df446a9859eb90c47a74d7f&"
            className="w-full aspect-[0.89] rounded-[50px] max-md:mt-10 max-md:max-w-full"
          />
        </div>
        <div className="flex flex-col ml-5 w-[45%] max-md:ml-0 max-md:w-full">
          <div className="flex flex-col self-stretch my-auto text-4xl font-extralight text-black max-md:mt-10 max-md:max-w-full">
            <div className="text-5xl font-bold max-md:max-w-full max-md:text-4xl mb-10">
              Login to your Account
            </div>
            <form onSubmit={handleSubmit}>
                    <div> 
                        <label htmlFor="roleSelect" className='font-medium' >You are a: </label>
                        <select className='my-6 bg-neutral-200 rounded-3xl p-3' id="roleSelect">
                            <option value="">Select...</option>
                            <option value="volunteer">Volunteer</option>
                            <option value="administrator">Administrator</option>
                        </select>
                    </div>
                    <div>
                        <label className='mr-5 font-medium' htmlFor="email">Email:</label>
                        <input className='my-6 bg-neutral-200 rounded-3xl p-3' type="email" placeholder="Enter Email"
                        onChange={e => setEmail(e.target.value)}/>
                    </div>
                    <div>
                        <label className='mr-5 font-medium' htmlFor="password">Password:</label>
                        <input className='my-6 bg-neutral-200 rounded-3xl p-3' type="password" placeholder="Enter Password" 
                        onChange={e => setPassword(e.target.value)}/>
                    </div>
                    <button className='my-10 bg-red-200 p-6 rounded-3xl font-medium'>Login</button>
                </form>
        </div>
      </div>
    </div>
    </div>
    )
}

export default Login;