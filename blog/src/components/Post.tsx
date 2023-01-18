import * as React from 'react'
import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Flex,
    Badge,
    Text,
    Box,
    Heading,
    Image,
    Tag,
} from '@chakra-ui/react'
import { PostsContextType, IPost } from '../types'

type Props = {
    key: string
    post: IPost
}

const Post = ({post}) => {
    return (
        <Card maxW="md" key={Math.random()}>
            <CardHeader>
                <Flex>
                    <Flex
                        flex="1"
                        gap="4"
                        alignItems="center"
                        justifyContent="space-between"
                        flexWrap="wrap"
                    >
                        <Heading size="md">{post.title}</Heading>
                        <Box>
                            <Badge
                                borderRadius="full"
                                px="2"
                                colorScheme="teal"
                            >
                                Score: {post.reactions}
                            </Badge>
                        </Box>
                    </Flex>
                </Flex>
            </CardHeader>
            <CardBody>
                <Text>
                    {post.body}
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
                {post.tags.map((tag) =><Tag size="sm" key="sm1" variant="solid" colorScheme="teal">
                    {tag}
                </Tag> )}
                
                {/* <Tag size="sm" key="sm2" variant="solid" colorScheme="teal">
                    Teal
                </Tag>

                <Tag size="sm" key="sm3" variant="solid" colorScheme="teal">
                    Teal
                </Tag> */}
            </CardFooter>
        </Card>
    )
}

export default Post
