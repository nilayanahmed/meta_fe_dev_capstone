import { VStack } from "@chakra-ui/react";
import menu from './static/menu.jpg'

export default function Menu() {
    return (
        <section className="menu">
            <VStack>
                <h1>Menu</h1>
                <img src={menu} alt="Menu" width="100%"></img>
            </VStack>
        </section>
    );
}