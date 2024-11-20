import React from 'react'

const result = [
    {
        title: '1. CLICK HERE FOR ODD SEMESTER - III OCT 2024 RESULTS for BFM, BBI, BAMMC, B.Sc.DS programs ',
        url: '/result/sem3_result'
    },
]
export default function page() {
  return (
    <section>
        <h2 className='text-4xl text-center mt-[60px] font-bold text-red-500'>Result</h2>
        <div className='text-center text-xl mt-2'>
            {result.map((item,index) => (
                <a href={item.url} key={index} className='hover:text-red-500'>{item.title}</a>
            ))}
        </div>
    </section>
  )
}


