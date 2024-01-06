import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

import { AppRouterCacheProvider } from '@mui/material-nextjs/v13-appRouter';
import Box from "@mui/material/Box";

import Navbar from './components/Navbar';
import AuthProvider from './context/AuthProvider';

const inter = Inter({ subsets: ['latin'] })

export const revalidate = 3600

export const metadata: Metadata = {
  title: 'Image Gallery',
  description: 'Next.js Image Gallery App',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AppRouterCacheProvider>
          <AuthProvider>
            <Navbar />
            <Box component='main' sx={{p: 3, display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
              {children}
            </Box>
          </AuthProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  )
}
