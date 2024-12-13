import * as React from "react";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/cards";
import {
  Carousel,
  CarouselContent,
  CarouselNext,
  CarouselPrevious,
  CarouselItem,
} from "@/components/ui/carousel";

import Link from "next/link";
import { feature } from "@/data/detail";

export function FeaturedCarousel() {
  return (
    <Carousel
      opts={{
        align: "start",
      }}
      className="w-full mt-6 ml-9 h-[1473px] overflow-y-auto scrollbar-hide"
      orientation="vertical"
    >
 <CarouselContent className=" grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-x-4 gap-y-8  w-[900px] mx-auto">
  {feature.map((item) => (
    <CarouselItem
      key={item.id}
      className=" sm:w-[180px]  md:w-[240px] lg:w-[280px] xl:w-[300px] mx-auto  sm:h-[290px] md:h-[300px] lg:h-[350px] xl:h-[380px]"
    >
      <Link href={"Detail"}>
        <div className="p-1">
          <Card>
            <CardContent className="bg-[#F5F5F5] duration-500 transform hover:scale-105 relative aspect-square group p-0">
              <Image
                src={item.img}
                alt={"shoes"}
                width={440}
                height={440}
                className="object-cover w-full h-full"
              />
            </CardContent>
          </Card>
        </div>
        <div className="mx-2 mt-2">
          <h4 className="font-semibold text-[#9E3500] text-sm">Just In</h4>
          <h1 className="font-semibold text-sm mt-2">{item.title}</h1>
          <h3 className="text-sm text-[#757575]">{item.title2}</h3>
          <h4 className="text-sm text-[#757575]">1 Colour</h4>
          <h2 className="font-medium text-sm mt-2">MRP: {item.price}</h2>
        </div>
      </Link>
    </CarouselItem>
  ))}
</CarouselContent>



    </Carousel>
  );
}
