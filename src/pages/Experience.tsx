import ExperienceItem from "@/components/ExperienceItem";
import SectionTitle from "@/components/SectionTitle";
import { Box, VStack, useBreakpointValue } from "@chakra-ui/react";
import { FaReact, FaPhp, FaGitAlt } from "react-icons/fa";
import { SiTypescript, SiCodeigniter, SiStorybook, SiVitest, SiCypress, SiDocker } from "react-icons/si";

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
    ],
    technologies: [
      { name: "React", icon: <FaReact /> },
      { name: "TypeScript", icon: <SiTypescript /> },
      { name: "Storybook", icon: <SiStorybook /> },
      { name: "Cypress", icon: <SiCypress /> },
      { name: "Vitest", icon: <SiVitest /> },
      { name: "Git", icon: <FaGitAlt /> },
      { name: "Docker", icon: <SiDocker /> }
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
    ],
    technologies: [
      { name: "PHP", icon: <FaPhp /> },
      { name: "CodeIgniter", icon: <SiCodeigniter /> },
      { name: "React", icon: <FaReact /> },
      { name: "TypeScript", icon: <SiTypescript /> },
      { name: "Git", icon: <FaGitAlt /> },
      { name: "Docker", icon: <SiDocker /> }
    ]
  }
];

const Experience = () => {
  const padding = useBreakpointValue({ base: 4, md: 8 });

  return (
    <Box as="section" id="experience" bg="background.dark" py={20}>
      <Box maxW="1200px" mx="auto" px={padding}>
      <SectionTitle>Experiencia</SectionTitle>
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
