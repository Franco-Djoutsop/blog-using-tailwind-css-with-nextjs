import Header from '@/components/header'
import Footer from '@/components/footer'
import Head from 'next/head'

export default function layout({children}){
    return(
        <>
            <Head><title>Blog</title></Head>

            <Header></Header>
                <main>{children}</main>
            <Footer></Footer>
        </>
    )
}