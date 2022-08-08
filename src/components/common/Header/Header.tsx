import { Flex, Icon, Stack, Text, useBreakpointValue, useColorModeValue } from "@chakra-ui/react";
import useTranslation from "next-translate/useTranslation";
import { AiFillThunderbolt } from "react-icons/ai";
import HeaderLink from "./HeaderLink";

export default function Header() {
    const { t } = useTranslation('landing') 

    const borderBottom = useColorModeValue('1px solid rgba(0,0,0,.15)','1px solid rgba(255,255,255,.5)')
    const headerSpacing = useBreakpointValue({ base: 2, lg : 8 }, { ssr: true })

    return(
        <Flex as='header'
          pos='sticky' top='0' w='100%'
          fontFamily='Inter, sans-serif'
          h='var(--header-size)' zIndex={5}
          justifyContent='space-between'
          alignItems='center' bg='chakra-body-bg'
          p='3' borderBottom={borderBottom}
        >
            <Stack direction='row' spacing={1}>
                <Icon as={AiFillThunderbolt} boxSize={6} borderRadius='full' color='c-white'  bg='c-blue' p='1' />

                <Text as='span' fontWeight='bold'>DP</Text>
            </Stack>

            <Stack direction='row' spacing={headerSpacing ?? 2}>
                <HeaderLink text={t('aboutTitle')} href='#about' />
                                    
                <HeaderLink text={t('skillsTitle')} href='#skills' />

                <HeaderLink text={t('contactTitle')} href='#contact' />
            </Stack>
        </Flex>
    )
}