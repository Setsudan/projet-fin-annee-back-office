export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <main id="admin_dashboard">
      <div>{children}</div>
    </main>
  );
}
