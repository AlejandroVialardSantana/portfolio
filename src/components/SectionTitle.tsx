import { Box, Flex, Heading, HeadingProps } from "@chakra-ui/react";
import { ReactNode } from "react";

interface SectionTitleProps extends HeadingProps {
  children: ReactNode;
}

const SectionTitle = ({ children, ...props }: SectionTitleProps) => {
  return (
    <Flex align="center" justify="center" gap={4} mb={12}>
      <Box
        flex={1}
        maxW="100px"
        height="1px"
        bg="borderAccent.dark"
        display={{ base: "none", md: "block" }}
      />
      <Heading
        as="h2"
        size="2xl"
        color="textPrimary.dark"
        textAlign="center"
        whiteSpace="nowrap"
        {...props}
      >
        {children}
      </Heading>
      <Box
        flex={1}
        maxW="100px"
        height="1px"
        bg="borderAccent.dark"
        display={{ base: "none", md: "block" }}
      />
    </Flex>
  );
};

export default SectionTitle;