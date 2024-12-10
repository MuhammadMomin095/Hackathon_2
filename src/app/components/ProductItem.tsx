import * as React from "react"

import Image from "next/image"
import { Card, CardContent } from "@/components/ui/cards"
import {
  Carousel,
  CarouselContent,
  CarouselNext,
  CarouselPrevious,
  CarouselItem,
} from "@/components/ui/carousel"

import Link from "next/link"
import {  feature } from "@/data/detail"

export function FeaturedCarousel() {
  return (
 
    <Carousel
      opts={{
        align: "start",
      }}
      className=" w-full mt-8 -ml-5 h-[1473px] overflow-y-auto scrollbar-hide"
      orientation="vertical" 
    >
      <CarouselContent className="grid grid-cols-3 absolute top-156  gap-x-2 gap-y-4">
        {feature.map((item) => (
          
          <CarouselItem key={item.id} className=" md:basis-3/1 w-[328px] h-[500px] lg:basis-1/8">
            <Link href={"Detail"}>
            <div className="p-1">
              <Card>
               
                <CardContent className=" bg-[#F5F5F5] duration-500  transform hover:scale-105 relative aspect-square group p-0">
                 <Image src={item.img} alt={"shoes"} width={440} height={440}/>
                </CardContent>
                
                
              </Card>
            </div>
                <div className=" mx-2 mt-2">
                    <h4 className="font-semibold text-[#9E3500] text-sm">Just In</h4>
                  <h1 className="font-semibold text-sm mt-2">{item.title}</h1>
                  <h3 className=" text-sm text-[#757575]">{item.title2}</h3>
                  <h4 className="text-sm text-[#757575]">1 Colour</h4>
                    <h2 className="font-medium text-sm mt-2">MRP : {item.price}</h2>
                </div>
                
                </Link>
          </CarouselItem>
        ))}
        
      </CarouselContent>
      
       <CarouselPrevious className="absolute  bottom-[390px] right-14 md:bottom-[450px] md:right-14 lg:bottom-[400px] xl:bottom-[500px]">
      </CarouselPrevious >
      <CarouselNext className="absolute  bottom-[390px] right-14 md:bottom-[450px] md:right-14 lg:bottom-[400px] xl:bottom-[500px]">
      </CarouselNext >
      
    </Carousel>

  )
}