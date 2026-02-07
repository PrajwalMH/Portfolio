// app/layout.js
import Navbar from './navbar';
import Footer from './footer';
import './globals.css';

export const metadata = {
  title: "Prajwal's Portfolio",
  description: "Portfolio website for Prajwal Mrithyunjay Hulamani",
  icons: {
    icon: "/icon.png?v=6",
    shortcut: "/icon.png?v=6",
    apple: "/icon.png?v=6",
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
