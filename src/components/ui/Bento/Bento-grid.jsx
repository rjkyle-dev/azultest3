/* eslint-disable no-unused-vars */
import React from "react";
import { BentoGrid, BentoGridItem } from "../../../components/ui/Bento/Bento-grid-components";
import { IconClipboardCopy, IconFileBroken } from "@tabler/icons-react";
import { cn } from "../../../lib/bento";

export default function App() {
  const items = [
    {
      title: "Example Item 1",
      description: "This is a description for item 1.",
      header: (
        <div className="h-24 bg-gray-200 dark:bg-neutral-800 rounded"></div>
      ),
      icon: (
        <IconClipboardCopy className="h-6 w-6 text-neutral-500 dark:text-neutral-400" />
      ),
    },
    {
      title: "Example Item 2",
      description: "This is a description for item 2.",
      header: (
        <div className="h-24 bg-gray-200 dark:bg-neutral-800 rounded"></div>
      ),
      icon: (
        <IconFileBroken className="h-6 w-6 text-neutral-500 dark:text-neutral-400" />
      ),
    },
  ];

  return (
    <div className="py-12">
      <h1 className="text-2xl md:text-4xl font-bold text-center mb-8 dark:text-white">
        Bento Grid Example
      </h1>
      <BentoGrid>
        {items.map((item, index) => (
          <BentoGridItem
            key={index}
            title={item.title}
            description={item.description}
            header={item.header}
            icon={item.icon}
          />
        ))}
      </BentoGrid>
    </div>
  );
}
