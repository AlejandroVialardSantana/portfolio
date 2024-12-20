import { Box, Flex, Heading, Text, VStack, Circle, HStack } from "@chakra-ui/react";
import { Tooltip } from "@/components/ui/tooltip"

interface ExperienceItemProps {
  title: string;
  company: string;
  date: string;
  type: string;
  description: string[];
  technologies: { name: string; icon: JSX.Element }[]; // Modificado para incluir nombres
}

const ExperienceItem = ({ title, company, date, type, description, technologies }: ExperienceItemProps) => (
  <Flex gap={4} mb={12}>
    <Flex flexDir="column" alignItems="center">
      <Box 
        padding="4px" 
        bg="borderAccent.dark"
        borderRadius="full"
      >
        <Circle 
          size="30px" 
          bg="timeline.dark" 
          border="4px solid" 
          borderColor="hoverAccent.dark"
        />
      </Box>
      <Box 
        w="4px" 
        flex={1} 
        bg="timeline.dark" 
        borderRadius="md"
        mt={2}
        mb={2}
      />
    </Flex>

    <Box flex={1}>
      <Heading as="h3" size="lg" color="textPrimary.dark" mb={2}>
        {title}
      </Heading>
      <Text color="accent.dark" fontSize="xl" fontWeight="bold" mb={1}>
        {company}
      </Text>
      <Text color="accentSecondary.dark" fontSize="lg" mb={3}>
        {date} · {type}
      </Text>
      <VStack align="start" gap={1} color="textPrimary.dark">
        {description.map((desc, index) => (
          <Text key={index} fontSize="lg">
            - {desc}
          </Text>
        ))}
      </VStack>
      
      <HStack gap={4} mt={4}>
        {technologies.map((tech, index) => (
          <Tooltip key={index} content={tech.name} showArrow>
            <Box as="span" fontSize="2xl" color="textPrimary.dark">
              {tech.icon}
            </Box>
          </Tooltip>
        ))}
      </HStack>
    </Box>
  </Flex>
);

export default ExperienceItem;
