import React, { useState } from 'react'
import Dev from './Dev'
import { SocialLinks } from '../../constants/SocialLinks'
import About from './About'

const Home = () => {

    const [about, setAbout] = useState(false)

    return (
        <main className='w-full min-h-screen relative'>
            <svg version="1.1" viewBox="0 0 2048 1509"
                className='w-72 h-72 lg:w-96 lg:h-96 absolute z-0 top-[29%] left-[45%] md:left-[50%] -translate-x-1/2 -translate-y-1/2'
                fill="rgb(232, 73, 70)" xmlns="http://www.w3.org/2000/svg">
                <path transform="translate(1098,287)" d="m0 0h134l200 1 29 3 28 5 43 11 16 6 21 9 25 11 17 9 18 11 11 7 12 10 11 9 21 21 13 17 9 13 8 14 12 27 8 24 4 18 3 22 2 29v31l-2 30-5 30-7 23-9 22-8 18-12 19-13 18-9 10-22 22-10 7-14 11-15 9-25 14-19 9-47 18-11 4 9 19 15 25 13 24 13 22 9 17 16 27 11 20 8 13 15 27 10 16 13 24 14 23 11 20 8 13 9 15 10 19 8 13 9 16 10 17 11 18 6 12-9 1-31-1-111-1-36-1-7-10-8-16-12-23-8-13-10-19-13-21-10-18-10-15-15-25-18-27-6-10-13-18-18-27-10-13-8-13-12-15-11-16-7-10-7-14-14-38-12-28-11-30-14-33-14-37-13-30-1-4h156l23-4 18-6 21-9 14-10 13-11 11-11 12-16 9-17 8-20 5-21 2-17v-13l-2-18-4-17-8-20-8-16-6-10-12-14-12-11-19-13-10-6-24-9-22-5-9-1-30-1h-243l-5-10-9-25-15-36-9-25-12-28-8-21z" stroke="currentColor" />
                <path transform="translate(458,704)" d="m0 0h99l42 3 41 4 62 9 29 6 30 8 40 11 21 6 37 13 17 6 52 23 16 8 23 12 11 6 18 10 9 6 15 8 13 9 22 14 13 9 13 10 11 7 13 11 18 13 12 11 11 9 14 12 33 31 12 13 11 11 9 11 12 14 11 14 9 12 10 13 9 14 11 15 11 17 10 16 7 10 14 25 13 23 16 33 8 17 5 18-1 5-225-1-4-4-12-26-9-22-13-25-6-10-6-12-11-17-15-24-10-14-16-22-13-16-10-13-14-15-9-10-9-11-8-8-5-4-7-8-8-8-10-8-13-12-14-11-12-10-13-10-16-11-9-7-11-7-16-10-19-12-20-11-16-9-14-7-3 10-14 36-9 24-9 25-14 36-11 29-11 28-11 30-13 33-11 31-13 33-13 38-14 36-2 4-4 1h-179l-6-1 2-6 11-27 7-19 18-43 6-16 6-15 10-24 10-26 15-36 12-32 11-27 13-35 17-42 7-19 16-39 11-29 6-14v-3l-22-10-25-9-30-11-19-7-26-7-28-8-23-6-32-6-37-6-37-5-39-4-6-1v-2l17-4 55-7 24-3 52-5z" stroke="currentColor" />
                <path transform="translate(826,287)" d="m0 0h161l3 3 15 40 15 36 11 29 11 26 10 26 11 27 13 33 6 16 13 31 12 32 15 36 7 20 17 41 10 27 14 33 9 25 16 37 8 23 18 43 6 17 1 4-5-2-15-12-13-10-14-9-13-10-22-14-20-13-9-6-14-7-15-9-21-11-23-11-16-8-9-4-16-6-5-3-3-9-6-14-12-30-12-34-11-27-12-34-15-38-10-29-8-19-4-2-3 11-11 31-11 28-10 29-15 38-9 26-8 19-2 3-10-1-35-6-25-3-68-6-31-2 1-5 8-21 7-19 16-38 10-27 13-31 8-22 19-46 8-22 15-36 7-19 11-27 11-28 14-35 8-19z" stroke="currentColor" />
                <path transform="translate(307,640)" d="m0 0h2v74l-15 4-13 4-1 1v7l13 5 14 4 2 2v71l-5-1-22-14-22-12-21-13-12-7-14-7-13-8-24-13-16-10v-3l24-13 9-6 21-12 16-9 18-11 17-9 13-8 17-10z" stroke="currentColor" />
                <path transform="translate(280,720)" d="m0 0 4 1-4 2v8l-8-1-10-3v-2z" fill="#FEFEFE" />
            </svg>
            <div className='px-4 md:px-10 w-full max-w-5xl mx-auto h-screen flex justify-between items-center'>
                <div className='mt-10'>
                    <h1 className='mb-2 text-4xl md:text-6xl font-medium'>Ammar Amin</h1>
                    <Dev />
                    <div className='mt-3'>
                        <button onClick={() => setAbout(true)}
                            className='px-6 py-2 bg-red-500 font-semibold rounded-md text-white'>About Me</button>
                    </div>
                </div>
                {about && <About toggle={setAbout} />}
                <ul className='w-8 flex flex-col gap-3'>
                    {SocialLinks?.map(item => (
                        <li key={item.href}>
                            <a href={item.href} target='_blank'>
                                {item.icon}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </main>
    )
}

export default Home
