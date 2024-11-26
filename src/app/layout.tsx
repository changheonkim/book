"use client"
import Layout from "../widgets/layout";


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Layout>
          {children}
        </Layout>
      </body>
    </html>
  );
}
