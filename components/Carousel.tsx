'use client'
import { A11y, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from "swiper/react";

import { Box, Button, ButtonProps, Text, VStack } from '@chakra-ui/react';
import { ArrowLeftIcon, ArrowRightIcon } from '@heroicons/react/24/solid';
import 'swiper/css';
import 'swiper/css/navigation';

export interface ICarouselItem {
  id: any
  title: string
  undertitle: string
  imageUrl: string
}

interface ICarousel {
  items?: ICarouselItem[]
}

const CarouselItem = ({ imageUrl, id, title, undertitle }: ICarouselItem) => {

  return <Box
    bgImage={imageUrl}
    backgroundSize={"cover"}
    backgroundPosition={"center"} h="155"
    borderRadius={"12px"}
  >
    <VStack gap="0px" justifyContent={"flex-end"} h="100%" alignItems={"flex-start"} p="4">
      <Text noOfLines={1} fontWeight={"semibold"} fontSize={"16px"} color="white.900">{title}</Text>
      <Text noOfLines={1} fontWeight={"semibold"} fontSize={"10px"} color="white.900">{undertitle}</Text>
    </VStack>
  </Box>
}

/**
  position: absolute;
  top: var(--swiper-navigation-top-offset, 50%);
  width: calc(var(--swiper-navigation-size) / 44 * 27);
  height: var(--swiper-navigation-size);
  margin-top: calc(0px - (var(--swiper-navigation-size) / 2));
  z-index: 10;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  right: var(--swiper-navigation-sides-offset, 10px);
  left: auto;
 */

const buttonStyles: ButtonProps = {
  position: "absolute",
  top: "var(--swiper-navigation-top-offset, 50%)",
  width: "40px", //"calc(var(--swiper-navigation-size) / 44 * 27)",
  height: "40px", //"var(--swiper-navigation-size)",
  marginTop: "calc(0px - (var(--swiper-navigation-size) / 2))",
  zIndex: 10,
  cursor: "pointer",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  borderRadius: "40px",
  _hover: {
    bgColor: "black.900"
  },
  _light: {
    bgColor: "black.900",
    color: "white.900",
  },
  _dark: {
    bgColor: "white.900",
    color: "black.900",
  },
  _disabled: { display: "none" }
}

const rightButtonStyle: ButtonProps = {
  ...buttonStyles,
  right: "var(--swiper-navigation-sides-offset, 10px)",
  left: "auto",
}

const leftButtonStyle: ButtonProps = {
  ...buttonStyles,
  right: "auto",
  left: "var(--swiper-navigation-sides-offset, 10px)",
}

export const Carousel = ({ items }: ICarousel) => {

  return <Swiper
    modules={[Navigation, A11y]}
    spaceBetween={16}
    style={{ paddingRight: "var(--chakra-space-8)" }}
    slidesPerView={4.5}
    navigation={true ? { prevEl: ".arrow-left", nextEl: ".arrow-right" } : true}
    breakpoints={{
      600: {
        slidesPerView: 3
      },
      400: {
        slidesPerView: 2
      },
      1000: {
        slidesPerView: 4.5
      }
    }}
    onSwiper={(swiper) => console.log(swiper)}
    onSlideChange={() => console.log('slide change')}
  >
    {items?.map(v => <SwiperSlide key={v.id}><CarouselItem {...v} /></SwiperSlide>)}

    <Button {...leftButtonStyle} className='arrow-left arrow'>
      <ArrowLeftIcon width={"18px"} height={"18px"} />
    </Button>
    <Button {...rightButtonStyle} className='arrow-right arrow'>
      <ArrowRightIcon width={"18px"} height={"18px"} />
    </Button>
  </Swiper>
}