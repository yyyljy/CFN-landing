import { ChakraProvider } from "@chakra-ui/react";
import Hero from "@components/Hero";
import NavBar from "@components/NavBar";
import Features from "@components/Features";
import Statistics from "@components/Statistics";
import Statistics2 from "@components/Statistics2";
import HeroTwo from "@components/HeroTwo";
import Footer from "@components/Footer";
import ThreeTierPricing from "@components/Pricing";
import theme from "./theme";
import Fonts from "./Fonts";

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Fonts />
      <NavBar />
      <Hero />
      <Statistics />
      <Features />
      <HeroTwo />
      <Statistics2 />
      {/* <ThreeTierPricing /> */}
      <Footer />
    </ChakraProvider>
  );
}

export default App;
