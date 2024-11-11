import ExperienceItem from "@/components/ExperienceItem";
import { Box, Heading, VStack, useBreakpointValue } from "@chakra-ui/react";

const experiences = [
  {
    title: "Desarrollador de software",
    company: "Horizontes Informática S.L.",
    date: "abril 2024 - actualidad",
    type: "Jornada completa",
    description: [
      "Desarrollé una interfaz de chat en tiempo real para WhatsApp con WebSockets.",
      "Ejecuté pruebas en app de check-in con Vitest y Cypress.",
      "Creé una librería de componentes en React y TypeScript, documentada en Storybook."
    ]
  },
  {
    title: "Programador informático",
    company: "Horizontes Informática S.L.",
    date: "nov 2023 - mar 2024",
    type: "Contrato de prácticas",
    description: [
      "Desarrollé backend para mensajería automatizada con PHP y CodeIgniter 4.",
      "Colaboré en el frontend con React y Carbon Design System."
    ]
  }
];

const Experience = () => {
  const padding = useBreakpointValue({ base: 4, md: 8 });

  return (
    <Box as="section" id="experience" minH="100vh" bg="background.dark" py={20}>
      <Box maxW="1200px" mx="auto" px={padding}>
        <Heading as="h2" size="2xl" color="textPrimary.dark" mb={12} textAlign="center">
          Experiencia
        </Heading>
        <VStack gap={0} align="stretch" px={{ base: 4, md: 12 }}>
          {experiences.map((exp, index) => (
            <ExperienceItem key={index} {...exp} />
          ))}
        </VStack>
      </Box>
    </Box>
  );
};

export default Experience;
