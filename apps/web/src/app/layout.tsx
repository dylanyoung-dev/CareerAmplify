import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Layout',
    description: 'Layout component',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}