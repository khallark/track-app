import React from 'react'

export default function Loading({stroke, w, h}) {
    return (
        <div className='loading-animate w-fit h-fit'>
            <svg stroke={stroke ? stroke : 'white'} fill="none" strokeidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height={h ? h : '1.2rem'} width={w ? w : '1.2rem'} xmlns="http://www.w3.org/2000/svg"><line x1="12" y1="2" x2="12" y2="6"></line><line x1="12" y1="18" x2="12" y2="22"></line><line x1="4.93" y1="4.93" x2="7.76" y2="7.76"></line><line x1="16.24" y1="16.24" x2="19.07" y2="19.07"></line><line x1="2" y1="12" x2="6" y2="12"></line><line x1="18" y1="12" x2="22" y2="12"></line><line x1="4.93" y1="19.07" x2="7.76" y2="16.24"></line><line x1="16.24" y1="7.76" x2="19.07" y2="4.93"></line></svg>
        </div>
    )
}