import { Montserrat, Open_Sans } from 'next/font/google';
import './globals.css';
import Link from 'next/link';

const montserrat = Montserrat({ subsets: ['latin'] });
const openSans = Open_Sans({ subsets: ['latin'] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={openSans.className}>
        <header className={`${montserrat.className} sticky top-0 z-50 bg-white/90 backdrop-blur-md shadow-md transition-all duration-300`}>
          <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-20">
              <div className="flex items-center">
                <Link href="/" className="group flex items-center">
                  <span className="text-2xl font-bold bg-gradient-to-r from-teal-500 to-blue-600 bg-clip-text text-transparent transition-all duration-300 group-hover:scale-105">AquaGrow</span>
                </Link>
              </div>
              <div className="flex space-x-10 items-center">
                <Link href="/" className="relative group py-2">
                  <span className="text-gray-700 font-medium group-hover:text-teal-600 transition-colors duration-300">Home</span>
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-teal-600 group-hover:w-full transition-all duration-300"></span>
                </Link>
                <Link href="/products" className="relative group py-2">
                  <span className="text-gray-700 font-medium group-hover:text-teal-600 transition-colors duration-300">Produce</span>
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-teal-600 group-hover:w-full transition-all duration-300"></span>
                </Link>
                <Link href="/contact" className="relative group py-2">
                  <span className="text-gray-700 font-medium group-hover:text-teal-600 transition-colors duration-300">Contact</span>
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-teal-600 group-hover:w-full transition-all duration-300"></span>
                </Link>
              </div>
              <div className="flex items-center">
                <button className="flex items-center space-x-1 px-4 py-2 rounded-full bg-teal-500 text-white font-medium hover:bg-teal-600 transition-all duration-300 transform hover:-translate-y-0.5 hover:shadow-md">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                  <span>Cart (0)</span>
                </button>
              </div>
            </div>
          </nav>
        </header>
        <main>{children}</main>
      </body>
    </html>
  );
}
