export default function Supplier() {
  return (
    <>
      <div className="bg-white p-10 text-black">
        <h1>Create your account to become a partner</h1>
        <form className="flex max-w-lg flex-col">
          <label className="mr-3" htmlFor="name">
            Name:
          </label>
          <input
            className="rounded-md border-2 bg-white px-2 text-black"
            type="text"
            name="name"
            placeholder="First & Last Name"
          />
          <br />
          <label htmlFor="email">Email:</label>
          <input
            className="rounded-md border-2 bg-white px-2 text-black"
            type="text"
            name="email"
            placeholder="Email@email.com"
          />
          <br />
          <label htmlFor="password">Password:</label>
          <input
            className="rounded-md border-2 bg-white px-2 text-black"
            type="text"
            name="password"
            placeholder="********"
          />
          <p className="ml-1 text-sm">
            Please create a password of at least 8 characters.
          </p>
          <br />
          <label htmlFor="company">Company:</label>
          <input
            className="rounded-md border-2 bg-white px-2 text-black"
            type="text"
            name="company"
            placeholder="Company Name"
          />
          <br />
          <label htmlFor="supplier-giving">How would you like to give?</label>
          <select
            className="rounded-md border-2 bg-white px-2 text-black"
            name="types_of_giving"
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
          />
          <br />
          <label htmlFor="freeform">What is driving you to give?</label>
          <textarea
            className="rounded-md border-2 bg-white px-2 text-black"
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
