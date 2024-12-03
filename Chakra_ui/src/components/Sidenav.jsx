import React from "react";
import { Box, Heading, HStack, Icon, Stack, Text } from "@chakra-ui/react";
import { RxDashboard } from "react-icons/rx";
import { TbArrowsExchange2 } from "react-icons/tb";
import { BiSupport } from "react-icons/bi";

const Sidenav = () => {
  const navlinks = [
    {
      icon: RxDashboard,
      text: "Dashboard",
      link: "/",
    },
    {
      icon: TbArrowsExchange2,
      text: "Transactions",
      link: "/transactions",
    },
  ];

  return (
    <>
      <Stack
        bg={"#fff"}
        boxShadow={{
          base: "none",
          lg: "lg",
        }}
        w={{
          base: "full",
          lg: "256px",
        }}
        h={"100vh"}
        justify={"space-between"}
      >
        <Box>
          <Heading as={"h1"} textAlign={"center"} fontSize={"20PX"} pt={"56px"}>
            @AKWHITHCODING
          </Heading>
          <Box mt={"6"} mx={"3"}>
            {navlinks.map((nav) => (
              <HStack
                key={nav.text}
                borderRadius={"10px"}
                py={"3"}
                px={"4"}
                _hover={{
                  bg: "#F3F3F7",
                  color: "#171717",
                }}
                color={"#797e82"}
              >
                <Icon as={nav.icon} />
                <Text fontSize={"14px"} fontWeight={"medium"}>
                  {" "}
                  {nav.text}{" "}
                </Text>
              </HStack>
            ))}
          </Box>
        </Box>

        <Box mt={"6"} mx={"3"} mb={"6"}>
          <HStack
            borderRadius={"10px"}
            py={"3"}
            px={"4"}
            _hover={{
              bg: "#F3F3F7",
              color: "#171717",
            }}
            color={"#797e82"}
          >
            <Icon as={BiSupport} />
            <Text fontSize={"14px"} fontWeight={"medium"}>
              support
            </Text>
          </HStack>
        </Box>
      </Stack>
    </>
  );
};

export default Sidenav;
