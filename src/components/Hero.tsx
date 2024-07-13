// import hero from "../assets/images/test-hero.jpg"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "./ui/carousel"
// import { Card, CardContent } from "@/components/ui/card"
import keyboard from "../assets/images/keyboard-8.jpg"

const Hero = () => {
  return (
    <Carousel className="w-full max-w-screen-2xl mt-28 mx-auto">
      <CarouselContent className="w-full h-2/4">
        {Array.from({ length: 5 }).map((_, index) => (
          <CarouselItem className="object-cover object-center" key={index}>
            <div className="p-1">
                  <img className="" src={keyboard} alt="" />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  )
}

export default Hero