import {
  Box,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Divider,
  Flex,
  Heading,
  Icon,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";

import ArrowUpRight from "components/Elements/Icon/ArrowUpRight";
import Header from "components/Header";
import Image from "next/image";
import { trunkText } from "functions/trunkText";
import { useGetData } from "services/useGetData";

export default function Home() {
  const { data, isLoading } = useGetData();

  console.log(data);

  return (
    <Box p={10} pt={3}>
      <Heading size={"md"} mb={2} gap={2}>
        Resultados
      </Heading>
      {/* <Flex
        flexDir={"row"}
        flexWrap={"wrap"}
        flex={1}
        justifyContent={"space-evenly"}
        alignItems={"center"}
        gap={5}
      > */}
      <Box display={"grid"}>
        <SimpleGrid minChildWidth={"200px"} spacing={"15px"}>
          {data?.map((e) => (
            <Card
              key={e.id}
              width={"30vw"}
              minW={"180px"}
              boxShadow={"none"}
              border={"solid"}
              borderWidth={1}
              borderColor={"gray.300"}
              minH={"250px"}
              maxW={"200px"}
            >
              <CardBody>
                <Image
                  src={"/Img/abajur.jpeg"}
                  width={200}
                  height={150}
                  alt={e.details.name}
                />
              </CardBody>
              <CardFooter
                display={"flex"}
                p={2}
                backgroundColor={"#F8F8F8"}
                borderBottomRadius={10}
              >
                <Flex flexDir={"row"} flex={1}>
                  <Flex flexDir={"column"}>
                    <Text fontSize={"sm"}>{trunkText(e.details.name, 15)}</Text>
                    <Text fontSize={"xs"}>
                      {trunkText(e.details.description, 15)}
                    </Text>
                  </Flex>
                  <Flex
                    justifySelf={"flex-end"}
                    flexDir={"row"}
                    alignItems={"center"}
                    justifyContent={"flex-end"}
                    style={{ fontSize: 20 }}
                    flex={1}
                    width={"100%"}
                  >
                    <Divider orientation="vertical" />
                    <Icon as={ArrowUpRight} />
                  </Flex>
                </Flex>
              </CardFooter>
            </Card>
          ))}
        </SimpleGrid>
      </Box>
    </Box>
  );
}
