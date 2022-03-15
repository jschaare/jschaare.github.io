import { Badge, Container, Image, Link, Text } from "@chakra-ui/react";

export function LolLookup() {
    return (
        <Container>
            <Image src="/images/heehawbot.jpg" />
            <Badge>Rust</Badge>
            <Badge>React</Badge>
            <Badge>Tauri</Badge>
            <Text my={4}>
                A Tauri app with React frontend and a Rust backend. Used for looking up League of Legends statistics.
                The plan is to make a tool that's useful for scouting player info for the small tournament called Clash.
            </Text>
            <Link href="https://github.com/jschaare/lol-lookup">
                See the code on Github!
            </Link>
        </Container>
    )
}