"use client"
import "@/styles/globals.css";
import 'react-toastify/dist/ReactToastify.css';
import MainNavigation from "@/components/MainNavigation";
import { ToastContainer } from 'react-toastify';
import Footer from "@/components/Footer";
import MobileMenu from "@/components/MobileMenu";
import useMenu from "@/hooks/useMenu";
import Loading from "./loading";
import { Suspense } from "react";

export default function RootLayout({ children }) {
  const { open, toggleMenu } = useMenu()

  return (
    <html lang="fa" dir="rtl">
      <head>
        <meta name="theme-color" content="#FF705D" />
        <title>پورتفولیو | هامون</title>
      </head>
      <body className="font-hamrah bg-secondary scrollbar scrollbar-w-1 scrollbar-thumb-primary scrollbar-thumb-rounded-full scrollbar-track-rounded-full overflow-x-hidden">
        <Suspense fallback={<Loading />}>
          <MainNavigation open={open} toggleMenu={toggleMenu} />
          <ToastContainer className={`font-hamrah`} />
          <MobileMenu open={open} hide={toggleMenu} />
          {children}
          <Footer />
        </Suspense>
      </body>
    </html>
  );
}
