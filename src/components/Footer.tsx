import { Box, Flex, VStack, Link, Text, Button, Stack } from "@chakra-ui/react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <Box bg="accent.dark" color="textPrimary.dark" py={8} w="full">
      <Flex
        direction={{ base: "column", md: "row" }}
        align={{ base: "center", md: "flex-start" }}
        justify="space-between"
        maxW="1200px"
        mx="auto"
        px={6}
        gap={8}
      >
        <VStack align={{ base: "center", md: "flex-start" }} gap={4}>
          <Text fontSize="lg" fontWeight="bold">
            Alejandro Vialard Santana
          </Text>
          <Text fontSize="sm">
            Contacto:{" "}
            <Link
              href="mailto:a.vialard.developer@gmail.com"
              color="backgraound.dark"
              _hover={{
                textDecoration: "none",
                color: "accentSecondary.dark",
              }}
              transition="all 0.3s"
            >
              a.vialard.developer@gmail.com
            </Link>
          </Text>
          <Text fontSize="xs">
            &copy; {new Date().getFullYear()} Alejandro Vialard Santana.
          </Text>
        </VStack>

        <Stack
          direction={{ base: "column", md: "row" }}
          gap={4}
          align="center"
        >
          <Link
            href="https://github.com/AlejandroVialardSantana"
            _hover={{ transform: "translateY(-2px)", textDecoration: "none" }}
            transition="all 0.3s"
          >
            <Button
              bg="background.dark"
              color="accent.dark"
              _hover={{ bg: "accentSecondary.dark", color: "background.light" }}
              size="lg"
              w={{ base: "120px", md: "140px" }}
            >
              <FaGithub style={{ marginRight: "8px" }} /> GitHub
            </Button>
          </Link>
          <Link
            href="https://www.linkedin.com/in/alejandrovialardsantana/"
            _hover={{ transform: "translateY(-2px)", textDecoration: "none" }}
            transition="all 0.3s"
          >
            <Button
              bg="background.dark"
              color="accent.dark"
              _hover={{ bg: "accentSecondary.dark", color: "background.light" }}
              size="lg"
              w={{ base: "120px", md: "140px" }}
            >
              <FaLinkedin style={{ marginRight: "8px" }} /> LinkedIn
            </Button>
          </Link>
          <Link
            href="mailto:a.vialard.developer@gmail.com"
            _hover={{ transform: "translateY(-2px)", textDecoration: "none" }}
            transition="all 0.3s"
          >
            <Button
              bg="background.dark"
              color="accent.dark"
              _hover={{ bg: "accentSecondary.dark", color: "background.light" }}
              size="lg"
              w={{ base: "120px", md: "140px" }}
            >
              <FaEnvelope style={{ marginRight: "8px" }} /> Email
            </Button>
          </Link>
        </Stack>
      </Flex>
    </Box>
  );
};

export default Footer;
