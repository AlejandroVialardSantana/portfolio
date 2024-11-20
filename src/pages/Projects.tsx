import SectionTitle from "@/components/SectionTitle";
import {
  Box,
  Grid,
  Card,
  Image,
  Heading,
  Text,
  HStack,
  Button,
  Link,
} from "@chakra-ui/react";
import { FaGithub, FaReact, FaNodeJs, FaCss3Alt } from "react-icons/fa";

const projects = [
  {
    id: 1,
    name: "Proyecto 1",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    image: "https://via.placeholder.com/400x200",
    technologies: [FaReact, FaNodeJs, FaCss3Alt],
    github: "https://github.com/alejandro/proyecto1",
  },
  {
    id: 2,
    name: "Proyecto 2",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    image: "https://via.placeholder.com/400x200",
    technologies: [FaReact, FaCss3Alt],
    github: "https://github.com/alejandro/proyecto2",
  },
  {
    id: 3,
    name: "Proyecto 3",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    image: "https://via.placeholder.com/400x200",
    technologies: [FaNodeJs],
    github: "https://github.com/alejandro/proyecto3",
  },
];

const Projects = () => {
  return (
    <Box
      id="projects"
      bg="background.dark"
      color="textPrimary.dark"
      py={10}
      px={{ base: 4, md: 8, lg: 12 }}
    >
      <SectionTitle>
        Proyectos
      </SectionTitle>
      <Grid
        templateColumns={{
          base: "1fr",
          md: "repeat(2, 1fr)",
          lg: "repeat(3, 1fr)",
        }}
        gap={8}
      >
        {projects.map((project) => (
          <Card.Root
            key={project.id}
            width="100%"
            bg="accentSecondary.dark"
            color="textPrimary.dark"
            shadow="lg"
            borderRadius="lg"
            overflow="hidden"
            transition="transform 0.3s ease-out, box-shadow 0.3s ease-out"
            _hover={{
              transform: "translateY(-4px)",
              shadow: "xl",
            }}
          >
            <Image
              src={project.image}
              alt={project.name}
              borderRadius="none"
              height="200px"
              objectFit="cover"
            />
            <Card.Body px={6} py={4}>
              <Heading
                as="h3"
                size="md"
                mb={2}
                fontFamily="heading"
                color="accent.dark"
              >
                {project.name}
              </Heading>
              <Text fontSize="sm" mb={4} color="textPrimary.dark">
                {project.description}
              </Text>
              <HStack gap={4} mb={4}>
                {project.technologies.map((TechIcon, index) => (
                  <Box
                    key={index}
                    as={TechIcon}
                    boxSize={6}
                    color="timeline.dark"
                  />
                ))}
              </HStack>
              <Link
                href={project.github}
                width="fit-content"
                textDecoration="none"
              >
                <Button
                  size="sm"
                  bg="accent.dark"
                  color="background.dark"
                  _hover={{
                    bg: "hoverAccent.dark",
                    transition: "transform 0.2s ease-in-out",
                  }}
                >
                  <FaGithub /> Ver en GitHub
                </Button>
              </Link>

            </Card.Body>
          </Card.Root>
        ))}
      </Grid>
    </Box>
  );
};

export default Projects;
