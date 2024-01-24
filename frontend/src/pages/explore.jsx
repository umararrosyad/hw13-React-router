import { VStack, Image, Text, Flex, SimpleGrid, HStack } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import Books from "../components/Books";
import Dasboard from "../components/Dashboard";
import { getAllBooks } from "../modules/fetch";
import img from "../assets/empty.png";

export default function Explore() {
  const [books, setBooks] = useState([]);
  useEffect(() => {
    const fetchBooks = async () => {
      const books = await getAllBooks();
      setBooks(books);
      console.log(books.books)
    };
    fetchBooks();
  }, []);

  return (
    <VStack w={"100%"}>
      <Text fontSize="5xl" fontFamily="cursive" mt={"4"} fontWeight="bold">
        {books?.books?.length == 0 ? "there are no books now" : "list of Book"}
      </Text>
      {books?.books?.length == 0 && <Image htmlWidth={"450px"} ms={20} src={img} />}
      <Flex alignItems="center" justifyContent="center" w="full" flexWrap="wrap" gap="5">
        {books?.books?.map((book) => (
          <Books key={`${book.id} ${book.title}`} {...book} w="100%" />
        ))}
      </Flex>
    </VStack>
  );
}
