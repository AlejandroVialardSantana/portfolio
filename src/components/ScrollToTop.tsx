import { useState, useEffect } from 'react'
import { IconButton } from '@chakra-ui/react'
import { FaArrowUp } from 'react-icons/fa'

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false)

  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      setIsVisible(true)
    } else {
      setIsVisible(false)
    }
  }

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility)
    return () => window.removeEventListener('scroll', toggleVisibility)
  }, [])

  return (
    <>
      {isVisible && (
        <IconButton
          aria-label="Scroll to top"
          onClick={scrollToTop}
          position="fixed"
          bottom="8"
          right="8"
          size="lg"
          colorScheme="gray"
          bg="accent.dark"
          _hover={{ bg: 'hoverAccent.dark' }}
          opacity="0.8"
          borderRadius="full"
          zIndex={999}
        >
            <FaArrowUp />
        </IconButton>
      )}
    </>
  )
}

export default ScrollToTop