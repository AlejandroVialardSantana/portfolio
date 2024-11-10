import { Box, Flex, HStack, Link, Text } from "@chakra-ui/react";

const Navbar = () => {
  return (
    <Box as="nav" position="fixed" top={0} left={0} right={0} bg="background.dark" boxShadow="sm" zIndex={1000} py={4}>
      <Flex 
        maxW="1200px" 
        mx="auto" 
        px={6} 
        justify="space-between" 
        align="center"
      >
        <Text 
          fontSize="xl" 
          fontWeight="bold" 
          color="textPrimary.dark"
        >
          Alejandro Vialard
        </Text>

        <HStack gap={8}>
          <Link href="#home" color="textPrimary.dark" fontWeight="bold" _hover={{ color: "hoverAccent.dark" }}>
            Inicio
          </Link>
          <Link href="#about" color="textPrimary.dark" fontWeight="bold" _hover={{ color: "hoverAccent.dark" }}>
            Sobre mí
          </Link>
          <Link href="#experience" color="textPrimary.dark" fontWeight="bold" _hover={{ color: "hoverAccent.dark" }}>
            Experiencia
          </Link>
          <Link href="#projects" color="textPrimary.dark" fontWeight="bold" _hover={{ color: "hoverAccent.dark" }}>
            Proyectos
          </Link>
          <Link href="#contact" color="textPrimary.dark" fontWeight="bold" _hover={{ color: "hoverAccent.dark" }}>
            Contacto
          </Link>
        </HStack>
      </Flex>
    </Box>
  );
};

export default Navbar;