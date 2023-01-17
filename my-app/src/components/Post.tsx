import * as React from 'react'
import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Flex,
    Badge,
    Avatar,
    Button,
    Text,
    IconButton,
    Box,
    Heading,
    Image,
    Tag,
} from '@chakra-ui/react'
import { BiLike, BiChat, BiShare } from 'react-icons/bi'
import { BsThreeDotsVertical } from 'react-icons/bs'

const Post = () => {
    return (
        <Card maxW="md">
            <CardHeader>
                <Flex>
                    <Flex
                        flex="1"
                        gap="4"
                        alignItems="center"
                        justifyContent="space-between"
                        flexWrap="wrap"
                    >
                        <Heading size="md">Segun Adebayo</Heading>
                        <Box>
                            <Badge
                                borderRadius="full"
                                px="2"
                                colorScheme="teal"
                            >
                                Score: 3
                            </Badge>
                        </Box>
                    </Flex>
                </Flex>
            </CardHeader>
            <CardBody>
                <Text>
                    With Chakra UI, I wanted to sync the speed of development
                    with the speed of design. I wanted the developer to be just
                    as excited as the designer to create a screen.
                </Text>
            </CardBody>
            <Image
                objectFit="cover"
                src="https://images.unsplash.com/photo-1531403009284-440f080d1e12?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                alt="Chakra UI"
            />

            <CardFooter
                // justify="space-between"
                gap="20px"
                flexWrap="wrap"
                sx={{
                    '& > button': {
                        minW: '136px',
                    },
                }}
            >
                <Tag size="sm" key="sm" variant="solid" colorScheme="teal">
                    Teal
                </Tag>
                <Tag size="sm" key="sm" variant="solid" colorScheme="teal">
                    Teal
                </Tag>

                <Tag size="sm" key="sm" variant="solid" colorScheme="teal">
                    Teal
                </Tag>

                {/* <Button flex="1" variant="ghost" leftIcon={<BiLike />}>
                    Like
                </Button>
                <Button flex="1" variant="ghost" leftIcon={<BiChat />}>
                    Comment
                </Button>
                <Button flex="1" variant="ghost" leftIcon={<BiShare />}>
                    Share
                </Button> */}
            </CardFooter>
        </Card>
    )
}

export default Post
