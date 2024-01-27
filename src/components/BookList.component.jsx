import React from 'react'

const BookListComponent = ({data}) => {
  return (
    <div className='w-[300px] h-[430px] rounded-lg shadow-md shadow-slate-200 bg-gradient-to-t from-stone-300 to-orange-700 mb-10'>
        <div className='mb-5'>
            <img src={data.img} alt="bookImg" className='h-[250px] w-full' />
        </div>
        <div className='pb-3'>
            <h1 className=' pl-2 text-[19px] font-bold text-orange-700 font-serif pb-1'>{data.title}</h1>
            <h2 className=' pl-2 text-[17px] font-semibold text-orange-500'>{data.author}</h2>
        </div>
        <div className='mb-3'>
            <p className=' pl-2   text-orange-400'>{data.description}</p>
        </div>
    </div>
  )
}

export default BookListComponent