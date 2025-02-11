'use client'
import { Button } from '@/components/ui/button'
import { dashboardSidebar } from '@/lib/constants'
import { cn } from '@/lib/utils'
import { Separator } from '@radix-ui/react-separator'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const SideBar = () => {
	const pathName = usePathname()
	return (
		<div className='p-4 shadow-lg'>
			<h1 className='font-semibold'>dashboard</h1>
			<Separator />
			<div className='flex flex-col mr-2 '>
				{dashboardSidebar.map(item => (
					<Button
						key={item.route}
						asChild
						variant={pathName == item.route ? 'secondary' : 'ghost'}
						className={cn(
							'flex justify-start',
							pathName == item.route && 'font-bold'
						)}
					>
						<Link href={item.route}>
							<item.icon />
							<span>{item.name}</span>
						</Link>
					</Button>
				))}
			</div>
		</div>
	)
}

export default SideBar
