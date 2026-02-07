// app/layout.js
import Navbar from './navbar';
import Footer from './footer';
import './globals.css';

export const metadata = {
  title: "Prajwal's Portfolio",
  description: "Portfolio website for Prajwal Mrithyunjay Hulamani",
  icons: {
    icon: "/layout.jpg",
    shortcut: "/layout.jpg",
    apple: "/layout.jpg",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}

