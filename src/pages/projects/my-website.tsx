import { Badge, Container, Image, Link, Text } from "@chakra-ui/react";

export function MyWebsite() {
    return (
        <Container>
            <Image src="/images/fatdoge.jpg" />
            <Badge>React</Badge>
            <Text my={4}>
                This website! Built on top of React with a lot of leaning on Chakra-UI
                to make up for my lack of creativity with CSS.
            </Text>
            <Text my={4}>
                Hosted on Github Pages.
            </Text>
            <Link href="https://github.com/jschaare/jschaare.github.io">
                See the code on Github!
            </Link>
        </Container>
    )
}