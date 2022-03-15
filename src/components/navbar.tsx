import { Link as RouterLink } from 'react-router-dom';
import {
    Container,
    Box,
    Link,
    Stack,
    Heading,
    Flex,
    Menu,
    MenuItem,
    MenuList,
    MenuButton,
    IconButton,
    useColorModeValue
} from '@chakra-ui/react'
import { HamburgerIcon } from '@chakra-ui/icons'
import { ColorModeSwitcher } from './colorswitch';


const Navbar = () => {

    return (
        <Box
            position="fixed"
            as="nav"
            w="100%"
            backgroundColor="gray.800"
            css={{ backdropFilter: 'blur(10px)' }}
            zIndex={1}
        >
            <Container
                display="flex"
                p={2}
                maxW="container.md"
                flexWrap="wrap"
                alignContent="center"
                justifyContent="space-between"
            >
                <Flex align="center" mr={5}>
                    <Heading as="h1" size="lg" letterSpacing={'tighter'}>
                        <Link as={RouterLink} to="/">
                            Justin Schaare
                        </Link>
                    </Heading>
                </Flex>

                <Stack
                    direction={{ base: 'column', md: 'row' }}
                    display={{ base: 'none', md: 'flex' }}
                    width={{ base: 'full', md: 'auto' }}
                    alignItems="center"
                    flexGrow={1}
                    mt={{ base: 4, md: 0 }}
                >

                    <Link as={RouterLink} to="/projects">
                        Projects
                    </Link>
                    <Link as={RouterLink} to="/posts">
                        Posts
                    </Link>
                </Stack>

                <Box  >
                    <ColorModeSwitcher />

                    <Box ml={2} display={{ base: 'inline-block', md: 'none' }}>
                        <Menu isLazy id="navbar-menu">
                            <MenuButton
                                as={IconButton}
                                icon={<HamburgerIcon />}
                                variant="outline"
                                aria-label="Options"
                            />
                            <MenuList>
                                <RouterLink to="/">
                                    <MenuItem as={Link}>About</MenuItem>
                                </RouterLink>
                                <RouterLink to="/projects">
                                    <MenuItem as={Link}>Projects</MenuItem>
                                </RouterLink>
                                <RouterLink to="/posts">
                                    <MenuItem as={Link}>Posts</MenuItem>
                                </RouterLink>
                            </MenuList>
                        </Menu>
                    </Box>
                </Box>
            </Container>
        </Box>
    )
}

export default Navbar;