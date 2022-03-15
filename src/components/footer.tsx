import { Box, Center, Container, HStack, VStack, Link } from "@chakra-ui/react";
import { SlideBox } from "./slidebox";
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { MdEmail } from "react-icons/md";

function Footer() {
    return (
        <Container position="absolute" left={0} bottom={0} right={0} >
            <SlideBox delay={1}>
                <Box flexGrow={1} my={6}>
                    <Center>
                        <VStack>
                            <p>&copy;{new Date().getFullYear()} Justin Schaare</p>
                            <HStack>
                                <Link href="https://github.com/jschaare">
                                    <FaGithub />
                                </Link>
                                <Link href="https://www.linkedin.com/in/jschaare">
                                    <FaLinkedin />
                                </Link>
                                <Link href="mailto:jschaare16@gmail.com">
                                    <MdEmail />
                                </Link>
                            </HStack>
                        </VStack>
                    </Center>
                </Box>
            </SlideBox>
        </Container>
    );
}

export default Footer;