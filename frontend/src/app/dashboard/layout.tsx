import NavBar from "@components/navbar/navbar.component";
import "./layout.styles.scss";
export default function Layout(props: { children: React.ReactNode }) {
  const userInfo = {
    name: "Samanta",
    role: "Admin",
    email: "samantha@io.fr",
    avatar:
      "https://images.unsplash.com/photo-1687840664202-bcb4c480e929?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
  };
  return (
    <main id="dashboard-layout">
      <div id="nav">
        <NavBar userInfo={userInfo} />
      </div>
      <div id="content">{props.children}</div>
    </main>
  );
}
