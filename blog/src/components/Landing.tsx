import React, { ReactNode } from 'react'
import Image from '../images/banner1.png'
import { Box, useDisclosure, Select } from '@chakra-ui/react'
import { FiHome, FiHeart, FiStar, FiMenu } from 'react-icons/fi'
import { FaUserSecret, FaRobot, FaSkullCrossbones } from 'react-icons/fa'
import { IconType } from 'react-icons'
import { useContext, ReactText, ChangeEvent, ChangeEventHandler } from 'react'
import Section from './Section'
import { PostsContext } from '../context/postsContext'
import { PostsContextType } from '../types'

interface LinkItemProps {
    name: string
    icon: IconType
}
const LinkItems: Array<LinkItemProps> = [
    { name: 'Home', icon: FiHome },
    { name: 'Love', icon: FiHeart },
    { name: 'Fiction', icon: FaRobot },
    { name: 'Classic', icon: FiStar },
    { name: 'Crime', icon: FaSkullCrossbones },
    { name: 'Mystery', icon: FaUserSecret },
]

const Landing = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const { section, setShowSection } = useContext(
        PostsContext
    ) as PostsContextType

    const handleSelectChange = (
        event: React.ChangeEvent<HTMLSelectElement>
    ) => {
        setShowSection(event.target.value)
    }

    return (
        <Box ml={{ base: 0, md: 60 }} p="4">
            <Box
                backgroundImage={`url(${Image})`}
                backgroundSize="cover"
                backgroundRepeat="no-repeat"
                backgroundPosition="bottom"
                height="200px"
            ></Box>
            <Select
                placeholder="Filter"
                width="300px"
                margin="30px auto"
                onChange={handleSelectChange}
            >
                <option value="all">All</option>
                <option value="love">Love</option>
                <option value="fiction">Fiction</option>
                <option value="classic">Classic</option>
                <option value="mystery">Mystery</option>
                <option value="crime">Crime</option>
            </Select>
            <Box>
                {LinkItems.map((link) => {
                    if (section === 'all' && link.name !== 'Home') {
                        return <Section key={link.name} name={link.name} />
                    }
                    if (section === link.name.toLowerCase()) {
                        return <Section key={link.name} name={link.name} />
                    }
                    return
                })}
            </Box>
        </Box>
    )
}

export default Landing
