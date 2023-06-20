import { VStack, Image } from "@chakra-ui/react";
import about from './static/about.jpg'

export default function About() {
    return (
        <section className="about">
            <VStack>
                <Image src={about} alt="About Us"></Image>
            </VStack>
        </section>
    );
}