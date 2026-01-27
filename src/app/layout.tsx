
import { ThemeProvider } from "@/context/ThemeProvider";
import "./globals.css";
import { Navbar } from "@/components/compo/Navbar";


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
