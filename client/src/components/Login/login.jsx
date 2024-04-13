import { useMutation } from "@apollo/client";
import { useState } from "react";

export default function Login() {
  const [user, setUser] = useState({
    username: '',
    password: '',
  });
  // todo: const [login, { error }] = useMutation();
  
  function inputChange(e) {
    const target = e.target;
    setUser({ ...user, [target.name]: target.value });
  }

  function handleFormSubmit(e) {
    e.preventDefault();
    // todo: useMutation here to login 
  }
  
  return (
    <div className="flex flex-col justify-center items-center w-full">
      <h1>Login</h1>
      <form className="flex flex-col" onSubmit={handleFormSubmit}>
        <input 
          value={user.username}
          name="username"
          onChange={inputChange}
          type="text" 
          placeholder="username"
        />
        <label htmlFor="username">username</label>
        <input 
          value={user.password}
          name="password"
          onChange={inputChange}
          type="password" 
          placeholder="********"
        />
        <label htmlFor="password">Password</label>
        {/* todo: Link to reset password? */} 
        <button type="submit">Enter</button>
      </form>

      <h2>
        ReBountiFull helpled my family when we didn't know where our next meal was coming from. 
        It made a world of difference for my growing children.
        <br />
        - Mary, a single mom from San Jose
      </h2>
    </div>
  );
}
