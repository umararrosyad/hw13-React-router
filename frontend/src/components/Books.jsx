import { Card, Button, Heading, Image, Text, VStack } from "@chakra-ui/react";
import { Link, useNavigate } from "react-router-dom";

export default function Books({ id, title, author, image, publisher, year }) {
  const navigate = useNavigate();
  return (
    <Card w={"17%"} key={id} my={4} p={4} cursor="pointer" boxShadow="lg" border="1px solid #e2e8f0">
      <VStack>
        <Image  h={24} src={`http://localhost:8000/${image}`} />
        <Heading size={"md"}>
          {title} ({year})
        </Heading>
        <Text>
          <span>Autor: </span>
          {author}
        </Text>
        <Button
          colorScheme="teal"
          w={"100%"}
          height={"8"}
          onClick={() => {
            navigate(`/books/${id}`);
          }}
        >
          detail
        </Button>
      </VStack>
    </Card>
  );
}
