import React from "react";
import Features from "@/components/templates/index/Features";
import Gallery from "@/components/templates/index/Gallery.js";
import Homes from "@/components/templates/index/Homes";
import Story from "@/components/templates/index/Story";


export default function Home() {

  return (
    <>
      <Features />
      <Story />
      <Homes />
      <Gallery />
    </>
  )
}
