import { extendTheme } from "@chakra-ui/react";

export const myTheme = extendTheme({
    colors: {
        'c-black': '#342E37',
        'c-white': '#FFFFFF',
        'c-blue': '#35A7FF',
        'c-pink': '#EDC4C4',
        'c-gray': '#9A979B',
        'c-lightgray': '#E6E5E6'
    },
    fontSizes: {
        subTitle: '18px',
        title: '24px',
        'title-lg': '36px',
        'subTitle-lg': '30px'
    },
    config:{
        useSystemColorMode: true,
    },
    semanticTokens: {
        colors: {
            primary: '#EDC4C4',
            secondary: {
                default: '#FFF',
                __dark: '#342E37'
            }

        }
    },    
    styles: {
        global: {
            html:{
              scrollBehavior: 'smooth'
            }
        }
    }
})