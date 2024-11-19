import { ReactNode } from 'react'
import { Flex } from '@chakra-ui/react'
import Navbar from "./Navbar";
import ScrollToTop from './ScrollToTop';
import Footer from './Footer';

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Navbar />

      <Flex bg="background.dark" direction="column" align="center" maxW="container.md" mx="auto" p={4} mt="60px">
        {children}
      </Flex>

      <Footer />
      <ScrollToTop />
    </>
  );
};

export default Layout;