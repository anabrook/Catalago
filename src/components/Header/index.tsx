import {
  Box,
  Button,
  ButtonGroup,
  Container,
  Divider,
  Flex,
  Heading,
  Icon,
  IconButton,
  Text,
  border,
  useColorModeValue,
} from "@chakra-ui/react";

import ArrowRight from "components/Elements/Icon/ArrowRight";
import Image from "next/image";
import Link from "next/link";
import React from "react";

// import { Container } from './styles';

const Header: React.FC = () => {
  return (
    <Box mb={5}>
      <Flex
        flexDir={{ base: "column", md: "row" }}
        alignItems={"center"}
        justifyContent={"center"}
        bgColor={"#242424"}
        width={"100%"}
        p={5}
        gap={"18px"}
      >
        <Text color={"white"} gap={2}>
          Não limite sua criatividade, junte-se a familia Blocks por apenas
          &nbsp;
          <b>BRL 19,99</b>
        </Text>
        <ButtonGroup>
          <Button
            bgGradient="linear(to-l, #D835c5, #A11cf3)"
            width={"243px"}
            height={"43px"}
            color={"white"}
            padding={"8px 24px"}
            style={{ gap: "10px" }}
            _hover={{ outlineColor: "#D835c5", background: "#D835c5" }}
          >
            <Link href="https://verify.blocksrvt.com/?payment=price_1Kgdw7FKB2CW5kS5I3ydvAVY&locale=pt">
              <Text>Quero ser Premium</Text>
            </Link>
            <Divider
              orientation="vertical"
              height={"24px"}
              borderColor="white"
            />
            <Icon aria-label="Add to friends" as={ArrowRight} />
          </Button>
        </ButtonGroup>
      </Flex>
      <Flex
        height={100}
        justify={"center"}
        borderBottomColor={"#A11CF3 !important"}
        borderBottom={1}
        borderBottomStyle={"solid"}
      >
        <Image src={"/Img/logo.svg"} alt={""} width={146} height={30} />
      </Flex>
      <Flex
        boxShadow={"0px 2px 4px rgba(0, 0, 0, 0.15)"}
        padding={5}
        pl={10}
        pr={10}
        flexDir={"column"}
      >
        <Heading size={"lg"}>Catálogo</Heading>
        <hr
          style={{
            background: "linear-gradient(to left, #D835c5, #A11cf3)",
            height: 3,
            width: "10vw",
            borderRadius: 10,
          }}
        />
      </Flex>
    </Box>
  );
};

export default Header;
