'use client'
import OnBoardSlide1 from '@/public/images/onboard/onboard-1.png'
import autoPlay from 'embla-carousel-autoplay'
import { Carousel, CarouselControl, CarouselIndicators, CarouselItem, CarouselSlides } from 'keep-react'
import Image from 'next/image'

const OnboardCarousel = () => {
  return (
    <div>
      <Carousel options={{ loop: true }} plugins={[autoPlay()]} carouselViewportClasses="flex flex-col-reverse">
        <CarouselSlides>
          <CarouselItem className="flex items-center justify-center">
            <Image
              src={OnBoardSlide1}
              alt="onboard"
              width={791}
              height={571}
              style={{ maxWidth: '100%', height: 'auto' }}
            />
          </CarouselItem>
          <CarouselItem className="flex items-center justify-center">
            <Image
              src={OnBoardSlide1}
              alt="onboard"
              width={791}
              height={571}
              style={{ maxWidth: '100%', height: 'auto' }}
            />
          </CarouselItem>
          <CarouselItem className="flex items-center justify-center">
            <Image
              src={OnBoardSlide1}
              alt="onboard"
              width={791}
              height={571}
              style={{ maxWidth: '100%', height: 'auto' }}
            />
          </CarouselItem>
          <CarouselItem className="flex items-center justify-center">
            <Image
              src={OnBoardSlide1}
              alt="onboard"
              width={791}
              height={571}
              style={{ maxWidth: '100%', height: 'auto' }}
            />
          </CarouselItem>
        </CarouselSlides>
        <CarouselControl className="flex items-center justify-center py-8">
          <CarouselIndicators dotButtonStyle="data-[active=true]:bg-primary-500 data-[active=false]:bg-metal-200 border-0" />
        </CarouselControl>
      </Carousel>
    </div>
  )
}

export default OnboardCarousel
