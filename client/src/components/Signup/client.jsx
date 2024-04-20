export default function Client() {
  return (
    <>
      <div className="bg-white text-black p-10">
        <h1>Create your account to start shopping</h1>
        <form className="flex flex-col max-w-lg">
          <label className="mr-3" htmlFor="name">Name:</label> 
          <input className="bg-white text-black border-2 rounded-md px-2"type="text" name="name" placeholder="First & Last Name" />
          <br />
          <label htmlFor="email">Email:</label>
          <input className="bg-white text-black border-2 rounded-md px-2" type="text" name="email" placeholder="Email@email.com" />
          <br />
          <label htmlFor="password">Password:</label>
          <input className="bg-white text-black border-2 rounded-md px-2" type="text" name="password" placeholder="********" />
          <p className="text-sm ml-1">Please create a password of at least 8 characters.</p>
          <br />
          <label htmlFor="company">How'd you hear about us?</label>
          <input className="bg-white text-black border-2 rounded-md px-2" type="text" name="source" placeholder="Ex: Facebook" />
          <br />
          <label htmlFor="freeform">Is there anything you'd like to share?</label>
          <textarea className="bg-white text-black border-2 rounded-md px-2"
            name="freeform"
            rows="4"
            cols="50"
            placeholder="You're encouraged to share what this offering means to you"
          ></textarea>
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
            <p>You may use my story to reach others</p>
          </div>
          <br />
        </form>
        <button className="bg-blue-600 text-white">Done</button>

      </div>
      
    </>
  );
}