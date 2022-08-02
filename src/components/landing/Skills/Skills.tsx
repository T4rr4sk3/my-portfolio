import { Stack, StackDivider, Text } from "@chakra-ui/react";
import useTranslation from "next-translate/useTranslation";
import Skill from "./Skill";
import skills from "../../../assets/data/skills.json"

export default function Skills(){
    const { t } = useTranslation('landing')

    return(
        <Stack
          spacing={2} pt='calc(12px + var(--header-size))' id='skills' w={[null, null, '600px']}
          divider={<StackDivider borderColor='chakra-border-color' />}
        >
            <Text textAlign='center' fontWeight='bold' fontSize='title'>{t('skillsTitle')}</Text>

            {skills.map( skill => <Skill key={skill.id} {...skill} /> )}
        </Stack>
    )
}