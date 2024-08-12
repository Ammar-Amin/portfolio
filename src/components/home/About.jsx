import React from 'react'
import { useDark } from '../../context'

export default function About({ toggle }) {

    const [dark] = useDark()

    const tech = ["Javascript", "React", "ContextAPI", "Redux", "ReduxToolkit", "Node.js", "Express.js", "MongoDB", "Mongoose", "Firebase", "Cloudinary", "Appwrite", "Git", "Github", "TailwindCSS", "Bootstrap", "HTML", "CSS",]

    return (
        <div className={`fixed z-50 h-[82%] w-[95%] max-w-7xl top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-4 md:p-10 rounded-lg ` + (dark ? "bg-stone-950" : "bg-slate-300")}>
            <div className='lg:flex w-full h-full justify-center items-center'>
                <img src='https://cdni.iconscout.com/illustration/premium/thumb/coder-3462295-2895977.png' alt=''
                    className='hidden lg:block h-1/2 lg:w-1/2 object-cover'
                />
                <div className='lg:w-1/2'>
                    <h2 className='text-3xl md:text-5xl text-red-500 font-semibold'>About Me</h2>
                    <p className='my-5 md:text-lg'>I specialize developing creative websites that align perfectly with your vision. Whether you're a business owner looking to enhance your online presence or a busy web developer needing extra support, I'm here to help you bring your ideas to life.
                    </p>
                    <span className='mt-4 md:text-lg'>Here are the technologies & tools I use :</span>
                    <div className='flex flex-wrap gap-3 py-5'>{
                        tech.map((item) => <span key={item} className={'px-3 py-[1px] rounded-full text-xs md:text-base ' + (dark ? "bg-slate-700" : "bg-teal-300")} >{item}</span>)
                    }</div>

                    <button onClick={() => toggle(false)} className={'absolute top-3 right-3 rounded-full px-[10px] pb-1 ' + (dark ? "bg-slate-700" : "bg-teal-300")}>x</button>
                </div>
            </div>
        </div>
    )
}
