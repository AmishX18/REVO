export const metadata = {
  title: "REVO — Ride Together",
  description: "Find your riding crew. Browse and host motorcycle group rides.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body style={{ margin: 0, padding: 0 }}>{children}</body>
    </html>
  );
}
