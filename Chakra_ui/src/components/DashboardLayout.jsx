import { Box, Container, Flex, useDisclosure } from "@chakra-ui/react";
import React from "react";
import Sidenav from "./Sidenav";
import Topnav from "./Topnav";
import Sidedrower from "./Sidedrower";

const DashboardLayout = ({ title, children }) => {
  const { isOpen, onClose, onOpen } = useDisclosure();

  return (
    <Flex>
      <Box
        display={{
          base: "none",
          lg: "flex",
        }}
      >
        <Sidenav />
      </Box>
      <Sidedrower isOpen={isOpen} onClose={onClose} />
      <Box flexGrow={"1"}>
        <Topnav onOpen={onOpen} title={title} />
        <Container
          mt={"6"}
          maxW={{
            base: "760px",
            xl: "960px",
          }}
          mx={"auto"}
          px={"4"}
        >
          {children}
        </Container>
      </Box>
    </Flex>
  );
};

export default DashboardLayout;
