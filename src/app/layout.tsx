import { ColorSchemeScript, MantineProvider } from "@mantine/core";
import { Inter } from "next/font/google";
import "./globals.css";
import NextAuthProvider from "./_context/auth";
import { AppWrapper } from "./_context";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Contract",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <ColorSchemeScript />
      </head>
      <body className={inter.className}>
        <MantineProvider>
          <NextAuthProvider>
            <AppWrapper>{children}</AppWrapper>
          </NextAuthProvider>
        </MantineProvider>
      </body>
    </html>
  );
}
