import * as React from "react"

import Image from "next/image"
import { Card, CardContent } from "@/components/ui/cards"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel"
import Link from "next/link"
import { airMax } from "@/data/detail"
import { client } from "@/sanity/lib/client"
import { urlFor } from "@/sanity/lib/client";


export default async function CarouselSize() {
  const data = await client.fetch(`*[_type == "product"]`);
    console.log(data);
  return (
    <div className="py-16">
    <div className="px-4 sm:px-8 lg:px-12 ">
      {/* Heading */}
      <div className="max-w-screen-xl mx-auto">
        <p className="text-[23px] font-semibold text-left text-[#111] mb-3">
          Best of Air Max
        </p>
      </div>
      </div>

      

<div className="flex flex-col sm:m-2 md:flex-row space-y-14 md:space-y-0 ">
      {/* Carousel */}
      <Carousel
        opts={{
          align: "start",
        }}
        className="w-full sm:w-[70%] lg:w-[95%] mx-auto mt-12"
      >
        <CarouselContent>
        {data.map((product: any, index: number) => (
          <div
          key={index}>
            <CarouselItem key={product.id} className="sm:basis-1/2 md:basis-1/2 lg:basis-1/3 xl:basis-1/3">
              <Link href={""}>
                <div className="p-2">
                  <Card>
                    <CardContent className="w-full h-96 bg-[#F5F5F5] aspect-square group">
                      <img 
                      src={urlFor(product.image).url()} 
                      alt="shoes" 
                      className="w-full h-full"
                      />
                    </CardContent>
                  </Card>
                </div>
                <div className="flex justify-between mx-2 mt-2">
                  <h1 className="font-semibold text-sm md:text-base">{product.productName}</h1>
                  <h2 className="font-semibold text-sm md:text-base">MRP: {product.price}</h2>
                </div>
                <h3 className="ml-2 text-xs md:text-sm">{product.description}</h3>
                <div className="font-semibold text-sm md:text-base">Stock:{product.inventory}</div>
                <div className="font-semibold text-sm md:text-base">color:{product.colors}</div>

              </Link>
            </CarouselItem>
            </div>
          ))}
        </CarouselContent>

        {/* Carousel Navigation */}
       
          
       
      </Carousel>
    </div>
    </div>
   

  )
}


