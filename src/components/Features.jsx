import {
  Container,
  SimpleGrid,
  Image,
  Flex,
  Heading,
  Text,
  Stack,
  StackDivider,
  Icon,
  useColorModeValue,
  Box,
} from "@chakra-ui/react";
import { IoLogoBitcoin, IoWalletSharp, IoJournalSharp } from "react-icons/io5";
import securityImage from "@assets/security.png";
import profileImage from "@assets/profile.png";

const Feature = ({ text, icon, iconBg }) => {
  return (
    <Stack direction={"row"} align={"center"}>
      <Flex
        w={8}
        h={8}
        align={"center"}
        justify={"center"}
        rounded={"full"}
        bg={iconBg}
      >
        {icon}
      </Flex>
      <Text fontWeight={600}>{text}</Text>
    </Stack>
  );
};

export default function SplitWithImage() {
  return (
    <Flex
      justify={"center"}
      py={12}
      px={{ base: "20px", sm: "30px", lg: "50px" }}
      h={"100vh"}
      align={"center"}
    >
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
        <Stack spacing={4}>
          <Text
            textTransform={"uppercase"}
            color={"white"}
            fontWeight={600}
            fontSize={"lg"}
            bg={useColorModeValue("orange.300", "pink.600")}
            p={2}
            alignSelf={"flex-start"}
            rounded={"md"}
          >
            CFN과 함께라면
          </Text>
          <Heading>
            영상이 담긴 프로필을 <br />
            포트폴리오로 활용할 수 있습니다.
          </Heading>
          <Text color={"gray.500"} fontSize={"lg"}>
            사진과 글만 담긴 프로필은 `나`를 표현하기 어렵습니다.
          </Text>
          <Stack
            spacing={4}
            divider={
              <StackDivider
                borderColor={useColorModeValue("gray.100", "gray.700")}
              />
            }
          >
            <Feature
              icon={
                <Icon as={IoWalletSharp} color={"purple.500"} w={5} h={5} />
              }
              iconBg={useColorModeValue("yellow.100", "yellow.900")}
              text={"사진과 영상 업로드만으로 템플릿 형태의 포트폴리오 제작"}
            />
            <Feature
              icon={<Icon as={IoLogoBitcoin} color={"green.500"} w={5} h={5} />}
              iconBg={useColorModeValue("green.100", "green.900")}
              text={"영상과 사진이 담긴 프로필"}
            />
            <Feature
              icon={
                <Icon as={IoJournalSharp} color={"purple.500"} w={5} h={5} />
              }
              iconBg={useColorModeValue("purple.100", "purple.900")}
              text={"공유와 열람의 제한이 없는 웹페이지 형태의 포트폴리오"}
            />
          </Stack>
        </Stack>
        <Flex>
          <Image alt={"feature image"} src={profileImage} objectFit={"cover"} />
        </Flex>
      </SimpleGrid>
    </Flex>
  );
}
