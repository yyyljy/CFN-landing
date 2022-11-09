import {
  Box,
  chakra,
  Flex,
  SimpleGrid,
  Stat,
  StatLabel,
  StatNumber,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";

import { BsPerson } from "react-icons/bs";
import { FiServer } from "react-icons/fi";
import { GoLocation } from "react-icons/go";

function StatsCard(props) {
  const { title, stat, icon } = props;
  return (
    <Stat
      px={{ base: 2, md: 4 }}
      py={"5"}
      shadow={"xl"}
      border={"3px solid"}
      borderColor={useColorModeValue("pink.400", "pink.300")}
      rounded={"lg"}
    >
      <Flex justifyContent={"space-between"}>
        <Box pl={{ base: 2, md: 4 }}>
          <StatLabel fontWeight={"medium"} isTruncated>
            {title}
          </StatLabel>
          <StatNumber fontSize={"2xl"} fontWeight={"medium"}>
            {stat}
          </StatNumber>
        </Box>
        <Box
          my={"auto"}
          color={useColorModeValue("gray.800", "gray.200")}
          alignContent={"center"}
        >
          {icon}
        </Box>
      </Flex>
    </Stat>
  );
}

export default function BasicStatistics() {
  return (
    <Flex
      direction={"column"}
      px={{ base: 2, sm: 12, md: 17 }}
      justify={"center"}
      align={"center"}
      h={"100vh"}
      pos={"relative"}
    >
      <Box
        w={"25%"}
        h={"25%"}
        bgGradient={"linear(to-r,#829123,#129439)"}
        pos={"absolute"}
        zIndex={-3}
        filter={"blur(100px)"}
      ></Box>
      <chakra.h1
        textAlign={"center"}
        fontSize={"4xl"}
        py={10}
        fontWeight={"bold"}
      >
        <Text
          bgGradient={"linear(to-r, #7928CA, #FF0080)"}
          bgClip={"text"}
          as={"span"}
        >
          비담
        </Text>
        과 함께라면
      </chakra.h1>
      <SimpleGrid columns={{ base: 1, md: 3 }} spacing={{ base: 5, lg: 8 }}>
        <StatsCard
          title={"심리적 안정감"}
          stat={"상승"}
          icon={<BsPerson size={"3em"} />}
        />
        <StatsCard
          title={"관리해야할 계정"}
          stat={"1"}
          icon={<FiServer size={"3em"} />}
        />
        <StatsCard
          title={"보상으로 제공하는 NFT"}
          stat={"7"}
          icon={<GoLocation size={"3em"} />}
        />
      </SimpleGrid>
    </Flex>
  );
}
