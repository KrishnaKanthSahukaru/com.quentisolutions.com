import "./globals.css";
import SkipNav from "../components/SkipNav";
import Navbar from "../components/Navbar";

export const metadata = {
  title: "[REPLACE] BrandName",
  description: "[REPLACE] Modern premium products for everyday life."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="bg-background text-text">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;700&family=Space+Grotesk:wght@400;700&family=Source+Sans+Pro:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-sans antialiased">
        <SkipNav />
        <Navbar />
        {children}
      </body>
    </html>
  );
}
