import React from 'react'

export const BreadCrum = ({pageName}) => {
  return (
    <div className='w-full h-20 bg-gray-100 mb-10 flex justify-center items-center'  >
        <p className='font-bold'>Home / {pageName}</p>
    </div>
  )
}
