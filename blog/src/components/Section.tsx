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

type Props = {
    name: string
}

const  Section : React.FC<Props> = ({name})=> {

    const [isChecked, setChecked] = React.useState(true)

    const handleChange :ChangeEventHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        event.preventDefault()
        setChecked(!isChecked)
    }

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
                    <Heading>{name}</Heading>
                    <Switch colorScheme="teal" size="lg" defaultChecked isChecked={isChecked} onChange={handleChange}/>
                </Stack>
                <SimpleGrid columns={4} spacingX="40px" spacingY="20px"  
                            display={isChecked? "flex" : "none"} >
                    <Post />
                    <Post />
                    <Post />
                    <Post />
                </SimpleGrid>
            </Box>
        </>
    )
}

export default  Section;
