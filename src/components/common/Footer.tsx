import { Flex, Link, Text } from "@chakra-ui/react";
import useTranslation from "next-translate/useTranslation";
import { FiArrowUp } from 'react-icons/fi'

export default function Footer(){
    const { t } = useTranslation('landing')

    return(//more pratical to just put a "Go Back to Top button here, but maybe it will change"
        <>
            <Flex w='100%' justifyContent='center'>
                <FiArrowUp size='1.5rem' />
                <Link fontFamily='Be Vietnam Pro, sans-serif' href='#__next'>{t('goBackToTop')}</Link>
            </Flex>
            
            <Flex w='100%' as='footer' bg='c-blue' fontFamily='Inter, sans-serif' py='2' px='1' color='chakra-body-bg' justifyContent='center'>
                <Text as='span' fontWeight='semibold'>{t('footerText')}</Text>
            </Flex>
        </>
    )
}