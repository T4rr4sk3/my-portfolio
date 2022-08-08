import { Stack } from '@chakra-ui/react'
import type { NextPage } from 'next'
import BaseLayout from '../components/common/BaseLayout'
import AboutMe from '../components/landing/AboutMe'
import Contact from '../components/landing/Contact'
import Experiences from '../components/landing/Experiences/Experiences'
import Introduction from '../components/landing/Introduction'
import Locales from '../components/landing/Locales'
import Skills from '../components/landing/Skills/Skills'

const Home: NextPage = () => 
(
  <BaseLayout>
    <Stack spacing='10' alignItems='center'>
      <Locales />

      <Introduction />

      <AboutMe />

      <Skills />

      <Experiences />

      <Contact />      
    </Stack>
  </BaseLayout>
)

export default Home