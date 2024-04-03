import { useTranslation } from "react-i18next";
import { Flex, GridItem, Box, Text, Heading } from "@chakra-ui/react";

const sections_data = [
  {
    name: "children",
  },
  {
    name: "property",
  },
  {
    name: "vehicles",
  },
  {
    name: "jobs",
  },
  {
    name: "pets",
  },
  {
    name: "home",
  },
  {
    name: "gadges",
  },
  {
    name: "business",
  },
];

const Sections = () => {
  const [t, i18n] = useTranslation("global");
  return (
    <Box mt={10}>
      <Heading align="center" fontSize={25}>
        {t("home.sections.header")}
      </Heading>
      <Flex mt={5} flexWrap="wrap">
        {sections_data.map((section, index) => {
          return (
            <Box
              key={index}
              // minW={110}
              border="1px solid"
              m={2}
              px={3}
              py={1}
              borderRadius={8}
              cursor="pointer"
            >
              <Text
                fontSize={15}
                fontWeight="bold"
                align="center"
                userSelect="none"
              >
                {section.name}
              </Text>
            </Box>
          );
        })}
      </Flex>
    </Box>
  );
};

export default Sections;
