import {
  Box,
  Flex,
  HStack,
  IconButton,
  useDisclosure,
  useColorModeValue,
  Stack,
  Image,

} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import NavLink from "./nav-link";
import Footer from "./footer";
import WalletData from "./wallet-data";
// import { useWeb3React } from "@web3-react/core";

const Links = [
  {
    name: "Home",
    to: "/",
  },
  {
    name: "Projects",
    to: "/projects",
  },
  {
    name: "Abilities",
    to: "/abilities",
  },
];

const MainLayout = ({ children }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  // const { active } = useWeb3React();

  return (
    <Flex minH="100vh" direction="column" >
      <Box
        mx="auto"
        width="100%"
        bg={"#A8A4CE"}
        px={4}
      >
        <Flex
          color={useColorModeValue("gray.700", "white")}
          minH={"70px"}
          py={{ base: 2 }}
          px={{ base: 4 }}
          width="100%"
          borderStyle={"solid"}
          borderColor={useColorModeValue("gray.200", "gray.900")}
          alignItems={"center"}
          justifyContent={"space-between"}
        >
          <IconButton
            size={"md"}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={"Open Menu"}
            display={{ md: "none" }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack  alignItems={"center"}>
            <Flex alignItems="center">
            <Image
                    alt="logo"
                    src="https://github.com/sandragcarrillo/iTrained-dapp/blob/main/src/logo.png?raw=true" //cambiar url
                    width="200px"
                    objectFit="cover"
                    ></Image>
            </Flex>

            
          </HStack>

          <HStack
              as={"nav"}
              spacing={4}
              display={{ base: "none", md: "flex" }}
            >
              {Links.map(({ name, to }) => (
                <NavLink key={name} to={to}>
                  {name}
                </NavLink>
              ))}
            </HStack>
          <WalletData />
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: "none" }}>
              <Stack as={"nav"} spacing={4}>
              {Links.map(({ name, to }) => (
                <NavLink key={name} to={to}>
                  {name}
                </NavLink>
              ))}
            </Stack>

          
          </Box>
        ) : null}
      </Box>
      <Box mx="auto" flex={1} p={4} maxW={"7xl"} width="100%">
        {children}
      </Box>
      <Footer />
    </Flex>
  );
};

export default MainLayout;
