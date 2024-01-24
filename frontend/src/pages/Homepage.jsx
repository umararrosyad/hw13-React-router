import { VStack, Image,Text, Flex, SimpleGrid, HStack } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import Books from "../components/Books";
import Dasboard from "../components/Dashboard";
import { getAllBooks } from "../modules/fetch";
import img from "../assets/img-dashboard.png";

export default function Homepage() {

  return (
    <VStack>
      <Dasboard></Dasboard>
    </VStack>
  );
}
