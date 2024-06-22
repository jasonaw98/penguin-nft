import { Spotlight } from "./ui/Spotlight";
import { TextAnimate } from "@/components/ui/text-animate"


export function Hero() {
  return (
    <div className="h-[24rem] w-full rounded-md flex md:items-center md:justify-center bg-slate-200 dark:bg-[#05091ead] antialiased bg-grid-white/[0.02] relative overflow-hidden -mb-10">
      <Spotlight
        className="-top-20 left-0 md:left-60 md:-top-20"
        fill="blue"
      />
      <div className=" p-4 max-w-7xl flex justify-center mx-auto relative items-center z-10 w-full">
        <TextAnimate text="LITTLE PUDGUYS" type="popIn" className="text-4xl md:text-7xl font-bold text-center text-slate-700 dark:text-slate-400 tracking-widest"/>
      </div>
    </div>
  );
}
