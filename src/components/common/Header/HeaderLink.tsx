import { Link, useColorModeValue } from "@chakra-ui/react"
import NextLink from "next/link"

interface HeaderLinkProps { 
    href: string,
    text: string,
    next?: boolean
}

export default function HeaderLink({ href, text, next }: HeaderLinkProps){
    const color = useColorModeValue('c-gray', 'c-lightgray')

    //if next, render the nextLink
    if(next) return(
        <NextLink href={href} passHref>
            <Link color={color} fontFamily='Be Vietnam Pro, sans-serif' fontWeight='medium'>{text}</Link>
        </NextLink>
    )

    return <Link color={color} href={href} fontFamily='Be Vietnam Pro, sans-serif' fontWeight='medium'>{text}</Link>
    
}