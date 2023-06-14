import './globals.css'

export const metadata = {
  title: 'New Next Rick and Morty app',
  description: 'Developed by Okechukwu',
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
