import React, { ReactNode } from 'react'
// import Head from 'next/head';
import {
    Box,
    Heading,
    SimpleGrid,
    Switch,
    Divider,
    Container,
    Text,
    Button,
    Stack,
    Icon,
    useColorModeValue,
    createIcon,
} from '@chakra-ui/react'

import Post from './Post'

export default function Section() {
    return (
        <>
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
                    <Heading>I'm a Heading</Heading>
                    <Switch colorScheme="teal" size="lg" />
                </Stack>
                <SimpleGrid columns={4} spacingX="40px" spacingY="20px">
                    <Post />
                    <Post />
                    <Post />
                    <Post />
                </SimpleGrid>
            </Box>
        </>
    )
}
