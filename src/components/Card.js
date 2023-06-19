import { Box, Center, Heading, HStack, Image, Text, VStack } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc }) => {
  return (
    <VStack w="30vw" color="black" backgroundColor="white"
       borderRadius="xl" borderWidth="1px" borderColor="black"
       padding="5px" spacing="4">
      <Box>
          <Image src={imageSrc} alt={title} borderRadius="xl" width="100%"></Image>
      </Box>
      <Box padding="5px">
        <Heading as="h1" size="1xl">{title}</Heading>
        <Text color="gray">{description}</Text>
        <HStack fontSize="md" fontWeight="medium" >
          <p>Order now </p>
          <FontAwesomeIcon icon={faArrowRight} size="1x" />
        </HStack>
      </Box>
    </VStack>
  );
};

export default Card;
