import {
  Button,
  Flex,
  HStack,
  Icon,
  Image,
  Stack,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { Customecard } from "../../../Chakra/Customecard";
import { BsArrowUpRight, BsPlusCircleFill } from "react-icons/bs";
import { LuMinusCircle } from "react-icons/lu";

const PriceSection = () => {
  const Timetags = [
    "6 : 15 PM",
    "7 : 55 PM",
    "8 : 55 PM",
    "9 : 55 PM",
    "10 : 55 PM",
  ];

  return (
    <Customecard>
      <Flex justify={"space-between"} align={"start"}>
        <Stack>
          <HStack color="black.80">
            <Text fontSize={"xs"}>Wallet Balances</Text>
          </HStack>
          <HStack
            spacing={"4"}
            align={{
              base: "flex-start",
              xl: "center",
            }}
            flexDir={{
              base: "column",
              sm: "row",
            }}
          >
            <HStack>
              <Text textStyle={"h4"} fontWeight={"medium"}>
                26,670.25
              </Text>
              <HStack fontWeight={"bold"} color={"green.500"}>
                <Icon as={BsArrowUpRight} />
                <Text fontSize={"sm"} fontWeight={"medium"}>
                  22%
                </Text>
              </HStack>
            </HStack>
          </HStack>
        </Stack>
        <HStack>
          <Button leftIcon={<Icon as={BsPlusCircleFill} />}>BUY</Button>
          <Button leftIcon={<Icon as={LuMinusCircle} />}>Sell</Button>
        </HStack>
      </Flex>

      <Tabs variant="soft-rounded" mt={"5"}>
        <Flex justify={"flex-end"}>
          <TabList bg={"black.5"}>
            {["1H", "1D", "1W", "1M"].map((tab) => (
              <Tab _selected={{ color: "black", bg: "White" }} fontSize={"sm"}>
                {tab}
              </Tab>
            ))}
            {/* 
            <Tab fontSize={"sm"}>1H</Tab>
            <Tab fontSize={"sm"}>1D</Tab>
            <Tab fontSize={"sm"}>1W</Tab>
            <Tab fontSize={"sm"}>1M</Tab> */}
          </TabList>
        </Flex>
        <TabPanels>
          <TabPanel>
            <Image w={"100%"} src="/graph.svg" mt={"10px"} />
            <HStack justify={"space-between"} mt={"20px"}>
              {Timetags.map((Time) => (
                <Text key={Time} fontSize={"sm"} color={"black.80"}>
                  {Time}
                </Text>
              ))}
            </HStack>
          </TabPanel>
          <TabPanel>
            <p>two!</p>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Customecard>
  );
};

export default PriceSection;
