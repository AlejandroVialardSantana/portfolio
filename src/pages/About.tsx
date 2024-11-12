import SectionTitle from '@/components/SectionTitle';
import { Box, Flex, Text } from '@chakra-ui/react';
import { FaUserGraduate, FaCode, FaUsers } from 'react-icons/fa';

const About = () => {
  return (
    <Box
      as="section"
      id="about"
      bg="background.dark"
      color="textPrimary.dark"
      px={{ base: 4, md: 8 }}
      py={{ base: 8, md: 12 }}
      borderRadius="md"
      boxShadow="lg"
      maxW="3xl"
      mx="auto"
    >
      <SectionTitle>Sobre Mí</SectionTitle>

      <Flex direction={{ base: 'column', md: 'row' }} align="center" mb={8}>
        <Box mb={{ base: 4, md: 0 }} mr={{ base: 0, md: 6 }}>
          <FaUserGraduate size={48} color="#91A7B4" />
        </Box>
        <Text fontSize="lg" lineHeight="tall">
          ¡Hola! Soy <Text as="span" color="accent.dark" fontWeight="bold">Alejandro Vialard Santana</Text>, 
          ingeniero informático por la <Text as="span" color="timeline.dark">Universidad de Las Palmas de Gran Canaria</Text>, 
          donde también realicé un año de movilidad SICUE en la <Text as="span" color="timeline.dark">Universidad de Granada</Text>.
        </Text>
      </Flex>

      <Flex direction={{ base: 'column', md: 'row-reverse' }} align="center" mb={8}>
        <Box mb={{ base: 4, md: 0 }} ml={{ base: 0, md: 6 }}>
          <FaCode size={48} color="#91A7B4" />
        </Box>
        <Text fontSize="lg" lineHeight="tall">
          Cuento con un año de experiencia desarrollando soluciones de software tanto en 
          <Text as="span" color="accent.dark" fontWeight="bold"> frontend </Text> 
          como en 
          <Text as="span" color="accent.dark" fontWeight="bold"> backend</Text>, 
          especializándome en 
          <Text as="span" color="timeline.dark"> aplicaciones web </Text> 
          y explorando el desarrollo de 
          <Text as="span" color="timeline.dark"> apps móviles nativas</Text>. 
          Me apasiona crear software limpio, escalable y orientado a mejorar la experiencia del usuario.
        </Text>
      </Flex>

      <Flex direction={{ base: 'column', md: 'row' }} align="center">
        <Box mb={{ base: 4, md: 0 }} mr={{ base: 0, md: 6 }}>
          <FaUsers size={48} color="#91A7B4" />
        </Box>
        <Text fontSize="lg" lineHeight="tall">
          En mis proyectos, he trabajado en equipos ágiles, aplicando metodologías como 
          <Text as="span" color="accent.dark" fontWeight="bold"> SCRUM</Text>, 
          lo que ha potenciado mis habilidades de 
          <Text as="span" color="timeline.dark"> colaboración </Text> 
          y 
          <Text as="span" color="timeline.dark"> resolución de problemas</Text>. 
          Siempre estoy en busca de nuevos retos y oportunidades para innovar y aportar valor a los proyectos.
        </Text>
      </Flex>
    </Box>
  );
};

export default About;