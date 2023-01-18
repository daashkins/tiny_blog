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
import { ColorModeSwitcher } from './ColorModeSwitcher'
import { Logo } from './Logo'

export const App = () => (
    <ChakraProvider theme={theme}>
        {/* <> */}
            <Routes>
                <Route path="/" element={<Header />} />
            </Routes>

            <div className="App">
                {/* <Header /> */}
            </div>
        {/* </> */}
    </ChakraProvider>
)
