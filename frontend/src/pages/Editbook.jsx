import { Box, HStack, VStack , Image, Text} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import BookForm from "../components/BookForm";
import { getBookDetailById } from "../modules/fetch";
import img from "../assets/register.png";

export default function EditBookPage() {
  const { id } = useParams();
  const [book, setBook] = useState(null);

  useEffect(() => {
    const fetchBook = async () => {
      try {
        const response = await getBookDetailById(id);
        setBook(response.book);
      } catch (e) {
        console.log(e);
      }
    };
    fetchBook();
  }, [id]);

  return (
    <VStack w="full" p={5}>
      <Box w="100%">
        <Box borderWidth="2px" borderRadius="lg"  mx={'5'} p={4} borderColor={"blackAlpha.600"}>
          <BookForm bookData={book} />
        </Box>
      </Box>
    </VStack>
  );
}
