import {
  Flex,
  Container,
  Heading,
  Stack,
  Text,
  Button,
  Icon,
  Img,
  Box,
} from "@chakra-ui/react";

export default function CallToActionWithIllustration() {
  return (
    <Container maxW={"5xl"}>
      <Stack
        textAlign={"center"}
        align={"center"}
        spacing={{ base: 8, md: 10 }}
        py={{ base: 20, md: 28 }}
      >
        <Heading
          fontWeight={600}
          fontSize={{ base: "3xl", sm: "4xl", md: "6xl" }}
          lineHeight={"110%"}
        >
          <Text as={"span"} color={"pink.400"}>
            영화
          </Text>
          와&nbsp;
          <Text as={"span"} color={"green.400"}>
            프로필
          </Text>
          을&nbsp;
          <br />
          <Text as={"span"} color={"orange.400"}>
            CFN
          </Text>
          과 만들어요
        </Heading>

        <Stack spacing={6} direction={"row"}></Stack>
        <Flex w={"full"} align={"center"} justify={"center"} pos={"relative"}>
          <Img src="https://cdn-icons-png.flaticon.com/512/7992/7992207.png" />
          <Img
            src="https://cdn-icons-png.flaticon.com/512/1101/1101762.png"
            w={200}
            h={200}
            pos={"absolute"}
            ml={138}
            mt={135}
          />
          <Box
            mt={150}
            w={600}
            h={500}
            bgGradient="linear(to-r, #FBAB7E, #F7CE68)"
            rounded={"full"}
            pos={"absolute"}
            zIndex={-3}
            filter={"blur(20px)"}
          ></Box>
        </Flex>
      </Stack>
    </Container>
  );
}
