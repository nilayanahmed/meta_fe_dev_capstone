import React from "react";
import { Box, Heading, VStack } from "@chakra-ui/react";
import Card from "./Card";

const specials = [
  {
    title: "Greek Salad",
    description:
      "A traditional Greek salad consists of sliced cucumbers, tomatoes, green bell pepper, red onion, olives, and feta cheese",
    getImageSrc: () => require("../images/salad.jpg"),
  },
  {
    title: "Meat Goulash",
    description:
      "A traditional Hungarian Goulash soup or stew that is usually filled with tender beef and onions spiced with paprika",
    getImageSrc: () => require("../images/goulash.jpg"),
  },
  {
    title: "Veggie Pizza",
    description:
      "This pizza recipe is made with the combination of delicious vegetables like broccoli, onion, capsicum, carrot, mushroom and cauliflower ",
    getImageSrc: () => require("../images/pizza.jpg"),
  },
  {
    title: "Baked Salmon",
    description:
      "A tender baked salmon recipe seasoned with garlic, roasted lemons, and fresh herbs straight from the seas. Seasonal.",
    getImageSrc: () => require("../images/salmon.jpg"),
  },
];

const SpecialsSection = () => {
  return (
    <section className="specials">
      <VStack>
      <Heading as="h1">
        Today's Specials !
      </Heading>
      <Box
        display="grid"
        gridTemplateColumns="repeat(2, minmax(0, 1fr))"
        gridGap={16}
      >
        {specials.map((special) => (
          <Card
            key={special.title}
            title={special.title}
            description={special.description}
            imageSrc={special.getImageSrc()}
          />
        ))}
      </Box>
      </VStack>
      </section>
  );
};

export default SpecialsSection;
