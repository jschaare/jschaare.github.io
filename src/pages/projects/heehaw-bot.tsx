import { Badge, Container, Image, Link, Text } from "@chakra-ui/react";

export function HeehawBot() {
    return (
        <Container>
            <Image src="/images/heehawbot.jpg" />
            <Badge>Python</Badge>
            <Text my={4}>
                A bot using Discord.py (rest in peace), a wrapper around the Discord API.
                It uses youtube-dl for streaming video audio to the Discord voice channel
                for listening to music with friends while playing games. The bot is in dire
                need of some updates since Discord.py has been deprecated, but it works for now.
            </Text>
            <Text my={4}>
                Hosted locally on a Raspberry Pi.
            </Text>
            <Link href="https://github.com/jschaare/HeehawBot">
                See the code on Github!
            </Link>
        </Container>
    )
}