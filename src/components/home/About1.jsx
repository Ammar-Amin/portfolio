import React from 'react'
import { useDark } from '../../context'
import { tech } from '../../constants';

const About1 = () => {
    const [dark] = useDark();
    return (

        <div className={'min-h-screen flex items-center ' +
            (dark ? "bg-stone-950" : "bg-slate-300")}
        >
            <div className="w-full max-w-7xl mx-auto lg:flex lg:gap-3 justify-center items-center  p-4 pb-12 md:p-10 ">
                <img
                    src="https://cdni.iconscout.com/illustration/premium/thumb/coder-3462295-2895977.png"
                    alt=""
                    className="block mx-auto h-1/2 lg:w-1/2 object-cover"
                />
                <div className="lg:w-1/2">
                    <h2 className="text-3xl md:text-5xl text-red-500 font-semibold">
                        About Me
                    </h2>
                    <p className="my-5 md:text-lg">
                        I specialize developing creative websites that align perfectly with
                        your vision. Whether you're a business owner looking to enhance your
                        online presence or a busy web developer needing extra support, I'm
                        here to help you bring your ideas to life.
                    </p>
                    <span className="mt-4 md:text-lg">
                        Here are the technologies & tools I use :
                    </span>
                    <div className="flex flex-wrap gap-3 py-5">
                        {tech.map((item) => (
                            <span
                                key={item}
                                className={`px-3 py-1 text-xs font-medium rounded-full 
                  ${dark
                                        ? "bg-gradient-to-r from-indigo-600 to-purple-600 text-white"
                                        : "bg-gradient-to-r from-indigo-400 to-purple-500 text-white"
                                    }`}
                            >
                                {item}
                            </span>
                        ))}
                    </div>

                    <button
                        onClick={() => toggle(false)}
                        className={
                            "absolute top-3 right-3 rounded-full px-[10px] pb-1 " +
                            (dark ? "text-white" : "text-black")
                        }
                    >
                        <i className="ri-close-line"></i>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default About1
