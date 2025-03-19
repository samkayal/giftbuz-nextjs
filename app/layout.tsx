import './globals.css'
import { Inter } from 'next/font/google'
import GoogleAnalytics from '@/lib/GoogleAnalytics'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'GiftBuz - Custom Gifting Solutions',
  description: 'Your one-stop destination for personalized gifting solutions in Kolkata',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {process.env.NEXT_PUBLIC_GA_ID && (
          <GoogleAnalytics GA_MEASUREMENT_ID={process.env.NEXT_PUBLIC_GA_ID} />
        )}
        {children}
      </body>
    </html>
  )
}