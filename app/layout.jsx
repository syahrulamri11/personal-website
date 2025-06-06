import React from 'react';
import Navbar from '@/components/navbar';
import Footer from '@/components/footer';
import '@/styles/globals.css';

export const metadata = {
  title: "Syahrul Amri",
  description: "Personal website of Syahrul Amri",
  icons: {
    icon: "/syahrullogo.ico",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen bg-background text-text font-sans">
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
