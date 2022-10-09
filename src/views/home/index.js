import{Stack,Flex,Heading,Text, Box }from "@chakra-ui/react";
//import{Link}from "react-router-dom";

const Home=()=>{
  
  return(

  <Box background='url(https://github.com/sandragcarrillo/iTrained-dapp/blob/main/src/background.png?raw=true)'width={"full"} >


   <Flex
  align={"center"}
  width={"50%"}
  spacing={{base:8,md:10}}
  py={{base:20,md:28}}
  direction={{base:"column-reverse",md:"row"}}><Stack flex={1}spacing={{base:5,md:10}}><Heading
  lineHeight={1.1}
  fontWeight={600}
  fontSize={{base:"3xl",sm:"4xl",lg:"6xl"}}><Text color="white"
  as={"span"}
  position={"relative"}
  _after={{content:"''",width:"full",height:"30%",position:"absolute",bottom:1,left:0,zIndex:-1,}}>Prove your abilities 
  and get hired leaving the barriers behind </Text><br/></Heading>
  

  </Stack>


  </Flex>

  <Box bg={"#495C83"}  
        width={"100%" }borderRadius={"10"}>
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