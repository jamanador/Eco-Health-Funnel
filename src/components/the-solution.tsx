import { IoIosCheckmarkCircle } from "react-icons/io";
import { config } from "../config";

export function TheSolution() {
  return (
    <section className="p-fit mx-auto max-w-[100%] sm:max-w-[80%] md:max-w-[70%] lg:max-w-7xl pb-2">
      <h3 className="title">The Solution</h3>
      <h3 className="text-balance py-1 text-center text-lg font-bold  md:text-[22px] lg:text-[25px]  text-red-600">BYE BYE BLADDER</h3>
      <p className="mx-auto max-w-full md:max-w-[65ch] text-pretty px-2 pb-6 lg:pb-0 text-center font-meduim leading-relaxed text-[15px] md:text-lg mb-2">
      Accidents - Discomfort - Leaks - Embarrassment
      </p>
      <div className="grid gap-6 md:gap-8 lg:grid-cols-2 lg:items-center">
        <img
          className="mx-auto rounded-lg lg:h-[84%] lg:w-[95%]"
          src="/images/solution.png"
          alt="solution section image"
        />
        <ul className="space-y-4 text-start md:space-y-6">
          {config.solutions.map((solution) => (
            <li
              key={solution}
              className="flex items-start gap-x-2 text-pretty leading-relaxed"
            >
              <span>
                <IoIosCheckmarkCircle className="size-7 md:size-9 text-[#4BAE4F]" />
              </span>
              <p className="text-lg sm:text-xl md:text-2xl">{solution}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
