import React from 'react';
import { Box, Container } from '@chakra-ui/react';
import Navbar from '../navbar';
import Footer from '../footer';

interface Props {
    children: React.ReactNode
}

const Main = (props: Props) => (
    <Box as="main" pb={8} minH="100vh" paddingBottom={100}>
        <Navbar />
        <Container maxW="container.md" pt={14}>
            {props.children}
        </Container>
        <Footer />
    </Box>
);

export default Main;