import { Stack, Text } from "@chakra-ui/react";
import useTranslation from "next-translate/useTranslation";

export default function AboutMe(){
    const { t } = useTranslation('landing')

    return(
        <Stack spacing={4} fontWeight='medium' id='about' pt='calc(12px + var(--header-size))' maxW='720px' textAlign='center'>
            <Text fontWeight='bold' fontSize='title'>
                {t('aboutTitle')}
            </Text>

            {/* Separated in three in case of doing something else more complex with the same text */}
            <Text>{t('aboutText_1')}</Text>

            <Text>{t('aboutText_2')}</Text>

            <Text>{t('aboutText_3')}</Text>
        </Stack>
    )
}