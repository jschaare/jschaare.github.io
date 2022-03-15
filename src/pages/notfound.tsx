import { Box, Container } from "@chakra-ui/react";
import Main from "../components/layout/main";

function NotFound() {
    return (
        <Main>
            <Container>
                <Box
                    display={{ md: 'flex' }}
                    my={6}
                    textAlign="center"
                >
                    <Box flexGrow={1}>
                        <p>Nothing to see here yet!</p>
                    </Box>
                </Box>
            </Container>
        </Main>
    );
}

export default NotFound;