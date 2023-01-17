import * as React from 'react'
import { Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import {
    ChakraProvider,
  Box,
  Text,
  Link,
  VStack,
  Code,
  Grid,
  theme,
} from '@chakra-ui/react'

export const App = () => (
    <ChakraProvider theme={theme}>
      <>
            <Routes>
                <Route path="/" element={<Header />} />
            </Routes>

            <div className="App">
            </div>
        </>    
        {/* <Box textAlign="center" fontSize="xl">
            <Header /> */}
            {/* <Grid minH="100vh" p={3}>
        
      </Grid> */}
        {/* </Box> */}
    </ChakraProvider>
)
