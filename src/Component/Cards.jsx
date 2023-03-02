import React from 'react';

const Cards = ({ title, date, vote, imgs ,name}) => {
  return (
    <>

      <div className="flex pb-[10px] flex-col flex-wrap justify-center items-center m-auto w-[100%] md:w-[calc(33.33%-10px)] lg:w-[calc(25%-10px)] hover:translate-y-[-3px] ">

        <div className="flex flex-col bg-gray-300 h-[56vh] w-full text-center items-center">

          <div className="w-full h-[45vh] flex">
            <img className='w-full h-full ' src={!imgs ? " src/assets/poster.png":`https://image.tmdb.org/t/p/w1280${imgs}`} alt="" />
          </div>

          <div className="text-xl flex justify-center items-center md:h-[8vh] text-center align-middle  w-full font-medium overflow-hidden text-ellipsis ">
            {!title ? name : title.split(':')[0] }
          </div>

          <div className="flex justify-between w-full font-normal px-[10px]">
            <div className='text-yellow-700  flex items-center'>
              <ion-icon name="star"></ion-icon>
              {!vote ? "No review" : vote}
            </div>

            <div className='font-medium flex items-center text-green-600'>
              <ion-icon name="calendar"></ion-icon>
              {date}
            </div>

          </div>

        </div>
      </div>

    </>

  );
}

export default Cards;
