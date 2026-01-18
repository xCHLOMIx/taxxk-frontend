import Sidebar from "../../components/shared/Sidebar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Sidebar />
      <div className="px-12 w-full flex justify-center">{children}</div>
    </>
  );
}
