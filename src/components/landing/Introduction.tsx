import { Circle, Stack, Text } from "@chakra-ui/react";
import useTranslation from "next-translate/useTranslation";
import Image from "next/image";

export default function Introduction(){
    const { t } = useTranslation('landing')

    return(
        <Stack spacing={5} px='8' textAlign='center' pt='4' maxW='380px'>
            <Circle border='1px solid #EDC4C4' maxWidth='154px' overflow='hidden' alignSelf='center'>
                <Image src='/myphoto.webp' alt='me' width='154' height='154' placeholder="empty" />
            </Circle>

            <Text fontWeight='medium' dangerouslySetInnerHTML={{ __html: t('aboutContentPhrase') }} />

            <Text fontWeight='bold' whiteSpace='pre-wrap'>{t('aboutContentAuthor')}</Text>
        </Stack>
    )
}