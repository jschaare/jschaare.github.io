import { Badge, Container, Image, Link, Text } from "@chakra-ui/react";

export function Rumble() {
    return (
        <Container>
            <Image src="/images/rumble.jpg" />
            <Badge>Rust</Badge>
            <Text my={4}>
                A Rust wrapper for the localhost LoL live game data API.
                Made in mind with the goal of collecting and analyzing games to improve!
            </Text>
            <Link href="https://github.com/jschaare/rumble">
                See the code on Github!
            </Link>
        </Container>
    )
}