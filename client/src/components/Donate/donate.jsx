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
    donation: ""
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
    <div className='mx-auto w-[95%] flex flex-col mt-3 pt-2 min-h-[calc(100vh-388px-192px-40px)]'>
      <h2 className='text-2xl mb-2'>Thank you for choosing to Donate!</h2>
      <p className='mb-2'>Please fill out the form below to complete your monetary donation through Stripe.</p>
      <form action="submit" className='mt-4 pb-4'
      // onSubmit={handleSubmit}
      >
        <div className='lg:flex lg:flex-row lg:gap-5 lg:mb-3'>
          <div>
            <label htmlFor="firstName">First Name:</label>
            <input type="text" id="firstName" name="firstName" required
              value={formData.firstName} onChange={handleChange}
              className='mb-3 ms-2 w-56 ps-1'
            />
          </div>
          <div>
            <label htmlFor="lastName">Last Name:</label>
            <input type="text" id="lastName" name="lastName" required
              value={formData.lastName} onChange={handleChange}
              className='mb-3 ms-2 w-56 ps-1'
            />
          </div>
          <div>
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" required
            value={formData.email} onChange={handleChange}
            className='mb-3 ms-2 w-60 ps-1'
          />
        </div>
        </div>
        <div className='flex flex-col lg:flex-row'>
          <div>
            <label htmlFor="streetAddress">Address:</label>
            <input type="text" id="streetAddress" name="streetAddress" required
              value={formData.streetAddress} onChange={handleChange}
              className='mb-3 ms-2 w-64 ps-1'
            />
          </div>
          <div className='lg:ms-3'>
            <label htmlFor="city">City:</label>
            <input type="text" id="city" name="city" required
              value={formData.city} onChange={handleChange}
              className='mb-3 ms-2 ps-1'
            />
          </div>
          <div className='lg:ms-3'>
            <label htmlFor="state">State:</label>
            <input type="text" id="state" name="state" required
              value={formData.state} onChange={handleChange}
              className='mb-3 ms-2 w-8 ps-1'
            />
          </div>
          <div className='lg:ms-3'>
            <label htmlFor="zip">Zip/Postal Code:</label>
            <input type="text" id="zip" name="zip" required
              value={formData.zip} onChange={handleChange}
              className='mb-3 ms-2 w-20 ps-1'
            />
          </div>
        </div>
        <div className='lg:mt-1'>
          <label htmlFor="donation">Enter Donation Amount in Whole Dollars:</label>
          <input type="text" id="donation" name="donation" required
            value={formData.donation} onChange={handleChange}
            className='mb-3 lg:ms-2 ps-1'
          />
        </div>
        <button type="submit" className='bg-green-600 mt-2 text-lg lg:mt-0 h-10'>Donate!</button>
      </form>
    </div>
  );
}