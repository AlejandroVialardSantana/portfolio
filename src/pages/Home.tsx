import { Box, Heading, Text } from "@chakra-ui/react";

const Home = () => (
  <Box as="section" id="home" py={16} textAlign="center" bg="tokens.colors.background.dark" color="tokens.colors.textPrimary.dark">
    <Heading as="h1" size="2xl" mb={4}>
      Bienvenido a mi Portafolio
    </Heading>
    <Text fontSize="lg" color="tokens.colors.accent.dark">
      Soy un desarrollador apasionado por crear experiencias web increíbles.
    </Text>
  </Box>
);

export default Home;
