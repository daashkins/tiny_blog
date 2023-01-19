import React from 'react'
import { Box, Heading, SimpleGrid, Switch, Stack } from '@chakra-ui/react'
import Post from './Post'
import { useContext } from 'react'
import { PostsContext } from '../context/postsContext'
import { PostsContextType } from '../types'

type Props = {
    name: string
}

const Section: React.FC<Props> = ({ name }) => {
    const [isChecked, setChecked] = React.useState(true)
    const { posts } = useContext(PostsContext) as PostsContextType
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        event.preventDefault()
        setChecked(!isChecked)
    }

    return (
        <Box
            background="#e3e3ec"
            marginTop="30px"
            marginBottom="30px"
            padding="20px"
            borderRadius="15px"
            position="relative"
        >
            <Stack
                direction="row"
                alignItems="center"
                gap="20px"
                marginBottom="30px"
                marginTop="30px"
            >
                <Heading>{name}</Heading>
                <Switch
                    colorScheme="teal"
                    size="lg"
                    defaultChecked
                    isChecked={isChecked}
                    onChange={handleChange}
                />
            </Stack>

            <SimpleGrid
                columns={4}
                flexWrap="wrap"
                spacingX="40px"
                spacingY="20px"
                justifyContent="center"
                display={isChecked ? 'flex' : 'none'}
            >
                {posts.map((post, index) => {
                    if (post.tags.includes(name.toLocaleLowerCase())) {
                        return <Post post={post} key={`${name}post${index}`} />
                    }
                    return null
                })}
            </SimpleGrid>
        </Box>
    )
}

export default Section
