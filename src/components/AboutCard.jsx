export default function AboutCard() {
	return (
		<div className='absolute shadow-lg h-[750px] w-[550px] bg-tan-100 flex flex-col'>
			<div className='flex flex-col justify-between bg-jade-500 w-[calc(100%-32px)] flex-1 m-4 rounded-4xl p-8 px-14'>
				<div>
					<p className='text-lg text-tan-800'>ABOUT</p>
					<h1 className='text-5xl font-black tracking-wide'>
						MATT CHASTAIN
					</h1>
				</div>
				<div className='flex justify-center w-full'>
					<img
						className='h-60 w-60 object-cover rounded-full overflow-hidden'
						src='https://as1.ftcdn.net/jpg/03/98/39/38/1000_F_398393859_wptdKgUNm65jW74wCHfpGuylM8tgCpTz.jpg'
						alt=''
					/>
				</div>

				<p>
					Lorem ipsum odor amet, consectetuer adipiscing elit. Nam
					eros imperdiet diam lacus tempus et praesent. Urna vulputate
					dui placerat mauris vivamus sit quisque.
				</p>
			</div>
			<div className='flex justify-between items-center text-tan-800 px-4 pb-4'>
				<div>
					<p className='text-sm w-34'>
						HTML, CSS, JavaScript, React, Vite, Tailwind CSS
					</p>
				</div>

				<p className='text-4xl font-bold'>/2025</p>
			</div>
		</div>
	);
}
