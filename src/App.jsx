import React from "react";
import { Footer, Header } from "./components";
import { useDark } from "./context";

function App() {

  const [dark] = useDark()

  return (
    <div className={'w-full min-h-screen ' + (dark ? 'bg-[#1c1c1c] text-slate-200' : 'bg-slate-200 text-slate-900')}>
      <Header />

      <Footer />
    </div>
  )
}

export default App
