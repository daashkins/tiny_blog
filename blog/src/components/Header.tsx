import React, { ReactNode } from 'react'
import Image from '../images/banner1.png'
import {
    IconButton,
    Avatar,
    Box,
    CloseButton,
    Button,
    Flex,
    HStack,
    VStack,
    Icon,
    useColorModeValue,
    Link,
    Drawer,
    DrawerContent,
    Text,
    useDisclosure,
    BoxProps,
    FlexProps,
    Select,
} from '@chakra-ui/react'
import { FiHome, FiHeart, FiStar, FiMenu } from 'react-icons/fi'
import { FaUserSecret, FaRobot, FaSkullCrossbones } from 'react-icons/fa'
import { IconType } from 'react-icons'
import { useContext, ReactText, ChangeEvent, ChangeEventHandler } from 'react'
import Section from './Section'
import { PostsContext } from '../context/postsContext'
import { PostsContextType } from '../types'

interface LinkItemProps {
    name: string
    icon: IconType
}

const breakpoints = {
    sm: '320px',
    md: '768px',
    lg: '960px',
    xl: '1200px',
    '2xl': '1536px',
}
const LinkItems: Array<LinkItemProps> = [
    { name: 'Home', icon: FiHome },
    { name: 'Love', icon: FiHeart },
    { name: 'Fiction', icon: FaRobot },
    { name: 'Classic', icon: FiStar },
    { name: 'Crime', icon: FaSkullCrossbones },
    { name: 'Mystery', icon: FaUserSecret },
]

const Header = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const { section, setShowSection } = useContext(
        PostsContext
    ) as PostsContextType

    const handleSelectChange = (
        event: React.ChangeEvent<HTMLSelectElement>
    ) => {
        setShowSection(event.target.value)
    }

    return (
        <Box minH="100vh" bg={useColorModeValue('gray.100', 'gray.900')}>
            <SidebarContent
                onClose={() => onClose}
                display={{ base: 'none', md: 'block' }}
            />
            <Drawer
                autoFocus={false}
                isOpen={isOpen}
                placement="left"
                onClose={onClose}
                returnFocusOnClose={false}
                onOverlayClick={onClose}
                size="full"
            >
                <DrawerContent>
                    <SidebarContent onClose={onClose} />
                </DrawerContent>
            </Drawer>
            <MobileNav onOpen={onOpen} />
            <Box ml={{ base: 0, md: 60 }} p="4">
                <Box
                    backgroundImage={`url(${Image})`}
                    backgroundSize="cover"
                    backgroundRepeat="no-repeat"
                    backgroundPosition="bottom"
                    height="200px"
                ></Box>
                <Select
                    placeholder="Filter"
                    width="300px"
                    margin="30px auto"
                    onChange={handleSelectChange}
                >
                    <option value="all">All</option>
                    <option value="love">Love</option>
                    <option value="fiction">Fiction</option>
                    <option value="classic">Classic</option>
                    <option value="mystery">Mystery</option>
                    <option value="crime">Crime</option>
                </Select>
                <Box>
                    {LinkItems.map((link) => {
                        if (section === 'all' && link.name !== 'Home') {
                            return <Section key={link.name} name={link.name} />
                        }
                        if (section === link.name.toLowerCase()) {
                            return <Section key={link.name} name={link.name} />
                        }
                        return
                    })}
                </Box>
            </Box>
        </Box>
    )
}

interface SidebarProps extends BoxProps {
    onClose: () => void
}

const SidebarContent = ({ onClose, ...rest }: SidebarProps) => {
    return (
        <Box
            transition="3s ease"
            bg={useColorModeValue('white', 'gray.900')}
            borderRight="1px"
            borderRightColor={useColorModeValue('gray.200', 'gray.700')}
            w={{ base: 'full', md: 60 }}
            pos="fixed"
            h="full"
            {...rest}
        >
            <Flex
                h="20"
                alignItems="center"
                mx="8"
                justifyContent="space-between"
            >
                <Text fontSize="2xl" fontFamily="monospace">
                    Bright book
                </Text>
                <CloseButton
                    display={{ base: 'flex', md: 'none' }}
                    onClick={onClose}
                />
            </Flex>
            {LinkItems.map((link) => (
                <NavItem key={link.name} icon={link.icon}>
                    {link.name}
                </NavItem>
            ))}
        </Box>
    )
}

interface NavItemProps extends FlexProps {
    icon: IconType
    children: ReactText
}
const NavItem = ({ icon, children, ...rest }: NavItemProps) => {
    return (
        <Link
            href="#"
            style={{ textDecoration: 'none' }}
            _focus={{ boxShadow: 'none' }}
        >
            <Flex
                align="center"
                p="4"
                mx="4"
                borderRadius="lg"
                role="group"
                cursor="pointer"
                _hover={{
                    bg: 'cyan.400',
                    color: 'white',
                }}
                {...rest}
            >
                {icon && (
                    <Icon
                        mr="4"
                        fontSize="16"
                        _groupHover={{
                            color: 'white',
                        }}
                        as={icon}
                    />
                )}
                {children}
            </Flex>
        </Link>
    )
}

interface MobileProps extends FlexProps {
    onOpen: () => void
}
const MobileNav = ({ onOpen, ...rest }: MobileProps) => {
    return (
        <Flex
            ml={{ base: 0, md: 60 }}
            px={{ base: 4, md: 4 }}
            height="20"
            alignItems="center"
            bg={useColorModeValue('white', 'gray.900')}
            borderBottomWidth="1px"
            borderBottomColor={useColorModeValue('gray.200', 'gray.700')}
            justifyContent={{ base: 'space-between', md: 'flex-end' }}
            {...rest}
        >
            <IconButton
                display={{ base: 'flex', md: 'none' }}
                onClick={onOpen}
                variant="outline"
                aria-label="open menu"
                icon={<FiMenu />}
            />
            <HStack spacing={{ base: '0', md: '6' }}>
                <Text
                    fontSize={{ base: '24px', md: '40px', lg: '40px' }}
                    // fontSize={{ base: '3xl', xl: '3xl', lg:'3xl',  xs: '2xl' }}
                    fontFamily="Roboto Mono"
                    fontWeight="bold"
                >
                    A tiny reading blog
                </Text>
            </HStack>
        </Flex>
    )
}

export default Header
