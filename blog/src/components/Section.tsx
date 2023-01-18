import React, { ReactNode } from 'react'
import {
    Box,
    Heading,
    SimpleGrid,
    Switch,
    Divider,
    IconButton,
    useBreakpointValue,
    Stack,
} from '@chakra-ui/react'
import { ChangeEventHandler } from 'react'
import Post from './Post'
import { useContext } from 'react'
import { PostsContext } from '../context/postsContext'
import { PostsContextType, IPost } from '../types'
import Slider from 'react-slick'
import { useState } from 'react'
import { BiLeftArrowAlt, BiRightArrowAlt } from 'react-icons/bi'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

type Props = {
    name: string
    // key: string
}

const sliderSettings = {
    arrows: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    infinite: false,
}

const Section: React.FC<Props> = ({ name }) => {
    const [isChecked, setChecked] = React.useState(true)
    const { posts } = useContext(PostsContext) as PostsContextType
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        event.preventDefault()
        setChecked(!isChecked)
    }
    const [slider, setSlider] = React.useState<Slider | null>(null)
    const top = useBreakpointValue({ base: '90%', md: '50%' })
    const side = useBreakpointValue({ base: '30%', md: '10px' })

    return (
        <Box
            background="#e3e3ec"
            marginTop="30px"
            marginBottom="30px"
            padding="20px"
            borderRadius="15px"
            position="relative"
        >
            {/* <Divider height="3px" /> */}
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
                })}
            </SimpleGrid>
        </Box>
    )
}

export default Section
