import React from "react";
import {
  Box,
  Heading,
  HStack,
  Icon,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  useDisclosure,
} from "@chakra-ui/react";
import { LuUserCircle } from "react-icons/lu";
import { FaBarsStaggered } from "react-icons/fa6";

const Topnav = ({ title, onOpen }) => {
  return (
    <Box px={"4"} bg={"#fff"}>
      <HStack maxW={"960px"} mx={"auto"} h={"64px"} justify={"space-between"}>
        <Icon
          onClick={onOpen}
          as={FaBarsStaggered}
          display={{
            base: "block",
            lg: "none",
          }}
        />

        <Heading fontSize={"28px"} fontWeight={"medium"}>
          {title}
        </Heading>
        <Menu>
          <MenuButton>
            <Icon as={LuUserCircle} fontSize={"24px"} />
          </MenuButton>
          <MenuList>
            <MenuItem>Logout</MenuItem>
            <MenuItem>Support</MenuItem>
          </MenuList>
        </Menu>
      </HStack>
    </Box>
  );
};

export default Topnav;
