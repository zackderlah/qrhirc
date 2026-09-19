import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'QRHIRC — Better health. Closer to home.',
  description: 'Connecting research, health professionals and communities for healthier rural Queensland. Explore QRHIRC research, training and collaboration.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      {/* impeccable-live-start */}
<script src="http://localhost:8400/live.js?token=792450a3-d958-48f6-9393-7b2da2ae5757"></script>
{/* impeccable-live-end */}
</body>
    </html>
  );
}
