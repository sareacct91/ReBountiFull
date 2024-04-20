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
      <h1 className="py-10 text-black">Login</h1>
      <form className="flex flex-col" onSubmit={handleFormSubmit}>
        <input className="rounded-md border-2 bg-white px-2 text-black" 
          value={user.email}
          name="email"
          onChange={inputChange}
          type="text" 
          placeholder="email@email.com"
        />
        <label htmlFor="username">username</label>
        <input className="rounded-md border-2 bg-white px-2 text-black"
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
      <div className="my-10 flex max-w-xl flex-col rounded-lg border-8 border-double border-blue-500 bg-blue-300/40 p-5 font-semibold text-black">
      <p className="">
        ReBountiFull helpled my family when we didn't know where our next meal was coming from. It made a world of difference for my growing children.
        <br />
        - Mary, a single mom from San Jose
      </p>
      </div>
    </div>
  );
}
