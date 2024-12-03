import { Button, HStack, Icon, Stack, Tag, Text } from "@chakra-ui/react";
import React from "react";
import { MdDownload, MdOutlineInfo } from "react-icons/md";
import { PiHandWithdrawFill } from "react-icons/pi";

const Portfoliosection = () => {
  return (
    <HStack
      justify={"space-between"}
      bg={"#fff"}
      borderRadius={"xl"}
      p={"6"}
      align={{
        base: "flex-start",
        xl: "center",
      }}
      flexDir={{
        base: "column",
        xl: "row",
      }}
      spacing={{
        base: "4",
        xl: "0",
      }}
    >
      <HStack
        spacing={{
          base: "0",
          xl: "16",
        }}
        align={{
          base: "flex-start",
          xl: "center",
        }}
        flexDir={{
          base: "column",
          xl: "row",
        }}
      >
        <Stack>
          <HStack color="black.80">
            <Text fontSize={"xs"}>Total Protfolio value</Text>
            <Icon as={MdOutlineInfo}></Icon>
          </HStack>
          <Text textStyle={"h4"} fontWeight={"medium"}>
            ₹ 112,312.24
          </Text>
        </Stack>
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
                {" "}
                22.39401000
              </Text>
              <Tag colorScheme="gray">BTC</Tag>
            </HStack>
            <HStack>
              <Text textStyle={"h4"} fontWeight={"medium"}>
                {" "}
                1,300.00
              </Text>
              <Tag colorScheme="gray">INR</Tag>
            </HStack>
          </HStack>
        </Stack>
      </HStack>

      <HStack>
        <Button leftIcon={<Icon as={MdDownload} />}>Deposit</Button>
        <Button leftIcon={<Icon as={PiHandWithdrawFill} />}>Withdraw</Button>
      </HStack>
    </HStack>
  );
};

export default Portfoliosection;
