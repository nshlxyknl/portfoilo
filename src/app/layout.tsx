
import { ThemeProvider } from "@/context/ThemeProvider";
import "./globals.css";
import { Navbar } from "@/components/compo/Navbar";
import { Metadata } from "next";


export const metadata: Metadata = {
  title: "nis",
  icons: {
    icon: "/2.png", 
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body  >
        <ThemeProvider>
                <Navbar />

           {children}
        </ThemeProvider>
       
      </body>
    </html>
  );
}
