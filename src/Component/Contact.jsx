import React from 'react';
function Contact({desc}) {
  console.log(desc);
  return (
    <div className='bg-green-200'>
      <div className='flex bg-red-200 h-[93vh] justify-between w-[95%] m-auto'>
        <div className='flex bg-red-400 justify-center items-center w-[40%] align-middle'>
            {desc}
        </div> 
        <div className='flex h-full bg-blue-900 justify-center overflow-x-hidden overflow-scroll w-[58%] items-baseline'>
            <div className="m-[20px]">
            </div>
        </div> 
      </div>
    </div> 
  );
}

export default Contact;
