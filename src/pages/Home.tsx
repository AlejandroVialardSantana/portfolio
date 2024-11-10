import { 
  Box, 
  Button, 
  Flex, 
  Heading, 
  Image, 
  Link, 
  Text, 
  VStack, 
  HStack,
} from "@chakra-ui/react";
import { FaGithub, FaLinkedin, FaFileDownload } from 'react-icons/fa';

const Home = () => (
  <Box 
    as="section" 
    id="home" 
    minH="100vh" 
    display="flex" 
    alignItems="center"
    bg="background.dark"
    py={20}
  >
    <Flex
      maxW="1200px"
      mx="auto"
      px={6}
      direction={{ base: "column", md: "row" }}
      align="center"
      justify="center"
      gap={10}
    >
      <Box 
        flexShrink={0}
        w={{ base: "200px", md: "300px" }}
        h={{ base: "200px", md: "300px" }}
      >
        <Image
          src="/ruta-a-tu-imagen.jpg"
          alt="Tu Nombre"
          borderRadius="full"
          objectFit="cover"
          w="100%"
          h="100%"
          border="4px solid"
          borderColor="accent.dark"
        />
      </Box>

      <VStack 
        align={{ base: "center", md: "start" }}
        maxW="600px"
      >
        <Text 
          fontSize="xl" 
          color="accent.dark"
          fontWeight="medium"
        >
          ¡Hola! 👋 Soy
        </Text>
        
        <Heading 
          as="h1" 
          size="2xl" 
          color="textPrimary.dark"
          lineHeight="shorter"
        >
          Alejandro Vialard Santana
        </Heading>

        <Text 
          fontSize="2xl" 
          color="accent.dark"
          fontWeight="bold"
        >
          Ingeniero de Software
        </Text>

        <Text 
          fontSize="lg" 
          color="textPrimary.dark"
          textAlign={{ base: "center", md: "left" }}
        >
          Desarrollador apasionado por crear experiencias web increíbles, 
          especializado en tecnologías modernas y soluciones innovadoras.
        </Text>

        <HStack pt={4}>
          <Link 
            href="https://www.linkedin.com/in/alejandrovialardsantana/" 
            _hover={{ transform: "translateY(-2px)" }}
            transition="all 0.3s"
          >
            <Button
              bg="accent.dark"
              color="background.dark"
              _hover={{ bg: "hoverAccent.dark" }}
              size="lg"
            >
              <FaLinkedin /> LinkedIn
            </Button>
          </Link>

          <Link 
            href="https://github.com/AlejandroVialardSantana" 
            _hover={{ transform: "translateY(-2px)" }}
            transition="all 0.3s"
          >
            <Button
              bg="accent.dark"
              color="background.dark"
              _hover={{ bg: "hoverAccent.dark" }}
              size="lg"
            >
              <FaGithub /> GitHub
            </Button>
          </Link>

          <Button
            bg="accentSecondary.dark"
            color="textPrimary.dark"
            _hover={{ bg: "accent.dark", color: "background.dark" }}
            size="lg"
            onClick={() => window.open('/ruta-a-tu-cv.pdf')}
          >
            <FaFileDownload /> Descargar CV
          </Button>
        </HStack>
      </VStack>
    </Flex>
  </Box>
);

export default Home;