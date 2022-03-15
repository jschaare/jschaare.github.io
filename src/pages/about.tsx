import { Box, Container, Heading, Text, UnorderedList, ListItem } from "@chakra-ui/react";
import { SlideBox } from "../components/slidebox";
import Main from "../components/layout/main";

function About() {
    return (
        <Main>
            <Container>
                <Box
                    display={{ md: 'flex' }}
                    my={6}
                    textAlign="center"
                >
                    <Box flexGrow={1}>
                        <Heading as="h2" variant="page-title">
                            Justin Schaare
                        </Heading>
                        <p>Software Engineer</p>
                    </Box>
                </Box>

                <SlideBox delay={0.1}>
                    <Heading as="h3" variant="section-title">
                        Bio
                    </Heading>
                    <Text>
                        Hey! I'm Justin, and this is my cliche blog that every developer has.
                        Currently I work as an embedded Software Engineer, designing and developing for
                        System on a chip platforms. My technical interests range from low-level kernel development
                        to machine learning. I'm also a big fan of Rust!
                    </Text>
                </SlideBox>

                <SlideBox delay={0.2}>
                    <Heading as="h3" variant="section-title">
                        Fun Facts
                    </Heading>
                    <UnorderedList>
                        <ListItem>
                            Studied in Japan for a year through an exchange program
                        </ListItem>
                        <ListItem>
                            I have the JLPT N2 certification for Japanese! One of my proudest accomplishments
                        </ListItem>
                        <ListItem>
                            Was a TA for Astronomy in college
                        </ListItem>
                        <ListItem>
                            I love to go camping when I get a chance
                        </ListItem>
                    </UnorderedList>
                </SlideBox>
            </Container>
        </Main>
    );
}

export default About;