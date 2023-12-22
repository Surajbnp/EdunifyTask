import {
  Box,
  Flex,
  Avatar,
  HStack,
  IconButton,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  Stack,
  Text,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import { NavLink } from "react-router-dom";
import {
  AiOutlineHome,
  AiOutlineShoppingCart,
  AiOutlineUser,
} from "react-icons/ai";
import { BiShoppingBag } from "react-icons/bi";

export default function Navbar() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Box
        bg={"transparent"}
        px={4}
        width="100%"
        top={0}
        left={0}
        fontFamily="'Roboto', sans-serif"
        p={"0px 30px"}
      >
        <Flex
          h={16}
          alignItems={"center"}
          justifyContent={"space-between"}
          flexDir={{ base: "row-reverse", md: "row" }}
        >
          <IconButton
            size={"md"}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={"Open Menu"}
            display={{ md: "none" }}
            onClick={isOpen ? onClose : onOpen}
          />
          <Flex justifyContent={"space-between"} width={"100%"}>
            <Box width={'100px'}>
              <img
                src="https://images.crunchbase.com/image/upload/c_lpad,f_auto,q_auto:eco,dpr_1/n5utdnhl4w029ecyhsjn"
                alt="logo"
              />
            </Box>
            <HStack
              as={"nav"}
              spacing={4}
              display={{ base: "none", md: "flex" }}
              gap={10}
              fontFamily={"'Roboto', sans-serif"}
              color={{ base: "black", md: "white" }}
            >
              <NavLink to={"/"}>{"All School"}</NavLink>
              <NavLink to={"/addschool"}>{"Add School"}</NavLink>
            </HStack>
          </Flex>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: "none" }}>
            <Stack as={"nav"} spacing={4} onClick={isOpen ? onClose : onOpen}>
              <Flex alignItems={"center"} gap={2}>
                <AiOutlineHome />
                <NavLink to={"/"}>{"All School"}</NavLink>
              </Flex>
              <Flex alignItems={"center"} gap={2}>
                <BiShoppingBag />
                <NavLink to={"/addschool"}>{"Add School"}</NavLink>
              </Flex>
            </Stack>
          </Box>
        ) : null}
      </Box>

      {/* <Box p={4}>Main Content Here</Box> */}
      {/* compiling with mern stack and recat js
       */}
    </>
  );
}
