import React from 'react'

function Order() {
  return (
    <div className='text-white'>
      <div>
        <h1 className='sm:mt-[2rem] sm:ml-[4rem] sm:text-lg md:mt-[3rem] md:ml-[13rem] md:text-xl ml-5 font-bold font-Arimo'>Delivery Information</h1>
        <div>
          <input className='sm:mt-5 sm:h-[2rem] md:mt-[1rem] md:h-[2.2rem] md:w-[15.1rem] ml-5 pl-2 font-Arimo border' type="email" placeholder='First Name' />
          <input className='sm:mt-3 sm:ml-5 sm:h-[2rem] md:ml-3 md:h-[2.2rem] md:w-[15.1rem] pl-2 font-Arimo border' type="email" placeholder='Last Name' />
        </div>
        <div>
          <input className='sm:mt-3 sm:h-[2rem] md:mt-3 md:h-[2.2rem] md:w-[31rem] ml-5 pl-2 font-Arimo border' type="email" placeholder='Email Address' />
        </div>
        <div>
          <input className='sm:mt-3 sm:h-[2rem] md:mt-3 md:h-[2.2rem] md:w-[31rem] ml-5 pl-2 font-Arimo border' type="text" placeholder='Street' />
        </div>
        <div>
          <input className='sm:mt-3 sm:h-[2rem] sm:ml-5 md:mt-3 md:ml-5 md:h-[2.2rem] md:w-[15.1rem] pl-2 font-Arimo border' type="email" placeholder='City' />
          <input className='sm:mt-3 sm:ml-5 sm:h-[2rem] md:ml-3 md:h-[2.2rem] md:w-[15.1rem] pl-2 font-Arimo border' type="text" placeholder='State' />
        </div>
        <div>
          <input className='sm:mt-3 sm:ml-5 sm:h-[2rem] md:mt-3 md:ml-5 md:h-[2.2rem] md:w-[15.1rem] pl-2 font-Arimo border' type="text" placeholder='Coutry' />
          <input className='sm:mt-3 sm:ml-5 sm:h-[2rem] md:ml-3 md:h-[2.2rem] md:w-[15.1rem] pl-2 font-Arimo border' type="number" placeholder='Zipcode' />
        </div>
        <div>
          <input className='sm:mt-3 sm:h-[2rem] md:mt-3 md:h-[2.2rem] md:w-[31rem] ml-5 pl-2 font-Arimo border' type="number" placeholder='Phone' />
        </div>
      </div>
      <div className='sm:mt-5 sm:ml-2 md:mt-[-22rem] md:mr-[1rem] md:justify-end lg:mr-[5rem] flex'>
        <div className='sm:mt-5 sm:ml-3 md:mt-[5rem]'>
          <h1 className='sm:text-xl md:text-2xl font-bold font-Arimo'>Cart Totals</h1>
          <div className='flex'>
            <p className='sm:mt-2 sm:text-lg  md:mt-5 md:text-lg font-Arimo'>Subtotal</p>
            <p className='sm:mt-2 sm:text-lg sm:ml-[8.9rem] md:mt-5 md:ml-[12rem] md:text-lg '>{0}</p>
          </div>
          <div className='flex'>
            <p className='sm:mt-2 sm:text-lg md:mt-5 md:text-lg font-Arimo'>Delivery Charge</p>
            <p className='sm:mt-2 sm:ml-[5rem] sm:text-lg md:mt-5 md:ml-[8rem] md:text-lg'>{0}</p>
          </div>
          <div className='flex sm:mt-2 md:mt-5'>
            <p className='sm:text-xl font-bold font-Arimo'>Total</p>
            <p className='sm:ml-[10rem] sm:text-lg md:ml-[13.2rem]'>{0}</p>
          </div>
          <button className='sm:mt-5 sm:h-[2.5rem] sm:w-[14rem] sm:text-sm sm:text-nowrap md:mt-10 md:h-[2.5rem] md:w-[17rem] md:text-xl rounded-lg hover:opacity-80 font-bold font-Arimo bg-white text-black'>PROCEED TO PAYMENT</button>
        </div>
      </div>
    </div>
  )
}

export default Order