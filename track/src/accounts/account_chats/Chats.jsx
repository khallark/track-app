import React, { useEffect, useState } from 'react'
import NoProfile from '../../assets/NoProfile'

export default function Chats() {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth)
    const [openedChat, setOpenedChat] = useState(false)
    const handleResize = () => {
        setWindowWidth(window.innerWidth);
    }
    useEffect(() => {
        window.addEventListener('resize', handleResize)
        return () => {window.removeEventListener('resize', handleResize)}
    }, [])
    useEffect(() => {
        document.getElementById('option').textContent = 'chats'
    }, [])
    return (
        <div className={`mt-[70px] 700:mt-[80px] flex flex-col overflow-x-hidden overflow-y-auto min-h-[calc(100vh-70px)] 700:min-h-[calc(100vh-80px)] min-w-[360px] w-full overlap-scr`}>
            <ul>
            {[['Aryan Singh', 'haan bahi kya kar rha hai'],
            ['Suresh Raina', 'kuchh nii...'],
            ['Raghav Chadda', 'fest pe ayega??'],
            ['Rohan Singh', 'chll bye fir'],
            ['Kunal Khallar', 'oye??'],
            ].map((user, index) =>
                <li className={`flex items-center p-3 gap-3 text-[.8rem] 700:text-[1rem] w-full hover:bg-gray-100 cursor-pointer`} key={index} onClick={() => setOpenedChat(true)}><NoProfile size={windowWidth > 700 ? 40 : 35}/>
                <div className={`font-[400] *:font-robotoSans flex flex-col`}>
                    <h1>{user[0]}</h1>
                    <h1 className='text-gray-500'>{user[1]}</h1>
                </div>
                </li>
            )}
            </ul>
            {openedChat ?
                <div className={`z-[10000] *:font-robotoSans flex flex-col animate-showUpFast absolute top-0 right-0 h-[100vh] w-full bg-white`}>
                    <div className={`flex items-center p-2 gap-3 shadow-md text-[.8rem] w-full border-b`}>
                        <div className='cursor-pointer' onClick={() => setOpenedChat(false)}><NoProfile size={35}/></div>
                        <div className={`font-[400] *:font-robotoSans flex flex-col`}>
                            <h1>User</h1>
                            <h1 className='text-gray-500'>online</h1>
                        </div>
                    </div>
                    <div className='flex flex-col flex-grow overflow-y-auto overlap-scr'>
                        {/* {(() => {
                            const arr = []
                            for(let i = 0; i < 100; i++) {
                                arr.push(i)
                            }
                            return arr
                        })().map((i, index) => <h1 key={index}>{i}</h1>)} */}
                    </div>
                    <div className='p-2'>
                        <input
                            className='p-2 w-full border border-gray-400 placeholder:text-gray-600 rounded-md'
                            type="text"
                            placeholder='type here...'
                        />
                    </div>
                </div>
                :
                <></>
            }
        </div>
    )
}