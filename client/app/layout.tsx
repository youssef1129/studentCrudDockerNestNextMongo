import './globals.css'
import Main from './Main'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head />
      <body>
        <Main>
          {children}
        </Main>
      </body>
    </html >
  )
}
