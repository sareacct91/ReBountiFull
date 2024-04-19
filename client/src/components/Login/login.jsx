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
    <div className="flex w-full flex-col items-center justify-center bg-white">
      <h1 className="text-black py-10">Login</h1>
      <form className="flex flex-col" onSubmit={handleFormSubmit}>
        <input className="bg-white border-2 rounded-md px-2" 
          value={user.email}
          name="email"
          onChange={inputChange}
          type="text" 
          placeholder="email@email.com"
        />
        <label htmlFor="username">username</label>
        <input className="bg-white border-2 rounded-md px-2"
          value={user.password}
          name="password"
          onChange={inputChange}
          type="password" 
          placeholder="********"
        />
        <label htmlFor="password">Password</label>
        {/* todo: Link to reset password? */} 
        <button className="bg-blue-600" type="submit">Enter</button>
      </form>
      <div className="flex flex-col font-semibold text-black max-w-xl my-10 p-5 rounded-lg bg-blue-300/40 border-double border-8 border-white">
      <p className="">
        ReBountiFull helpled my family when we didn't know where our next meal was coming from. It made a world of difference for my growing children.
        <br />
        - Mary, a single mom from San Jose
      </p>
      </div>
    </div>
  );
}
