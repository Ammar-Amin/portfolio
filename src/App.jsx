import React from "react";
import { About1, Footer, Header, Home, Projects } from "./components";
import { useDark } from "./context";


function App() {

  const [dark] = useDark()

  return (
    <div className={'w-full min-h-screen ' + (dark ? 'bg-[#1c1c1c] text-slate-200' : 'bg-slate-200 text-slate-800')}>
      <Header />
      <Home />
      <About1 />
      <Projects />
      <Footer />
    </div>
  )
}

export default App
