import React, { ReactNode } from 'react';
// import Head from 'next/head';
import {
  Box,
  Heading,
  SimpleGrid,
  Switch,
  Container,
  Text,
  Button,
  Stack,
  Icon,
  useColorModeValue,
  createIcon,
} from '@chakra-ui/react';

import Post from './Post'

export default function Section() {
  return (
    <>
  
    <Stack direction='row' justifyContent="space-between" marginBottom="30px" marginTop="30px">
    <Heading>I'm a Heading</Heading> 
    <Switch colorScheme='teal' size='lg' />
    </Stack>
    <SimpleGrid columns={4} spacingX='40px' spacingY='20px'>
  <Post/>
  <Post/>
  <Post/>
  <Post/>
    </SimpleGrid>
    </>
)};
