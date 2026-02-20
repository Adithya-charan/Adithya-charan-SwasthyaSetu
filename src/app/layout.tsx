import type { Metadata } from 'next'
import { Manrope } from 'next/font/google'
import './globals.css'
import { AuthProvider } from '@/context/AuthContext';

const manrope = Manrope({ subsets: ['latin'] })

export const metadata: Metadata = {
    title: 'TeleHealth Pro - Virtual Consultation',
    description: 'Connect with doctors, manage prescriptions, and track your health.',
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
            <body className={manrope.className}>
                <AuthProvider>{children}</AuthProvider>
            </body>
        </html>
    )
}
