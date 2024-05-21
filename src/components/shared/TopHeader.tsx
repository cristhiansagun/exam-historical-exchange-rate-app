import { NavLink } from 'react-router-dom'
import { Package2 } from "lucide-react"

const TopHeader = () => {
	return (
		<header className="sticky top-0 flex h-16 items-center gap-4 bg-background px-4 md:px-6 bg-indigo-700 border-b-2 border-indigo-600">
			<nav className="hidden flex-col gap-6 text-lg font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6">
				<NavLink
					to="/"
					className="flex items-center gap-2 text-2xl font-bold ml-2 md:text-base text-white">
					<Package2 className="h-6 w-6" />
					<span>My Exchange Rate</span>
				</NavLink>
			</nav>
		</header>
	)
}

export default TopHeader