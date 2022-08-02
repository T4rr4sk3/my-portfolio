import { Box, Flex, Icon, Spacer, Stack, Text, useColorMode } from "@chakra-ui/react";
import US from '../../assets/flags/us.svg'
import BR from '../../assets/flags/br.svg'
import Image from "next/image";
import useTranslation from "next-translate/useTranslation";
import setLanguage from 'next-translate/setLanguage'
import { MdDarkMode, MdLightMode } from 'react-icons/md'

export default function Locales(){
    const { lang, t } = useTranslation()

    const verifyLang = (toLang: 'pt' | 'en') => { if(lang != toLang) setLanguage(toLang, true) }

    const { toggleColorMode, colorMode } = useColorMode()

    return(
        <Stack direction='row-reverse' spacing={2}>
            <Box w='32px' h='24px' onClick={() => verifyLang('en')} border={lang === 'en'? '2px solid #E63462': undefined}>
                <Image src={US} width='32' height='24' />
            </Box>

            <Box w='32px' h='24px' onClick={() => verifyLang('pt')} border={lang === 'pt'? '2px solid #E63462': undefined}>
                <Image src={BR} width='32' height='24' />
            </Box>

            <Spacer />                      

            <Flex onClick={toggleColorMode} boxShadow='2px 2px 8px 0 rgba(0, 0, 0, .5)' borderRadius='full'>
                <Icon as={colorMode === "light"? MdDarkMode : MdLightMode } boxSize='6' />
            </Flex>
        </Stack>
    )
}