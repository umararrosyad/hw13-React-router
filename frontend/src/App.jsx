import { VStack, HStack } from "@chakra-ui/react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import BookDetails from "./pages/BooksDetail";
import EditBookPage from "./pages/Editbook";
import Homepage from "./pages/Homepage";
import NewBookPage from "./pages/NewBooks";
import Register from "./pages/Register";
import Explore from "./pages/explore";

function App() {
  return (
    <VStack minH="100vh" minW="100vw" bg={'white'}>
      <Router>
        <Navbar />
        <Routes>
          <Route path={"/"} element={<Homepage />} />
          <Route path={"/register"} element={<Register />} />
          <Route path={"/newbook"} element={<NewBookPage />} />
          <Route path={"/books/:id"} element={<BookDetails />} />
          <Route path={"/editbook/:id"} element={<EditBookPage />} />
          <Route path={"/explore"} element={<Explore />} />

        </Routes>
      </Router>
    </VStack>
  );
}

export default App;
