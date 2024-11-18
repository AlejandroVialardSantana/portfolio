import { Box, Flex, HStack, Link, Text, IconButton, VStack, useBreakpointValue } from "@chakra-ui/react";
import {
  DrawerBody,
  DrawerCloseTrigger,
  DrawerContent,
  DrawerHeader,
  DrawerRoot,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { IoCloseCircleOutline, IoMenu } from "react-icons/io5";

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
}

const NavLink = ({ href, children }: NavLinkProps) => (
  <Link
    href={href}
    color="textPrimary.dark"
    fontWeight="bold"
    textDecoration="none"
    _hover={{
      color: "hoverAccent.dark",
      transform: "scale(1.1)",
      textDecoration: "none"
    }}
    transition="all 0.3s ease"
  >
    {children}
  </Link>
);

const Navbar = () => {
  const isMobile = useBreakpointValue({ base: true, md: false });

  return (
    <Box as="nav" position="fixed" top={0} left={0} right={0} bg="background.dark" boxShadow="sm" zIndex={1000} py={4}>
      <Flex maxW="1200px" mx="auto" px={6} justify="space-between" align="center">
        <Text
          fontSize="xl"
          fontWeight="bold"
          color="textPrimary.dark"
          cursor="pointer"
          _hover={{ transform: "scale(1.05)" }}
          transition="all 0.3s ease"
        >
          Alejandro Vialard
        </Text>

        <HStack gap={8} display={{ base: 'none', md: 'flex' }}>
          <NavLink href="#home">Inicio</NavLink>
          <NavLink href="#about">Sobre mí</NavLink>
          <NavLink href="#experience">Experiencia</NavLink>
          <NavLink href="#projects">Proyectos</NavLink>
          <NavLink href="#contact">Contacto</NavLink>
        </HStack>

        {isMobile && (
          <DrawerRoot size={{ base: "xs" }}>
            <DrawerTrigger asChild>
              <IconButton
                aria-label="Open menu"
                variant="ghost"
                color="textPrimary.dark"
              >
                <IoMenu />
              </IconButton>
            </DrawerTrigger>

            <DrawerContent bg="background.dark">
              <DrawerCloseTrigger asChild>
                <IconButton
                  aria-label="Close menu"
                  size="sm"
                  position="absolute"
                  right={2}
                  top={2}
                  color="textPrimary.dark"
                >
                  <IoCloseCircleOutline />
                </IconButton>
              </DrawerCloseTrigger>

              <DrawerHeader>
                <DrawerTitle color="textPrimary.dark">Menú</DrawerTitle>
              </DrawerHeader>

              <DrawerBody>
                <VStack gap={4} align="stretch" mt={4}>
                  <NavLink href="#home">Inicio</NavLink>
                  <NavLink href="#about">Sobre mí</NavLink>
                  <NavLink href="#experience">Experiencia</NavLink>
                  <NavLink href="#projects">Proyectos</NavLink>
                  <NavLink href="#contact">Contacto</NavLink>
                </VStack>
              </DrawerBody>
            </DrawerContent>
          </DrawerRoot>
        )}
      </Flex>
    </Box>
  );
};

export default Navbar;
