import { useLazyQuery } from '@apollo/client';
import { useEffect, useState } from 'react';
import { SUBMIT_DONATION } from '../../utils/queries';

export default function Client() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    address: "",
    city: "",
    state: "",
    zip: "",
    email: "",
    donation: ""  
  })

  const [submitDonation, { data, loading ,error }] = useLazyQuery(SUBMIT_DONATION);

  useEffect(() => {
    if (data) {
      window.location.assign(data.donation.session);
    }
  }, [data]);


  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };


  if (error) {
    console.log(error)
    return <h1>ERROR</h1>
  }

  const handleSubmit = async (event) => {
    event.preventDefault();

    const amount = parseInt(formData.donation) * 100;

    await submitDonation({ 
      variables: { 
        amount 
      }
    });
  }

  return (
    <div className="mx-auto mt-3 flex min-h-[calc(100vh-388px-192px-40px)] w-full flex-col items-center justify-evenly bg-white pt-2 text-black gap-5 my-10">
      <h2 className="mb-2 text-4xl font-bold">Thank you for choosing to Donate!</h2>
      <div className='border border-black p-10 rounded-lg'>
        <p className="mb-2">
          Please fill out the form below to complete your monetary donation
          through Stripe.
        </p>
        <form action="submit" className="mt-4 pb-4" onSubmit={handleSubmit}>
          <div className="lg:mb-3 lg:flex lg:flex-row lg:gap-5 ">
            <div>
              <label htmlFor="firstName">First Name:</label>
              <input
              
                type="text"
                id="firstName"
                name="firstName"
                required
                value={formData.firstName}
                onChange={handleChange}
                className="mb-3 ms-2 w-56 border border-black bg-white ps-1 "
              />
            </div>
            <div>
              <label htmlFor="lastName">Last Name:</label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                required
                value={formData.lastName}
                onChange={handleChange}
                className="mb-3 ms-2 w-56 border border-black bg-white ps-1"
              />
            </div>
            <div>
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="mb-3 ms-2 w-60 border border-black bg-white ps-1"
              />
            </div>
          </div>
          <div className="flex flex-col lg:flex-row ">
            <div>
              <label htmlFor="address">Address:</label>
              <input
                type="text"
                id="address"
                name="address"
                required
                value={formData.address}
                onChange={handleChange}
                className="mb-3 ms-2 w-64 border border-black bg-white ps-1"
              />
            </div>
            <div className="lg:ms-3">
              <label htmlFor="city">City:</label>
              <input
                type="text"
                id="city"
                name="city"
                required
                value={formData.city}
                onChange={handleChange}
                className="mb-3 ms-2 border border-black bg-white ps-1"
              />
            </div>
            <div className="lg:ms-3">
              <label htmlFor="state">State:</label>
              <input
                type="text"
                id="state"
                name="state"
                required
                value={formData.state}
                onChange={handleChange}
                className="mb-3 ms-2 w-8 border border-black bg-white ps-1"
              />
            </div>
            <div className="lg:ms-3">
              <label htmlFor="zip">Zip/Postal Code:</label>
              <input
                type="text"
                id="zip"
                name="zip"
                required
                value={formData.zip}
                onChange={handleChange}
                className="mb-3 ms-2 w-20 border border-black bg-white ps-1"
              />
            </div>
          </div>
          <div className="lg:mt-1">
            <label htmlFor="donation">
              Enter Donation Amount in Whole Dollars:
            </label>
            <input
              type="text"
              id="donation"
              name="donation"
              required
              value={formData.donation}
              onChange={handleChange}
              className="mb-3 border border-black bg-white ps-1 lg:ms-2"
            />
          </div>
          <button
            type="submit"
            className="mt-2 h-10 bg-green-600 text-lg lg:mt-0"
          >
            Donate!
          </button>
        </form>
      </div>
    </div>
  );
}
