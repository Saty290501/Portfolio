import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
    title: 'Riya Jagtap | Software Engineer',
    description: 'Software Engineer with experience in backend and cloud-native system development.',
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en" className="scroll-smooth">
            <body className={`${inter.className} bg-[#0f0f14] text-[#eaeaea] antialiased`}>
                <Navbar />
                <main className="flex min-h-screen flex-col items-center justify-between">
                    {children}
                </main>
            </body>
        </html>
    );
}
