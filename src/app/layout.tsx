// import "@/app/globals.css";

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
            if (localStorage.theme === 'dark') {
              document.documentElement.classList.add('dark');
            }
          `
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
