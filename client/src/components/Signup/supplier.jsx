export default function Supplier() {
  return (
    <>
      <div className="bg-white text-black p-10">
        <h1>Create your account to become a partner</h1>
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
          <label for="company">Company:</label>
          <input className="bg-white text-black border-2 rounded-md px-2" type="text" name="company" placeholder="Company Name" />
          <br />
          <label for="supplier-giving">How would you like to give?</label>
          <select className="bg-white text-black border-2 rounded-md px-2" name="types_of_giving">
            <option value="onetime_food">One time food donation</option>
            <option value="recurring_food">Recurring food donation</option>
            <option value="onetime_money">One time monetary gift</option>
            <option value="recurring_money">Recurring monetary gift</option>
          </select>
          <br />
          <div>
            <input className="bg-white" type="checkbox" />
            <label className="ml-3" for="Checkbox">
              I want to remain anonymous
            </label>
          </div>
          <br />
          <label for="company">How'd you hear about us?</label>
          <input className="bg-white text-black border-2 rounded-md px-2" type="text" name="source" placeholder="Ex: Facebook" />
          <br />
          <label for="freeform">What is driving you to give?</label>
          <textarea className="bg-white text-black border-2 rounded-md px-2"
            name="freeform"
            rows="4"
            cols="50"
            placeholder="Enter text here"
          ></textarea>
        </form>
        <br />
        <button className="bg-blue-600 text-white">Done</button>
      </div>
    </>
  );
}
