import * as React from 'react'
import { Routes, Route } from 'react-router-dom'
import HomePage from './components/HomePage'
import SectionPage from './components/SectionPage'
import {
    ChakraProvider,
    theme,
} from '@chakra-ui/react'


export const App = () => (
    <ChakraProvider theme={theme}>
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/home" element={<HomePage />} />
            <Route path="/:sectionName" element={<SectionPage />} />
        </Routes>

        <div className="App"></div>
    </ChakraProvider>
)
