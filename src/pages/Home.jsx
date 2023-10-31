import React from "react";

function Home() {
	return (
		<div className='flex justify-center items-center h-screen'>
			<div className='bg-white p-6 rounded-lg shadow-md w-3/4 text-left'>
				<h1 className='text-3xl font-bold mb-4'>
					Seamless Hybrid Streaming Platform
				</h1>
				<p className='text-lg mb-4'>
					Welcome to our streaming platform where users can upload videos and
					get streamable links to share and watch their favorite content. You
					can also manage your videos, including uploading and deleting them,
					all in one place.
				</p>
				<div className='mb-4'>
					<p className='text-sm text-gray-600'>
						This project was created by Group 20, a team of talented students:
					</p>
					<ul className='text-sm text-gray-600'>
						<li>sarvesh Shelke</li>
						<li>Nikhil Singh</li>
						<li>Sahil More</li>
					</ul>
				</div>
			</div>
		</div>
	);
}

export default Home;
