import React, { useState } from 'react'
import PaystackPop from '@paystack/inline-js'

const Paystackintegration = () => {
  const [email, setEmail] = useState("")
  const [amount, setAmount] = useState("")
  const [firstname, setFirstname] = useState("")
  const [lastname,setLastname] = useState("")
  const paywithpaystack = (e) => {
    e.preventDefault() 
    const paystack = new PaystackPop()
    paystack.newTransaction({
      key: "pk_test_ac3e3bdf83e6bd4eb89a3025d5ad4d57f2d9dfba",
      amount: amount * 100,
      email,
      firstname,
      lastname,
      onSuccess: (transaction) => {
        let message = `Payment Complete! Reference ${transaction.reference}` 
        alert(message);
        setEmail('');
        setAmount('');
      
      },
      onCancel() {
        alert("You have Canceled the transaction")
      }
    })
}

  return (
    <div className='flex justify-center items-center h-screen'>
      <div className='max-w-md w-full'>
        <h1 className='text-4xl font-bold text-center mb-8'>Payment Testing 💳</h1>
        <form className='bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4'>
          <div className='mb-4'>
            <label htmlFor='email' className='block text-gray-700 text-sm font-bold mb-2'>
              Email Address
            </label>
            <input
              type='email'
              id='email-address'
              className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
          </div>
          <div className='mb-4'>
            <label htmlFor='first-name' className='block text-gray-700 text-sm font-bold mb-2'>
              First Name
            </label>
            <input
              type='text'
              id='first-name'
              className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
              onChange={(e) => setFirstname(e.target.value)}
            />
          </div>
          <div className='mb-4'>
            <label htmlFor='amount' className='block text-gray-700 text-sm font-bold mb-2'>
              Amount
            </label>
            <input
              type='tel'
              id='amount'
              className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
              onChange={(e) => setAmount(e.target.value)}
              value={amount}
            />
          </div>
          <div className='flex items-center justify-center'>
            <button
              type='submit'
              className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'
              onClick={paywithpaystack}
            >
              Pay
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Paystackintegration