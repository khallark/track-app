import { nanoid } from '@reduxjs/toolkit'
import React from 'react'
import { useSelector } from 'react-redux'

export default function D_Overs() {
    const theme = useSelector(state => state.globals.theme)
    const data = useSelector(state => state.dashboard.data)
    const overs_1 = data.innings.first.overs
    const overs_2 = data.innings.second.overs

    return (
        <div className={`p-3 h-full w-[100vw] overflow-auto ${theme ? 'text-[#3b3b3b]' :'text-[#CCCCCC]'} ${theme ? '' : 'custom-scrollbar'}`}>
            {[
                {label: 'Innings'}
            ].map(({label}) => (
                <div key={label} className={`flex flex-col w-full`}>
                    <div className={`pb-2 mb-2 font-robotoSans text-[1.3rem] 700:text-[1.5rem] border-b ${theme ? 'border-b-[#e7e7e7]' : 'border-b-[#3d3d3d]'}`}>{label} <span className='font-robotoSans font-semibold'>#1</span></div>
                    {(() => {
                        let arr = []
                        let i = 0
                        let index = 0
                        while(i < overs_1.length) {
                            let temp = []
                            let j = 0
                            while(i < overs_1.length && j < 6) {
                                temp.push(overs_1[i])
                                if(!overs_1[i].includes('Wd') && !overs_1[i].includes('Nb')) j++
                                i++
                            }
                            arr.push([++index, temp])
                        }
                        return arr
                    })().map((element) => (
                        <div key={nanoid()} className={`py-2 flex flex-col`}>
                            <div className={`flex 700:gap-x-1`}>
                                <h1 className={`font-robotoSans pr-3 w-[20px] text-[.9rem] 700:text-[1rem] ${theme ? 'text-[#3b3b3b]' : 'text-[#797979]'}`}>{element[0]}.</h1>
                                <div className={`flex flex-wrap gap-[.2rem] 700:gap-x-1`}>
                                    {element[1].map((val) => (
                                        <h1 key={nanoid()} className={`flex items-center ${theme ? 'text-[#3b3b3b]' :'text-[#CCCCCC]'} ${theme ? 'bg-white border border-[#cccccc] hover:border-[#005bf8]' : 'border border-[#37373d] hover:border-[#0078d4] bg-[#37373d]'} font-mono rounded-md leading-none py-1 px-2 700:px-3 text-[.7rem] 700:text-[.9rem] cursor-pointer ${theme ? 'hover:brightness-[.95] active:brightness-[.8]' : 'hover:brightness-[1.2] active:brightness-[1]'}`}>{val}</h1>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            ))}
            {[
                {label: 'Innings'}
            ].map(({label}) => (
                <div key={label} className={`flex flex-col w-full`}>
                    <div className={`pt-4 pb-2 mb-2 font-robotoSans text-[1.3rem] 700:text-[1.5rem] border-b ${theme ? 'border-b-[#e7e7e7]' : 'border-b-[#3d3d3d]'}`}>{label} <span className='font-robotoSans font-semibold'>#2</span></div>
                    {(() => {
                        if(data.innings.first.active) return ['( Not started yet )']
                        let arr = []
                        let i = 0
                        let index = 0
                        while(i < overs_2.length) {
                            let temp = []
                            let j = 0
                            while(i < overs_2.length && j < 6) {
                                temp.push(overs_2[i])
                                if(!overs_2[i].includes('Wd') && !overs_2[i].includes('Nb')) j++
                                i++
                            }
                            arr.push([++index, temp])
                        }
                        return arr
                    })().map((element) => {
                        if(data.innings.first.active) return (
                            <h1 key={nanoid()} className='font-robotoSans text-[.7rem] 700:text-[1rem]'>{element}</h1>
                        )
                        return (
                        <div key={nanoid()} className={`py-2 flex flex-col`}>
                            <div className={`flex 700:gap-x-1`}>
                                <h1 className={`font-robotoSans pr-3 w-[20px] text-[.9rem] 700:text-[1rem] ${theme ? 'text-[#3b3b3b]' : 'text-[#797979]'}`}>{element[0]}.</h1>
                                <div className={`flex flex-wrap gap-[.2rem] 700:gap-x-1`}>
                                    {element[1].map((val) => (
                                        <h1 key={nanoid()} className={`flex items-center ${theme ? 'text-[#3b3b3b]' :'text-[#CCCCCC]'} ${theme ? 'bg-white border border-[#cccccc] hover:border-[#005bf8]' : 'border border-[#37373d] hover:border-[#0078d4] bg-[#37373d]'} font-mono rounded-md leading-none py-1 px-2 700:px-3 text-[.7rem] 700:text-[.9rem] cursor-pointer ${theme ? 'hover:brightness-[.95] active:brightness-[.8]' : 'hover:brightness-[1.2] active:brightness-[1]'}`}>{val}</h1>
                                    ))}
                                </div>
                            </div>
                        </div>
                        )
                    })}
                </div>
            ))}
        </div>
    )
}