import React from 'react'
import { basic, clones, games, mega } from '../../constants'
import Card from './card'

const Projects = () => {
    return (
        <div className='w-full max-w-7xl mx-auto min-h-screen bg-red-500 rounded-lg pt-3 pb-10 md:pb-16 lg:pb-20'>

            <h1 className='text-center text-3xl md:text-5xl lg:text-6xl py-4 lg:pb-7 font-medium'>Projects</h1>
            <ul className='flex flex-wrap gap-3 justify-center'>
                {
                    mega.map(item => <Card data={item} key={item.title} />)
                }
            </ul>

            <h1 className='text-center text-3xl md:text-5xl lg:text-6xl py-4 lg:pb-7 font-medium mt-10'>Clones</h1>
            <ul className='flex flex-wrap gap-5 justify-center item-center'>
                {
                    clones.map(item => <Card data={item} key={item.title} />)
                }
            </ul>

            <h1 className='text-center text-3xl md:text-5xl lg:text-6xl py-4 lg:pb-7 font-medium mt-10'>Assignments</h1>
            <ul className='flex flex-wrap gap-5 justify-center item-center'>
                {
                    basic.map(item => <Card data={item} key={item.title} />)
                }
            </ul>

            <h1 className='text-center text-3xl md:text-5xl lg:text-6xl py-4 lg:pb-7 font-medium mt-10'>Games</h1>
            <ul className='flex flex-wrap gap-5 justify-center item-center'>
                {
                    games.map(item => <Card data={item} key={item.title} />)
                }
            </ul>
        </div>
    )
}

export default Projects
