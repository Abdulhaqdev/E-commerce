import Image from 'next/image'
import Link from 'next/link'

function Logo() {
	return <Link href={'/'}>
		<div className='flex items-center gap-1'>
			<Image src={'/logo1.png'} alt='logo' width={80} height={50}>
			</Image>
		</div>
	</Link>
}

export default Logo