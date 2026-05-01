import type { Metadata } from "next";
import { Roboto, Permanent_Marker } from "next/font/google";
import "../styles/globals.scss";

const roboto = Roboto({
	subsets: ["latin"],
	weight: "400",
	display: "swap",
});

const permanentMarker = Permanent_Marker({
	subsets: ["latin"],
	weight: "400",
	variable: "--font-heading",
	display: "swap",
});

export const metadata: Metadata = {
	title: {
		template: "%s | Greg Gerard",
		default: "Greg Gerard",
	},
	description: "Greg Gerard is a web developer from Columbus, OH.",
	icons: {
		apple: "/apple-touch-icon.png",
		icon: [
			{ url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
			{ url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
		],
		shortcut: "/favicon.ico",
	},
	manifest: "/site.webmanifest",
	robots: { index: false },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en" className={permanentMarker.variable}>
			<body className={roboto.className}>{children}</body>
		</html>
	);
}
