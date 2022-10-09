import { useWeb3React } from "@web3-react/core";
import { SimpleGrid, Button, Heading, Center, Box, Image, Flex, Spacer, Text, Stack} from '@chakra-ui/react'
import { Link } from "react-router-dom";
// import Loading from "../../components/loading";
import RequestAccess from "../../components/request-access";


const Projects = () => {
  const { active } = useWeb3React();

  if (!active) return <RequestAccess />;

  return (
    <Stack>
    <Center padding={6} color={"#495C83"} ><Heading>Explore projects to endorse other abilities</Heading></Center>
    <SimpleGrid columns={1} spacing={10}>
   <Center>
   <Image src="https://github.com/sandragcarrillo/iTrained-dapp/blob/main/src/projectanon.png?raw=true" width={"130px"} mr={"10"}></Image>
    <Flex  w='50%' h='auto' border={"solid 1px #495C83"} borderRadius={"10px"} marginTop="10px" padding={"5"} direction={{base:"column",md:"row"}}>
    <Box>
      <Heading color={"#495C83"}>Web app for audiobooks</Heading>
      <Text marginTop="10px">
      Project uploaded to prove React abilities
      </Text>
      <Flex gap={"6"} marginTop="10px" direction={{base:"column",md:"row"}}>
        <a href="https://github.com/sandragcarrillo/ethereal-interface#:~:text=Despliegue-,Ethereal%20dapp,-%F0%9F%92%A1"><Button >Explore the project</Button></a>
      <a href=""><Button color={"white"} bg="#495C83">Endorse this ability</Button></a>
      </Flex>
    </Box>
    </Flex>
    </Center> 
    <Center>
   <Image src="https://github.com/sandragcarrillo/iTrained-dapp/blob/main/src/projectanon.png?raw=true" width={"130px"} mr={"10"}></Image>
    <Flex  w='50%' h='auto' border={"solid 1px #495C83"} borderRadius={"10px"} marginTop="10px" padding={"5"} direction={{base:"column",md:"row"}}>
    <Box>
      <Heading color={"#495C83"}>Web app for audiobooks</Heading>
      <Text marginTop="10px">
      Project uploaded to prove React abilities
      </Text>
      <Flex gap={"6"} marginTop="10px" direction={{base:"column",md:"row"}}>
        <a href="https://github.com/sandragcarrillo/ethereal-interface#:~:text=Despliegue-,Ethereal%20dapp,-%F0%9F%92%A1"><Button >Explore the project</Button></a>
      <a href=""><Button color={"white"} bg="#495C83">Endorse this ability</Button></a>
      </Flex>
    </Box>


    </Flex>
    </Center> 
    <Center>
   <Image src="https://github.com/sandragcarrillo/iTrained-dapp/blob/main/src/projectanon.png?raw=true" width={"130px"} mr={"10"}></Image>
    <Flex  w='50%' h='auto' border={"solid 1px #495C83"} borderRadius={"10px"} marginTop="10px" padding={"5"} direction={{base:"column",md:"row"}}>
    <Box>
      <Heading color={"#495C83"}>Web app for audiobooks</Heading>
      <Text marginTop="10px">
      Project uploaded to prove React abilities
      </Text>
      <Flex gap={"6"} marginTop="10px" direction={{base:"column",md:"row"}}>
        <a href="https://github.com/sandragcarrillo/ethereal-interface#:~:text=Despliegue-,Ethereal%20dapp,-%F0%9F%92%A1"><Button >Explore the project</Button></a>
      <a href=""><Button color={"white"} bg="#495C83">Endorse this ability</Button></a>
      </Flex>
    </Box>
    

    </Flex>
    </Center> 

    <Center>
   <Image src="https://github.com/sandragcarrillo/iTrained-dapp/blob/main/src/projectanon.png?raw=true" width={"130px"} mr={"10"}></Image>
    <Flex  w='50%' h='auto' border={"solid 1px #495C83"} borderRadius={"10px"} marginTop="10px" padding={"5"} direction={{base:"column",md:"row"}}>
    <Box>
      <Heading color={"#495C83"}>Web app for audiobooks</Heading>
      <Text marginTop="10px">
      Project uploaded to prove React abilities
      </Text>
      <Flex gap={"6"} marginTop="10px" direction={{base:"column",md:"row"}}>
        <a href="https://github.com/sandragcarrillo/ethereal-interface#:~:text=Despliegue-,Ethereal%20dapp,-%F0%9F%92%A1"><Button >Explore the project</Button></a>
      <a href=""><Button color={"white"} bg="#495C83">Endorse this ability</Button></a>
      </Flex>
    </Box>


    </Flex>
    </Center> 
    </SimpleGrid>
    </Stack>
   
  );
};

export default Projects;