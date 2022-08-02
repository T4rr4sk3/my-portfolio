import { Flex, Icon, Link, Stack, StackDivider, Text, useBreakpointValue } from "@chakra-ui/react";
import useTranslation from "next-translate/useTranslation";
import { IconType } from "react-icons";
import { FiGithub, FiLinkedin, FiMail, FiPhone } from 'react-icons/fi'

export default function Contact(){
    const { t } = useTranslation('landing')

    const isLarge = useBreakpointValue({ base: false, lg: true })

    const iconText = (icon: IconType, text: string, href?: string) => (
        <Flex alignItems='center' fontWeight='medium'>
            <Icon as={icon} boxSize={6} mr='2' />
            
            { href ? <Link href={href} target='_blank'>{text}</Link>
                : <Text as='span'>{text}</Text>
            }
        </Flex>
    )
    
    return(
        <Flex flexDir='column' py='var(--header-size)'>
            <Text fontSize='title' textAlign='center' w='100%' fontWeight='bold' pb={isLarge? 12: 4}>{t('contactTitle')}</Text>

            <Stack
              spacing={isLarge? 10 : 2.5} id='contact' 
              direction={isLarge? 'row': 'column'}
              divider={ isLarge? <StackDivider borderColor='gray.400' />: undefined }
            >
                {iconText(FiMail, 'danielfpelajo@hotmail.com', 'mailto:danielfpelajo@hotmail.com')}

                {iconText(FiPhone, '(BR) +55 21 98056-1014')}

                {iconText(FiLinkedin, 'My LinkedIn: Daniel Pelajo', 'https://www.linkedin.com/in/daniel-pelajo-b88863183/')}

                {iconText(FiGithub, 'My GitHub: t4rr4sk3', 'https://github.com/T4rr4sk3')}
            </Stack>
        </Flex>
    )
}