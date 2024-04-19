export default function Client() {
  return (
    <>
      <div className="bg-white text-black p-10">
        <h1>Create your account to start shopping</h1>
        <form className="flex flex-col max-w-lg">
          <label className="mr-3" for="name">Name:</label> 
          <input className="bg-white text-black border-2 rounded-md px-2"type="text" name="name" placeholder="First & Last Name" />
          <br />
          <label for="email">Email:</label>
          <input className="bg-white text-black border-2 rounded-md px-2" type="text" name="email" placeholder="Email@email.com" />
          <br />
          <label for="password">Password:</label>
          <input className="bg-white text-black border-2 rounded-md px-2" type="text" name="password" placeholder="********" />
          <p className="text-sm ml-1">Please create a password of at least 8 characters.</p>
          <br />
          <label for="company">How'd you hear about us?</label>
          <input className="bg-white text-black border-2 rounded-md px-2" type="text" name="source" placeholder="Ex: Facebook" />
          <br />
          <label for="freeform">Is there anything you'd like to share?</label>
          <textarea className="bg-white text-black border-2 rounded-md px-2"
            name="freeform"
            rows="4"
            cols="50"
            placeholder="You're encouraged to share what this offering means to you"
          ></textarea>
          <div>
            <input className="bg-white" type="checkbox" />
            <label className="ml-3" for="Checkbox">
            You may use my story to reach others who are hungry            </label>
          </div>
          <br />
        </form>
        <button className="bg-blue-600 text-white">Done</button>
      </div>
    </>
  );
}
