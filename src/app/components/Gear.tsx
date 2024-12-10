
import { GearCarousel1 } from "@/components/GearCarousel1";
import { GearCarousel2 } from "@/components/GearCarousel2";

export default function GearUp() {
  return (
    <div>
    <div>

    
    <section className="w-[1344px]  h-[561px] ">
      <h1 className="font-semibold text-2xl mb-3 ml-2 top-[2868.36px] left-12 w-[90.9px] h-[27px] absolute text-[23px] text-left text-[#111]">Gear Up</h1>
      <div className="md:flex space-y-10 md:space-y-0 md:space-x-10">
        <GearCarousel1 />
        <GearCarousel2 />
      </div>
    </section>
    </div>
    </div>


  
  );
}