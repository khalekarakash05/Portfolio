import Link from 'next/link'
import React from 'react'

const Title = ({text, className, width}:{text:string, className:string, width:string}) => {
  return (
    <div className={className}>
                    <h1 className='text-3xl font-bold group-hover:text-green-400 transition-all'>
                        {text}
                    </h1>
                    <div className={`w-${width} h-2 bg-green-500 rounded-full translate-x-1`}></div>
                    <div className={`w-${width} h-2 bg-indigo-500 rounded-full translate-x-4`}></div>
     </div>
  )
}

export default Title