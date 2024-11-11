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
          cursor="pointer"
          _hover={{
            transform: "scale(1.05)",
          }}
          transition="all 0.3s ease"
        >
          Alejandro Vialard
        </Text>

        <HStack gap={8}>
          <Link 
            href="#home" 
            color="textPrimary.dark" 
            fontWeight="bold" 
            textDecoration="none"
            position="relative"
            _hover={{ 
              color: "hoverAccent.dark",
              transform: "scale(1.1)",
              textDecoration: "none"
            }}
            transition="all 0.3s ease"
          >
            Inicio
          </Link>
          <Link 
            href="#about" 
            color="textPrimary.dark" 
            fontWeight="bold"
            textDecoration="none"
            position="relative"
            _hover={{ 
              color: "hoverAccent.dark",
              transform: "scale(1.1)",
              textDecoration: "none"
            }}
            transition="all 0.3s ease"
          >
            Sobre mí
          </Link>
          <Link 
            href="#experience" 
            color="textPrimary.dark" 
            fontWeight="bold"
            textDecoration="none"
            position="relative"
            _hover={{ 
              color: "hoverAccent.dark",
              transform: "scale(1.1)",
              textDecoration: "none"
            }}
            transition="all 0.3s ease"
          >
            Experiencia
          </Link>
          <Link 
            href="#projects" 
            color="textPrimary.dark" 
            fontWeight="bold"
            textDecoration="none"
            position="relative"
            _hover={{ 
              color: "hoverAccent.dark",
              transform: "scale(1.1)",
              textDecoration: "none"
            }}
            transition="all 0.3s ease"
          >
            Proyectos
          </Link>
          <Link 
            href="#contact" 
            color="textPrimary.dark" 
            fontWeight="bold"
            textDecoration="none"
            position="relative"
            _hover={{ 
              color: "hoverAccent.dark",
              transform: "scale(1.1)",
              textDecoration: "none"
            }}
            transition="all 0.3s ease"
          >
            Contacto
          </Link>
        </HStack>
      </Flex>
    </Box>
  );
};

export default Navbar;