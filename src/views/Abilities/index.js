import { useWeb3React } from "@web3-react/core";
import { SimpleGrid, Button, Heading, Center, Box, Image, Flex, Text, Stack} from '@chakra-ui/react'
import RequestAccess from "../../components/request-access";


const Abilities = () => {
  const { active } = useWeb3React();

  if (!active) return <RequestAccess />;

  return (
    <Stack>
    <Center padding={6} color={"#495C83"} ><Heading>Prove your abilities</Heading></Center>
    <SimpleGrid columns={1} spacing={10}>
    <Center>
   <Image src="https://github.com/sandragcarrillo/iTrained-dapp/blob/main/src/Group%2013.png?raw=true" width={"200px"} mr={"10"}></Image>
    <Flex  w='50%' h='auto' border={"solid 1px #495C83"} borderRadius={"10px"} marginTop="10px" padding={"5"} direction={{base:"column",md:"row"}}>
    <Box>
      <Heading color={"#495C83"}>Solidity</Heading>
      <Text marginTop="10px">
      Prove that you know how to build an smart contract, after three validators you will be able to mint your Proof of Knowledge NFT
      </Text>
      <Flex gap={"6"} marginTop="10px" direction={{base:"column",md:"row"}} justifyContent={"space-between"}>
      <a href=""><Button color={"white"} bg="#495C83">Upload a project</Button></a>
      </Flex>
    </Box>
    </Flex>
    </Center> 
    <Center>
   <Image src="https://github.com/sandragcarrillo/iTrained-dapp/blob/main/src/Group%2012.png?raw=true" width={"200px"} mr={"10"}></Image>
    <Flex  w='50%' h='auto' border={"solid 1px #495C83"} borderRadius={"10px"} marginTop="10px" padding={"5"} direction={{base:"column",md:"row"}}>
    <Box>
      <Heading color={"#495C83"}>React</Heading>
      <Text marginTop="10px">
      Prove that you know how to build a React app, after three validators you will be able to mint your Proof of Knowledge NFT
      </Text>
      <Flex gap={"6"} marginTop="10px" direction={{base:"column",md:"row"}} justifyContent={"space-between"}>
      <a href=""><Button bg="white" borderColor={"#495C83"} border={"1px"}>Project uploaded</Button></a>
      <Button   bg={"#FBCB0A"} border={"1px"}>1/3 validations</Button>
      </Flex>
    </Box>
    </Flex>
    </Center> 
    <Center>
   <Image src="https://github.com/sandragcarrillo/iTrained-dapp/blob/main/src/Group%2011.png?raw=true" width={"200px"} mr={"10"}></Image>
    <Flex  w='50%' h='auto' border={"solid 1px #495C83"} borderRadius={"10px"} marginTop="10px" padding={"5"} direction={{base:"column",md:"row"}}>
    <Box>
      <Heading color={"#495C83"}>English</Heading>
      <Text marginTop="10px">
      Prove that you can create a product completely in english, after three validators you will be able to mint your Proof of Knowledge NFT
      </Text>
      <Flex gap={"6"} marginTop="10px" direction={{base:"column",md:"row"}} justifyContent={"space-between"}>
      <a href=""><Button bg="white" borderColor={"#495C83"} border={"1px"}>Project uploaded</Button></a>
      <Button  color={"white"} bg={"green"} border={"1px"}>Mint your NFT</Button>
      </Flex>
    </Box>
    </Flex>
    </Center> 


    </SimpleGrid>
    </Stack>
   
  );
};

export default Abilities;