import { TypeAnimation } from "react-type-animation";

export default function Dev() {
  return (
    <TypeAnimation
      sequence={[
        "Frontend Developer",
        2000,
        "React Developer",
        2000,
        "MERN Stack Developer",
        2000,
        "Angular Developer",
        2000,
        "Full Stack Developer",
        2000,
      ]}
      wrapper="span"
      speed={3}
      className="md:text-xl lg:text-2xl font-bold"
      repeat={Infinity}
    />
  );
}
