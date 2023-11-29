import { Thelayout } from '@/components/TheLayout'
import type { Metadata } from 'next'
import { Providers } from "./provider"

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body >
        <Providers>
          <Thelayout>
            {children}
          </Thelayout>
        </Providers>
      </body>
    </html>
  )
}
