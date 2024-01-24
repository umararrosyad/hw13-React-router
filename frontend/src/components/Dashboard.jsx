import { Card, Heading, InputGroup, Center, Input, Image, Spacer, Text, VStack, Flex, HStack, Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { ArrowRightIcon } from "@chakra-ui/icons";
import img from "../assets/img-dashboard.png";

export default function Dasboard() {
  return (
    <>
      <Flex m={5} justify="center">
        <Image htmlWidth={"450px"} ms={20} src={img} />
        <Spacer />
        <Center m={10}>
          <VStack>
            <Text as={"h1"} mt={"-10"} my={5} fontFamily="cursive" textAlign={"center"}>
              Explore the Wonders of Literature with BookStore
            </Text>
            <Link to="/explore">
              <Button rightIcon={<ArrowRightIcon />} colorScheme="teal" variant="solid">
                Explore
              </Button>
            </Link>
          </VStack>
        </Center>
      </Flex>
    </>
  );
}
