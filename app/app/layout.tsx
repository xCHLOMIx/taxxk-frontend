import Sidebar from "../components/shared/Sidebar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Sidebar />
      <div className="px-12">{children}</div>
    </>
  );
}
