import { VStack } from "@chakra-ui/react";
import about from './static/about.jpg'

export default function About() {
    return (
        <VStack className="about">
            <img src={about} alt="About Us"></img>
        </VStack>
    );
}