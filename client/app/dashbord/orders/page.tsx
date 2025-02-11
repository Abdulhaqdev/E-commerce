import Filter from '@/components/chared/filter'
import { Separator } from '@/components/ui/separator'
import {
	Table,
	TableBody,
	TableCaption,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from '@/components/ui/table'
import { products } from '@/lib/constants'
import { formatPrice } from '@/lib/utils'
import React from 'react'

const Page = () => {
	return (
		<>
			<div className='flex justify-between items-center w-full gap-2'>
				<h1 className='text-xl font-bold'>Orders</h1>
				<Filter />
			</div>
			<Separator className='my-3' />
			<Table>
				<TableCaption>A list of your recent Orders.</TableCaption>
				<TableHeader>
					<TableRow>
						<TableHead> Price</TableHead>
						<TableHead>Status</TableHead>
						<TableHead>Product</TableHead>
						<TableHead>Order time</TableHead>
						<TableHead className='text-right'>Updated time</TableHead>
					</TableRow>
				</TableHeader>
				<TableBody className='text-sm'>
					{products.map(item => (
						<TableRow key={item._id}>
							<TableCell>{formatPrice(item.price)}</TableCell>
							<TableCell>Paid</TableCell>
							<TableCell>{item.title}</TableCell>
							<TableCell>10-nov 2024</TableCell>
							<TableCell className='text-right'>20-nov 2025</TableCell>
						</TableRow>
					))}
				</TableBody>
			</Table>
		</>
	)
}

export default Page
