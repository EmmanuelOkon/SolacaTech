import * as React from "react";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { categories } from "@/static";

export function Categories() {
  return (
    <Carousel
      opts={{
        align: "start",
        slidesToScroll: 4
      }}
      className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8  "
    >
      <div className="flex items-center justify-between w-full ">
        <p className="body font-semibold text-[#333333] ">Categories</p>

        <div className="text-[#333333] flex items-center gap-4 ">
          <CarouselPrevious className=" border-0 " />
          <CarouselNext className="border-0 bg-white" />
        </div>
      </div>
      <CarouselContent>
        {categories.map((item) => (
          <CarouselItem
            key={item.id}
            className="md:basis-1/2 lg:basis-1/4 rounded-none "
          >
            <div className="p-1">
              <Card
                className="flex items-end rounded-[14px] w-[288px] h-[190px] object-cover"
                style={{
                  backgroundImage: `url(/assets/images/categories${item.id}.png)`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                }}
              >
                <CardContent className="p-2">
                  <span className="body flex  text-[18px] p-2 font-semibold bg-white rounded-[5px] ">
                    {item.name}
                  </span>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
}
