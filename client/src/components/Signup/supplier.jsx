export default function Supplier() {
  return (
    <>
      <div>
        <h1>Create your account to become a partner</h1>
        <form>
          <label for="name">Name:</label>
          <input
            type="text"
            name="name"
            placeholder="First & Last Name"
          ></input>
          <br></br>
          <label for="company">Company:</label>
          <input type="text" name="company" placeholder="Company Name" />
          <br></br>
          <label for="supplier-giving">How would you like to give?</label>
          <select name="types_of_giving">
            <option value="onetime_food">One time food donation</option>
            <option value="recurring_food">Recurring food donation</option>
            <option value="onetime_money">One time monetary gift</option>
            <option value="recurring_money">Recurring monetary gift</option>
          </select>
          <div>
            <input type="checkbox" id="exampleCheck" />
            <label className="ml-3" for="exampleCheck">
              I want to remain anonymous
            </label>
          </div>
          <label for="company">How'd you hear about us?</label>
          <input type="text" name="source" placeholder="Ex: Facebook" />
          <br></br>
          <label for="freeform">What is driving you to give?</label>
          <br></br>
          <textarea id="freeform" name="freeform" rows="4" cols="50" placeholder="Enter text here">
          </textarea>
        </form>
      </div>
    </>
  );
}
