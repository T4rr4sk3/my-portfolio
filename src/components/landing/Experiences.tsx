import { Box, Stack, Text, useBreakpointValue, Wrap, WrapItem } from "@chakra-ui/react";
import useTranslation from "next-translate/useTranslation";
import Image from "next/image";
import technologies from '../../assets/data/frameworks.json'

interface ThisStyles {
    fontSize: string,
    pt?: string | number,
    spacing: number,
    w: number, 
    h: number,
    py: string | number,
    maxW?: string
}

export default function Experiences(){
    const { t } = useTranslation('landing')

    const isLarge = useBreakpointValue({ base: false, lg: true })

    const styles: ThisStyles = isLarge ? 
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

    const WrapBox = ({ array, title, keepSize }: { array: any[], title: string, keepSize?: boolean }) => (
        <Box w='100%' textAlign='center' pt={styles.pt}>
            <Text fontSize={styles.fontSize} fontWeight='semibold'>{t(title)}</Text>

            <Wrap justify='center' marginInline='auto' py={styles.py} spacing={styles.spacing} bg='white' borderRadius='12px'>
                {array.map(data => (
                    <WrapItem key={data.id}>
                        <Image src={'/images/' + data.imageSrc} alt={data.name} title={data.name} objectFit='contain' width={keepSize? 50: styles.w} height={keepSize? 50: styles.h} />
                    </WrapItem>
                ))}
            </Wrap>
        </Box>
    )
    
    return(
        <Stack spacing={8}>
            <WrapBox array={technologies.frameworks} title='experienceWith' />

            <WrapBox array={technologies.languages} title='languages' keepSize />
        </Stack>
    )
}