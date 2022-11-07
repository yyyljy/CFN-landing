import "@fontsource/koho";
import "@fontsource/nanum-pen-script";
import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  styles: {
    global: {
      body: {
        backgroundColor: "orange.300",
      },
    },
  },
  fonts: {
    body: `"ChosunCentennial", sans-serif`,
    heading: `"ChosunCentennial", sans-serif`,
  },
});

export default theme;
