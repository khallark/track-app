import React from 'react'

export default function Bowler({fill, size}) {
    return (
        <svg className='rotate-[35deg]' xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill='none'>
            <path d="M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3M12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3M12 21V3" stroke={fill} stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
    )
}