/* eslint-disable no-unused-vars */
"use client";

import React from "react";
import Landing from "../../assets/image/Landing.png";
import { CardBody, CardContainer, CardItem } from "./3d-card";

export function ThreeDCardDemo() {
  return (
    <CardContainer className="inter-var">
      <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-full sm:w-[30rem] md:w-[40rem] lg:w-[50rem] h-auto rounded-xl p-4 sm:p-6 border">
        <CardItem
          translateZ="50"
          className="text-lg sm:text-xl font-bold text-neutral-600 dark:text-white">
          Make things float in air
        </CardItem>
        <CardItem
          as="p"
          translateZ="60"
          className="text-neutral-500 text-sm sm:text-base max-w-sm mt-2 dark:text-neutral-300">
          Hover over this card to unleash the power of CSS perspective
        </CardItem>
        <CardItem translateZ="100" className="w-full mt-4">
          <img
            src={Landing}
            height="1000"
            width="1000"
            className="h-auto w-full object-cover rounded-xl group-hover/card:shadow-xl"
            alt="thumbnail"
          />
        </CardItem>
        <div className="flex flex-col sm:flex-row justify-between items-center mt-10 sm:mt-20 gap-4">
          <a href="https://www.figma.com/design/lW68BqGDfaTSLfEJMtCQV6/Entrep-Prototype?node-id=0-1&t=6dcdfDWAzp58Nhjc-1">
            <CardItem
              translateZ={20}
              as="a"
              href="https://www.figma.com/design/lW68BqGDfaTSLfEJMtCQV6/Entrep-Prototype?node-id=0-1&t=6dcdfDWAzp58Nhjc-1"
              target="__blank"
              className="px-4 py-2 rounded-xl text-xs sm:text-sm font-normal dark:text-white">
              Explore It →
            </CardItem>
          </a>
          {/* <CardItem
            translateZ={20}
            as="button"
            className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs sm:text-sm font-bold">
            Sign up
          </CardItem> */}
        </div>
      </CardBody>
    </CardContainer>
  );
}

export default ThreeDCardDemo;
