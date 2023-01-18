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
    useFocusEffect,
} from '@chakra-ui/react'
import { PostsContextType, IPost } from '../types'
import { useEffect } from 'react'
import axios from 'axios'

type Props = {
    // key: string
    post: IPost
}

const Post = ({ post }) => {
    const [image, setImage] = React.useState<string>(
        'https://images.unsplash.com/photo-1531403009284-440f080d1e12?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80'
    )

    useEffect(() => {
        axios
            .get(
                `https://api.unsplash.com/search/photos?query=${post.tags[0]}&page=1&client_id=${process.env.REACT_APP_UNSPLASH}`
            )
            .then((response) => {
                setImage(
                    response.data.results[Math.floor(Math.random() * 5)].urls
                        .small
                )
            })
    })

    return (
        <Card maxW="xs" key={Math.random()} position="relative" height="550px">
            <CardHeader position="relative">
                <Heading size="md" height="50px" marginTop="5">
                    {post.title}
                </Heading>
                <Badge
                    borderRadius="full"
                    px="2"
                    colorScheme="teal"
                    position="absolute"
                    right="2"
                    top="2"
                >
                    Score: {post.reactions}
                </Badge>
            </CardHeader>
            <CardBody
                height="200px"
                marginBottom="30px"
                overflow="auto"
                boxSizing="border-box"
            >
                <Text fontSize="14px">{post.body}</Text>
            </CardBody>
            <Image height="200" objectFit="cover" src={image} alt="Chakra UI" />

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
                {post.tags.map((tag) => (
                    <Tag
                        size="sm"
                        key={`${Math.random()}`}
                        variant="solid"
                        colorScheme="teal"
                    >
                        {tag}
                    </Tag>
                ))}
            </CardFooter>
        </Card>
    )
}

export default Post
