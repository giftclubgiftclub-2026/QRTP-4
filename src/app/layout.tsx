export const metadata = {
  title: 'QRTP-4 Verification Portal',
  description: 'QR Token Passport Registry',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
