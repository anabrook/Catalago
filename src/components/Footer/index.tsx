import { Box, Flex, Text } from "@chakra-ui/react";

import Link from "next/link";
import React from "react";

// import { Container } from './styles';

const Footer: React.FC = () => {
  return (
    <Flex
      flexDir={"row"}
      backgroundColor={"#E9E9E9"}
      gap={10}
      justifyContent={"center"}
      p={5}
      color={"#322E2E"}
    >
      <Link href={"https://www.blocksrvt.com/pt/sobre"}>
        <Text>Sobre</Text>
      </Link>
      <Link href={"https://faq.blocksrvt.com/pt-BR/"}>
        <Text>FAQ</Text>
      </Link>
      <Link href={"https://www.blocksrvt.com/pt/termos-de-uso"}>
        <Text>Termos de uso</Text>
      </Link>
      <Link href={"https://www.blocksrvt.com/pt/politica-de-privacidade"}>
        <Text>Política de privacidade</Text>
      </Link>
    </Flex>
  );
};

export default Footer;
