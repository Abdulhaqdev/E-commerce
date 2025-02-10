import ProductCard from '@/components/cards/product-card'
import Filter from '@/components/chared/filter'
import Pagination from '@/components/chared/pagination'
import { Separator } from '@/components/ui/separator'
import { products } from '@/lib/constants'
import React from 'react'

const HomePage = () => {
	return (
		<>
			<div className='flex justify-between items-center '>
				<h1 className='text-xl font-bold'> Products</h1>
				<Filter/>
			</div>
				<Separator className='my-3'/>
				<div className='grid-cols-1'>
				<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
				{products.map(product => (
					<ProductCard key={product._id} product={product} />
				))}
			</div>
				</div>
				<Pagination/>
		</>
	)
}

export default HomePage