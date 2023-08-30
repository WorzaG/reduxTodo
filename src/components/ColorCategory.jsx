import React from "react";
import { Button } from '@chakra-ui/react'


export default function ColorCategory({color , setColor}) {
  return (
    <>
      <Button w={10} h={10} borderRadius={"full"} bgColor={"green"} m={2} onClick={()=>{setColor("green")}}></Button>
      <Button w={10} h={10} borderRadius={"full"} bgColor={"blue"} m={2}  onClick={()=>{setColor("blue")}}></Button>
      <Button w={10} h={10} borderRadius={"full"} bgColor={"red"} m={2}  onClick={()=>{setColor("red")}}></Button>
      <Button w={10} h={10} borderRadius={"full"} bgColor={"purple"} m={2}  onClick={()=>{setColor("purple")}}></Button>
      <Button w={10} h={10} borderRadius={"full"} bgColor={"yellow"} m={2}  onClick={()=>{setColor("yellow")}}></Button>
    </>
  );
}
