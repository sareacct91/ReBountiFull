import { useState } from 'react';

export default function Client() {
  const [formData, setFormData] = useState({
    fistName: "",
    lastName: "",
    address: "",
    city: "",
    state: "",
    zip: "",
    email: "",
    donation:""
  })

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  // const handleSubmit = (event) => {
  //   event.preventDefault();

  //   << call Stripe to accept donation >>
  // }

  return (
    <div className='mx-auto w-[95%] flex flex-col my-3'>
      <h2 className='text-2xl mb-2'>Thank you for choosing to Donate!</h2>
      <p className='mb-2'>Please fill out the form below to complete your monetary donation through Stripe.</p>
      <form action="submit" className='flex flex-row flex-wrap'
        // onSubmit={handleSubmit}
      >
        <div>
          <label htmlFor="firstName">First Name:</label>
          <input type="text" id="firstName" name="firstName" required
            value={formData.firstName} onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="lastName">Last Name:</label>
          <input type="text" id="lastName" name="lastName" required
            value={formData.lastName} onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="streetAddress">Address:</label>
          <input type="text" id="streetAddress" name="streetAddress" required
            value={formData.streetAddress} onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="city">City:</label>
          <input type="text" id="city" name="city" required
            value={formData.city} onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="state">State:</label>
          <input type="text" id="state" name="state" required
            value={formData.state} onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="zip">Zip/Postal Code:</label>
          <input type="text" id="zip" name="zip" required
            value={formData.zip} onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" required
            value={formData.email} onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="donation">Enter Donation Amount in Whole Dollars:</label>
          <input type="text" id="donation" name="donation" required
            value={formData.donation} onChange={handleChange}
          />
        </div>
        <button type="submit">Donate!</button>
      </form>
    </div>
  );
}