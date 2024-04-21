import '@/app/ui/global.css';
// import { inter } from '@/app/ui/fonts';
// import { greed } from '@/app/ui/fonts';
import localFont from 'next/font/local';
// import { lusitana } from '@/app/ui/fonts';

const greed = localFont({
  src: './GreedStandard-Medium.woff',
  display: 'swap',

});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${greed.className} antialiased`}>{children}</body>
    </html>
  );
}
