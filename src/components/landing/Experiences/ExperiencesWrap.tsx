import { Box, Text, Wrap, WrapItem } from "@chakra-ui/react"
import Image from "next/image"
import { FrameworksData } from "./Experiences"

interface ThisStyles {
    fontSize: string,
    pt?: string | number,
    spacing: number,
    w: number, 
    h: number,
    py: string | number,
    maxW?: string
}

interface WrapBoxProps {
    array: FrameworksData[], 
    title: string,
    /** Indicates that the images need to keep their sizes even if the width of the screen change. */ 
    keepSize?: boolean,
    /** Indicates that the images needs the `priority` property. */
    priority?: boolean,
    /** The image ids that needs to be priorized where `priority` is enabled. if none, all images will be priorized. */
    priorTargets?: number[],
    large?: boolean,
}
export default function ExperiencesWrap({ array, title, keepSize, priority, priorTargets, large }: WrapBoxProps) {
    
    const styles: ThisStyles = large ? 
    { //Large
        fontSize:'title',
        spacing: 8,
        w: 120, h: 120,
        maxW: '100%',
        py: 8, pt: 10
    } : 
    { //Normal
        fontSize:'subTitle',
        spacing: 3,
        w: 50, h: 50,
        py: 4
    }

    const priorityAll = (priority ?? false) && (!priorTargets || priorTargets.length === 0)
    
    return (
        <Box w='100%' textAlign='center' pt={styles.pt}>
            <Text fontSize={styles.fontSize} fontWeight='semibold' mb={4}>{title}</Text>

            <Wrap justify='center' marginInline='auto' py={styles.py} spacing={styles.spacing} bg='white' borderRadius='12px'>
                {array.map(data => (
                    <WrapItem key={data.id}>
                        <Image
                          priority={priorityAll || (priorTargets ? priorTargets.indexOf(data.id) !== -1 : false)}
                          src={'/images/' + data.imageSrc}
                          alt={data.name} title={data.name}
                          width={keepSize? 50: styles.w}
                          height={keepSize? 50: styles.h}
                          objectFit='contain'
                        />
                    </WrapItem>
                ))}
            </Wrap>
        </Box>
    )
}