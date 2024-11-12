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
import perfilImage from '../assets/perfil.webp';

const Home = () => (
  <Box
    as="section"
    id="home"
    minH="calc(100vh - 90px)"
    display="flex"
    alignItems="center"
    w="100%"
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
      gap={12}
    >
      <Box
        position="relative"
        w={{ base: "280px", md: "380px" }}
        h={{ base: "280px", md: "380px" }}
      >
        <Box
          position="absolute"
          top="50%"
          left="50%"
          transform="translate(-50%, -50%)"
          w="100%"
          h="100%"
          bgGradient="radial(closest-side, rgba(145,167,180,0.5), transparent)"
          borderRadius="60% 40% 30% 70%/60% 30% 70% 40%"
          boxShadow="0px 0px 20px rgba(145,167,180,0.6)"
        />

        <Box
          position="relative"
          overflow="hidden"
          w="100%"
          h="100%"
          borderRadius="60% 40% 30% 70%/60% 30% 70% 40%"
        >
          <Image
            src={perfilImage}
            alt="Alejandro Vialard Santana"
            objectFit="contain"
            w="100%"
            h="100%"
            mt={8}
            _hover={{ transform: "scale(1.1)" }}
            transition="all 0.3s"
          />
        </Box>
      </Box>

      <VStack
        align={{ base: "center", md: "start" }}
        maxW="600px"
        gap={3}
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

        <HStack pt={4} gap={4}>
          <Link
            href="https://www.linkedin.com/in/alejandrovialardsantana/"
            _hover={{ transform: "translateY(-2px)", textDecoration: "none" }}
            transition="all 0.3s"
          >
            <Button
              bg="accent.dark"
              color="background.dark"
              _hover={{ bg: "hoverAccent.dark" }}
              size="lg"
              w="140px"
            >
              <FaLinkedin /> LinkedIn
            </Button>
          </Link>

          <Link
            href="https://github.com/AlejandroVialardSantana"
            _hover={{ transform: "translateY(-2px)", textDecoration: "none" }}
            transition="all 0.3s"
          >
            <Button
              bg="accent.dark"
              color="background.dark"
              _hover={{ bg: "hoverAccent.dark" }}
              size="lg"
              w="140px"
            >
              <FaGithub /> GitHub
            </Button>
          </Link>

          <Button
            bg="accentSecondary.dark"
            color="textPrimary.dark"
            _hover={{ bg: "accent.dark", color: "background.dark", transform: "translateY(-2px)" }}
            size="lg"
            w="180px"
            transition="all 0.3s"
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
