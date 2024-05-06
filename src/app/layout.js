import { font } from "@/utils/fonts";
import "./globals.css";
import Layout from "../components/layout/Layout";
import NextAuthProvider from "../providers/NextAuthProvider";



export const metadata = {
  title: "املاک",
  description: "سایت خرید و فروش املاک",
  icons: {icon: "./favicon.ico"}
};

export default function RootLayout({ children }) {
  return (
    <html lang="fa" dir="rtl">
      <body className={font.className}>
        <NextAuthProvider>
           <Layout>{children}</Layout>
        </NextAuthProvider>
       
        </body>
    </html>
  );
}
