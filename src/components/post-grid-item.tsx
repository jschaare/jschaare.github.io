import { Box, Text, LinkBox, LinkOverlay, Image } from '@chakra-ui/react'

interface PostGridItemProps {
    thumbnail: string,
    title: string,
    click: Function,
    children: React.ReactNode
}

export function PostGridItem(props: PostGridItemProps) {
    return (
        <Box w="100%" textAlign="center" borderWidth='1px'>
            <LinkBox cursor="pointer" onClick={() => props.click()}>
                <Image
                    src={props.thumbnail}
                    alt={props.title}
                    className="grid-item-thumbnail"
                    placeholder="blur"
                    loading="lazy"
                />
                <Text mt={2}>{props.title}</Text>
                <Text fontSize={14}>{props.children}</Text>
            </LinkBox>
        </Box>
    )
}

interface PostGridLinkItemProps {
    thumbnail: string,
    title: string,
    href: string,
    children: React.ReactNode
}

export function PostGridLinkItem(props: PostGridLinkItemProps) {
    return (
        <Box w="100%" textAlign="center" borderWidth='1px'>
            <LinkBox cursor="pointer">
                <Image
                    src={props.thumbnail}
                    alt={props.title}
                    className="grid-item-thumbnail"
                    placeholder="blur"
                    loading="lazy"
                />
                <LinkOverlay href={props.href} target="_blank">
                    <Text mt={2}>{props.title}</Text>
                </LinkOverlay>
                <Text fontSize={14}>{props.children}</Text>
            </LinkBox>
        </Box>
    )
}
