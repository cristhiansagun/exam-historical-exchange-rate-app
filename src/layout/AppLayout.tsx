import TopHeader from '@/components/shared/TopHeader'
import SubHeader from '@/components/shared/SubHeader'

import { Outlet } from 'react-router-dom'

const AppLayout = () => {
	return (
		<div className="min-h-full">
			<TopHeader />
			<SubHeader />
			<Outlet />
		</div>
	)
}

export default AppLayout