import Navbar from '../components/Navbar';

export default function MainLayout({
  children,
  meta,
}: {
  children: React.ReactNode;
  meta: { title: string };
}) {
  const { title } = meta;
  return (
    <>
      <title>{title}</title>
      <div className="">
        <Navbar /> 
        <main className="flex-1 overflow-auto pt-0">{children}</main>
      </div>
    </>
  );
}
