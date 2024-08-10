import React from 'react'
import { useDark } from '../../context'

const Card = ({ data }) => {
    const [dark] = useDark()
    return (
        <li className={"relative flex w-[300px] flex-col rounded-xl bg-clip-border shadow-lg " + (dark ? "bg-stone-950 text-slate-300" : "bg-slate-100 text-gray-700")}>
            <div className="relative mx-4 mt-4 overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40">
                <img
                    src={data.img}
                />
            </div>
            <div className="p-6">
                <h5 className="block font-sans text-xl font-medium leading-snug tracking-normal text-blue-gray-900 antialiased">
                    {data.title}
                </h5>
                <p className="block font-sans text-base font-light leading-relaxed   antialiased">
                    {data.desc}
                </p>
                <div className="group mt-8 inline-flex flex-wrap items-center gap-2">
                    {data.skills.map((skill, i) => <span key={i} className='px-4 py-1 text-white bg-blue-500 rounded-lg'>{skill}</span>)}
                </div>
            </div>
            <div className="p-6 pt-3 grid grid-cols-2 gap-5">
                <a href={data.live}
                    className='text-center py-2 text-white bg-red-500 rounded-md hover:opacity-80 hover:underline   '>Live</a>
                <a href={data.github}
                    className='text-center py-2 text-white bg-teal-700 rounded-md hover:opacity-80 hover:underline  '>GitHub</a>
            </div>
        </li>
    )
}

export default Card
