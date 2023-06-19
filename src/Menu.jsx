import { VStack } from "@chakra-ui/react";
import menu from './static/menu.jpg'

export default function Menu() {
    return (
        <VStack className="menu">
            <h1>Menu</h1>
            <img src={menu} alt="Menu"></img>
        </VStack>
    );
}