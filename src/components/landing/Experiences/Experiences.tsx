import { Stack, useBreakpointValue } from "@chakra-ui/react";
import useTranslation from "next-translate/useTranslation";
import technologies from '../../../assets/data/frameworks.json'
import ExperiencesWrap from "./ExperiencesWrap";

export interface FrameworksData {
    id: number,
    name: string,
    imageSrc: string
}

export default function Experiences(){
    const { t } = useTranslation('landing')

    const isLarge = useBreakpointValue({ base: false, lg: true })
    
    return(
        <Stack spacing={8}>
            <ExperiencesWrap array={technologies.frameworks} title={t('experienceWith')} priority priorTargets={[2]} large={isLarge} />

            <ExperiencesWrap array={technologies.languages} title={t('languages')} keepSize large={isLarge} />
        </Stack>
    )
}