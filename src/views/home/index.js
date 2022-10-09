import{Stack,Flex,Heading,Text, Box,SimpleGrid, Button, }from "@chakra-ui/react";
import { useWeb3React } from "@web3-react/core";
import {VscEmptyWindow, VscCheck } from "react-icons/vsc"
import { Link } from "react-router-dom";


const Home=()=>{
  const { active } = useWeb3React();
  
 if (active) return (
   <Stack>
     <Heading align={"center"} color={"#495C83"} marginTop="10">Welcome to iTrained!</Heading>
     <Text align={"center"} paddingBottom="50" >
       NFTs as Proof of Knowledge </Text>
     

     <SimpleGrid columns={2} spacing={10}>
     <Link to ="projects"><Button leftIcon={<VscEmptyWindow />} size="lg" height="200px" width={"100%"} bg='#495C83' color={"white"} border="1px"
      _hover={{bg:"white", color:"#495C83", borderColor:"#495C83",}}>Upload a project, get 3 validations <br></br> to obtain your NFT for your ability</Button></Link>

      <Link to ="projects"><Button leftIcon={<VscCheck />} size="lg" height="200px" width={"100%"} bg='#495C83' color={"white"} border="1px"
      _hover={{bg:"white", color:"#495C83", borderColor:"#495C83",}}>Validate others abilities to help <br></br>them get their NFT (web2 validation,
      <br></br>  don't worry on fees!) </Button></Link>


    </SimpleGrid>
  
   </Stack>
   

 )
  
  else return(

  <Box >


   
    <Stack flex={1}spacing={{base:5,md:10}} background='url(https://github.com/sandragcarrillo/iTrained-dapp/blob/main/src/background.png?raw=true)'
        width="100%" height={"500px"} position={"relative"} borderRadius={"10"} margin={"0"}>
  <Heading
  width={"40%"}
  lineHeight={1.1}
  margin="10"
  fontWeight={700}
  fontSize={{base:"3xl",sm:"4xl",lg:"6xl"}}><Text color="white"
  as={"span"}
  position={"relative"}
  _after={{content:"''",width:"full",height:"30%",position:"absolute",bottom:1,left:0,zIndex:-1,}}>Prove your abilities 
  and get hired leaving the barriers behind </Text><br/></Heading>
  

  </Stack>




  <Box   bg={"#495C83"}
        width={"100%" }borderRadius={"10"} marginTop="0">
          <Heading color={"white"} fontSize="5xl" align={"center"} padding="15">
        How does it work?
        </Heading>
    <Flex direction={{base:"column",md:"row"}} >
    <Box color={"white"} margin={"5px"} fontSize="lg" border={"1px"} borderRadius={"10"} px="10" pt="5" pb="20" width="400px">
          <Heading>Step 1</Heading>
          <Text pt="5"> Create your professional profile, completely anonymus</Text>
        </Box>
        <Box color={"white"} margin={"5px"} fontSize="lg" border={"1px"} borderRadius={"10"} px="10" pt="5" pb="20" width="400px">
          <Heading>Step 2</Heading>
          <Text pt="5">Upload your projects to get an NFT for each ability</Text>
        </Box>
        <Box color={"white"} margin={"5px"} fontSize="lg" border={"1px"} borderRadius={"10"} px="10" pt="5" pb="20" width="400px">
          <Heading>Step 3</Heading>
          <Text pt="5">Get endorsed and endorser other people projects</Text>
        </Box>
    <Box>
    
    </Box>

    </Flex>
</Box>
 
   

</Box>


  

  );};





export default Home;