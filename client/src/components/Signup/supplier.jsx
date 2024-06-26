import { useState } from "react";
import { useMutation } from "@apollo/client";
import { ADD_USER } from "../../utils/mutations";
import Auth from "../../utils/auth";

export default function Supplier() {
  // States for registration
  const [username, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [type, setType] = useState("");
  const [businessName, setBusinessName] = useState("");
  const [source, setSource] = useState("");
  const [freeform, setFreeform] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  // States for checking the errors
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);
  // Add user mutation
  const [addUser, { loading, error: addUserError }] = useMutation(ADD_USER);

  // Handling the name change
  const handleName = (e) => {
    setName(e.target.value);
    setSubmitted(false);
  };

  // Handling the email change
  const handleEmail = (e) => {
    setEmail(e.target.value);
    setSubmitted(false);
  };

  // Handling the password change
  const handlePassword = (e) => {
    setPassword(e.target.value);
    setSubmitted(false);
  };

  // Handling the Company input change
  const handleBusinessName = (e) => {
    setBusinessName(e.target.value);
    setSubmitted(false);
  };

  // Handling the type selection change
  const handleType = (e) => {
    setType(e.target.value);
    setSubmitted(false);
  };

  // Handling the source input change
  const handleSource = (e) => {
    setSource(e.target.value);
    setSubmitted(false);
  };

  const handleFreeform = (e) => {
    setFreeform(e.target.value);
    setSubmitted(false);
  };

  // Handling the form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (username === "" || email === "" || password === "") {
      setError(true);
    } else {
      try {
        const addedUser = await addUser({
          variables: {
            userInput: {
              username,
              email,
              password,
              address: null,
              isSupplier: true,
              isClient: false,
              business_name: businessName,
              first_name: "",
              last_name: "",
              household_size: 0,
            },
          },
        });

        setSubmitted(true);
        setError(false);
        setName("");
        setEmail("");
        setBusinessName("");
        setPassword("");
        const token = addedUser.data.addUser.token;
        console.log(addedUser);
        Auth.login(token);
      } catch (error) {
        console.error(error);
      }
    }
  };

  // Showing success message
  const successMessage = () => {
    return (
      <div
        className={` mt-3 text-lg font-bold text-green-600 ${submitted ? "" : "hidden"}`}
      >
        <p>{username} successfully registered!!</p>
      </div>
    );
  };

  // Showing error message if error is true
  const errorMessage = () => {
    return (
      <div className={`m-2 text-red-600 ${error ? "" : "hidden"}`}>
        <p>Please enter all the fields correctly</p>
      </div>
    );
  };

  if (addUserError) {
    console.error(addUserError.message);
    return <p>Something went wrong...</p>;
  }

  return (
    <>
      <div className="flex h-max flex-col items-center justify-evenly bg-white p-10 pb-2 text-black">
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-center">
            Create your account to become a partner
          </h1>
          <div>
            {successMessage()}
            {loading && <p>Loading...</p>}
          </div>
        </div>
        <div className="my-10 rounded-lg border-2 border-black p-10">
          <form className="flex max-w-lg flex-col">
            <label className="mr-3" htmlFor="name">
              Name:
            </label>
            <input
              className="rounded-md border-2 bg-white px-2 text-black"
              type="text"
              name="name"
              placeholder="First & Last Name"
              value={username}
              onChange={handleName}
            />
            <br />
            <label className="mr-3" htmlFor="name">
              Company Name:
            </label>
            <input
              className="rounded-md border-2 bg-white px-2 text-black"
              type="text"
              name="name"
              placeholder="Company Name"
            />
            {/* Sarah's Checkbox */}
            <div className="flex items-center">
            <label
              className="relative flex cursor-pointer items-center rounded-full p-3"
              htmlFor="custom"
            >
              <input
                type="checkbox"
                className="border-blue-gray-200 before:content[''] before:bg-blue-gray-500 peer relative h-5 w-5 cursor-pointer appearance-none rounded-md border transition-all before:absolute before:left-2/4 before:top-2/4 before:block before:h-12 before:w-12 before:-translate-x-2/4 before:-translate-y-2/4 before:rounded-full before:opacity-0 before:transition-opacity checked:border-red-600 checked:bg-red-600 checked:before:bg-gray-900 hover:before:opacity-10"
                id="custom"
              />
              <span className="pointer-events-none absolute left-2/4 top-2/4 -translate-x-2/4 -translate-y-2/4 text-white opacity-0 transition-opacity peer-checked:opacity-100">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-3 w-3"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </span>
            </label>
            <p>I'd like to remain anonymous</p>
            </div>
            <label htmlFor="email">Email:</label>
            <input
              className="rounded-md border-2 bg-white px-2 text-black"
              type="text"
              name="email"
              placeholder="Email@email.com"
              value={email}
              onChange={handleEmail}
            />
            <br />
            <label htmlFor="password">Password:</label>
            <input
              className="rounded-md border-2 bg-white px-2 text-black"
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder="********"
              value={password}
              onChange={handlePassword}
            />
            <div className="">
              <label htmlFor="check" className=" font-normal text-sm">Show Password</label>
              <input
                id="check"
                type="checkbox"
                value={showPassword}
                className="mx-2"
                onChange={() => setShowPassword((prev) => !prev)}
              />
            </div>

            <p className="ml-1 text-sm"></p>
            <br />
            <label htmlFor="company">Business Name:</label>
            <input
              className="rounded-md border-2 bg-white px-2 text-black"
              type="text"
              name="businessName"
              placeholder="Business Name"
              value={businessName}
              onChange={handleBusinessName}
            />
            <br />
            <label htmlFor="supplier-giving">How would you like to give?</label>
            <select
              className="rounded-md border-2 bg-white px-2 text-black"
              name="types_of_giving"
              value={type}
              onChange={handleType}
            >
              <option value="onetime_food">One time food donation</option>
              <option value="recurring_food">Recurring food donation</option>
              <option value="onetime_money">One time monetary gift</option>
              <option value="recurring_money">Recurring monetary gift</option>
            </select>

            <br />
            <label htmlFor="company">How'd you hear about us?</label>
            <input
              className="rounded-md border-2 bg-white px-2 text-black"
              type="text"
              name="source"
              placeholder="Ex: Facebook"
              value={source}
              onChange={handleSource}
            />
            <br />
            <label htmlFor="freeform">What is driving you to give?</label>
            <textarea
              className="rounded-md border-2 bg-white px-2 text-black"
              name="freeform"
              rows="4"
              cols="50"
              placeholder="Enter text here"
              value={freeform}
              onChange={handleFreeform}
            ></textarea>
            <button
              className="mt-10 bg-blue-600 text-white"
              type="submit"
              onClick={handleSubmit}
            >
              Done
            </button>
            {errorMessage()}
          </form>
        </div>
        <br />
      </div>
    </>
  );
}
