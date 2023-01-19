import React from 'react'
import Image from '../images/banner1.png'
import { Box} from '@chakra-ui/react'
import { FiHome, FiHeart, FiStar } from 'react-icons/fi'
import { FaUserSecret, FaRobot, FaSkullCrossbones } from 'react-icons/fa'
import { IconType } from 'react-icons'
import Section from './Section'
import { useParams } from 'react-router-dom'

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

const SectionMain = () => {
    let { sectionName } = useParams()

    return (
        <Box ml={{ base: 0, md: 60 }} p="4">
            <Box
                backgroundImage={`url(${Image})`}
                backgroundSize="cover"
                backgroundRepeat="no-repeat"
                backgroundPosition="bottom"
                height="200px"
            ></Box>
            <Box>
                {LinkItems.map((link) => {
                    if (sectionName === link.name) {
                        return <Section key={link.name} name={link.name} />
                    }
                    return null
                })}
            </Box>
        </Box>
    )
}

export default SectionMain
