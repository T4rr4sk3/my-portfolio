import { Circle, Flex, HStack, Icon, Text } from "@chakra-ui/react"
import { memo, useState } from "react"
import { IconType } from "react-icons"
import { SiReact } from 'react-icons/si'

interface SkillProps{
    name: string,
    qty: number,
    iconName: string
}

function Skill({ name, qty, iconName }: SkillProps){
    const [icon, setIcon] = useState<IconType>(() => (SiReact))

    //import icon on rendering if icon is different from iconName
    if(icon.name !== iconName)
        import('react-icons/si').then( (module) => { 
            //if icon is different from iconName or trying to catch module icon it catches module default(not found)
            if(module[iconName] !== module.default) 
                setIcon(() => module[iconName] as IconType)
        })
        .catch((reason) => { console.log(reason) } )    

    //point element
    const point = (filled?: boolean, key?: any) => <Circle key={key} size={4} bg={filled ?'c-blue': 'c-white'} borderWidth='2px' borderStyle='solid' borderColor='chakra-body-text' />
    //number of points
    const nOfPoints = 6

    //too light to use 'useMemo'
    function putPoints() {
        const elements: JSX.Element[] = []

        for(let i=0; i < nOfPoints; i++) //i don't need a constant key because they always will be the same
            elements.push( point(i < qty, i) )
        
        return elements
    }

    return(
        <Flex justifyContent='space-between' w='100%'>
            <Flex alignItems='center'>
                <Icon as={icon} boxSize={8} mr='2' />

                <Text as='span' fontSize='subTitle' fontWeight='semibold'>{name}</Text>
            </Flex>

            <HStack spacing={2}>{putPoints()}</HStack>
        </Flex>
    )
}

export default memo(Skill)