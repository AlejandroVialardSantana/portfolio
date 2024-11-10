import { ReactNode } from 'react'
import { Flex } from '@chakra-ui/react'
import Navbar from "./Navbar";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Navbar />

      <Flex direction="column" align="center" maxW="container.md" mx="auto" p={4} mt="60px">
        {children}
      </Flex>
    </>
  );
};

export default Layout;