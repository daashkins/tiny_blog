import React, { ReactNode } from 'react'
import {
    Box,
    Heading,
    SimpleGrid,
    Switch,
    Divider,
    Stack,
} from '@chakra-ui/react'
import { ChangeEventHandler } from 'react'
import Post from './Post'
import { useContext } from 'react'
import { PostsContext } from '../context/postsContext'
import { PostsContextType, IPost } from '../types'

type Props = {
    name: string
    key: string
}

const Section: React.FC<Props> = ({ name }) => {
    const [isChecked, setChecked] = React.useState(true)
    const { posts } = useContext(PostsContext) as PostsContextType
    const handleChange = (
        event: React.ChangeEvent<HTMLInputElement>
    ) => {
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
            >
                <Divider height="3px" />
                <Stack
                    direction="row"
                    // justifyContent="space-between"
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
                    spacingX="40px"
                    spacingY="20px"
                    display={isChecked ? 'flex' : 'none'}
                >
                {posts.map((post, index) => {
                    console.log(name)

                    if(post.tags.includes(name.toLocaleLowerCase())){
                        return <Post post={post} key={`${name}post${index}`} />
                    }
})}
                </SimpleGrid>
            </Box>
    )
}

export default Section
