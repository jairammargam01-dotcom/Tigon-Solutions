import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import ScrollToHash from "@/components/ScrollToHash";

export default function PublicLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex min-h-screen flex-col">
      <ScrollToHash />

      <Navbar />

      <main className="flex-1">
        {children}
      </main>

      <Footer />
    </div>
  );
}