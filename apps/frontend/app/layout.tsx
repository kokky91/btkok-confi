import '@/styles/globals.css'
import NavBar from '@/components/NavBar'

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="nl">
      <body className="font-sans antialiased text-gray-900 bg-gray-50">
        <NavBar />
        <main className="max-w-6xl min-h-screen px-4 py-6 mx-auto">
          {children}
        </main>
      </body>
    </html>
  );
}




