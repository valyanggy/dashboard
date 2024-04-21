import { Inter, Lusitana } from 'next/font/google';
//import local font
// import localFont from '@/public/fonts/GreedStandard-Medium.woff'
// import localFont from 'next/font/local'

//configure our local font object
// export const greed = localFont({ src:'./GreedStandard-Medium.woff', display:'swap' })


export const inter = Inter({subsets: ['latin']});

export const lusitana = Lusitana({
    subsets: ['latin'],
    weight: ['400', '700'],
    display: 'swap',
})
