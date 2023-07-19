export default function Layout({ children }: { children: React.ReactNode }) {
	return (
		<main id="regisseur_dashboard">
			<div>{children}</div>
		</main>
	);
}
