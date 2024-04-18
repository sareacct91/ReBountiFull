import { useMutation } from "@apollo/client";
import { useState } from "react";
import { LOGIN_USER } from "../../utils/mutations";
import Auth from "../../utils/auth";

export default function Login() {
  const [user, setUser] = useState({
    email: '',
    password: '',
  });
  // todo: const [login, { error }] = useMutation();
  const [userLogin, { error }] = useMutation(LOGIN_USER);

  function inputChange(e) {
    const target = e.target;
    setUser({ ...user, [target.name]: target.value });
  }

  async function handleFormSubmit(e) {
    e.preventDefault();
    try {
      const { data } = await userLogin({ variables: { ...user }});
      const { token } = data.login;

      Auth.login(token);
    } catch (err) {
      console.error(err)  
    }

  }
  
  return (
    <div className="flex w-full flex-col items-center justify-center">
      <h1>Login</h1>
      <form className="flex flex-col" onSubmit={handleFormSubmit}>
        <input 
          value={user.email}
          name="email"
          onChange={inputChange}
          type="text" 
          placeholder="email@email.com"
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
