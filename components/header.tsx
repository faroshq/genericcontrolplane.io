import Link from "next/link"

export function Header() {
	return (
		<header className="px-4 lg:px-6 h-14 flex items-center">
			<Link className="flex items-center justify-center" href="#">
				<TerminalIcon className="h-6 w-6" />
				Generic Control Plane
			</Link>
			<nav className="ml-auto flex gap-4 sm:gap-6">
				<Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
					Features
				</Link>
				<Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
					CLI Commands
				</Link>
				<Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
					Documentation
				</Link>
				<Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
					Contact
				</Link>
			</nav>
		</header>
	)
}

function TerminalIcon(props: any) {
	return (
		<svg
			{...props}
			xmlns="http://www.w3.org/2000/svg"
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			strokeWidth="2"
			strokeLinecap="round"
			strokeLinejoin="round"
		>
			<polyline points="4 17 10 11 4 5" />
			<line x1="12" x2="20" y1="19" y2="19" />
		</svg>
	)
}
