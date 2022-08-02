import { Box } from "@chakra-ui/react";
import Head from "next/head";
import Footer from "./Footer";
import Header from "./Header/Header";

interface BaseLayoutProps {
    title?: string,
    description?: string,
    children: React.ReactNode
}

export default function BaseLayout({ title = "PortFolio - Daniel Pelajo", description = "Meu portfólio criado com next", children }: BaseLayoutProps){    
    return(
        <>
            <Head>
                <title>{title}</title>
                <meta name="description" content={description} />                
            </Head>

            <Header />            

            <Box px='6' py='3' as='main' fontFamily='Inter, sans-serif' id='main'>
                {children}
            </Box>

            <Footer />
        </>
    )
}