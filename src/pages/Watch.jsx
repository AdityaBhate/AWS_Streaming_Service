import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import LoadingSpinner from "../componets/LoadingSpinner";
import { Button, Typography } from "@material-tailwind/react";

function Watch() {
	const { id } = useParams();
	const [loading, setLoading] = useState(true);
	const [videoLink, setVideoLink] = useState(null);

	useEffect(() => {
		const fetchVideoLink = async () => {
			setLoading(true);
			const response = await axios.get(
				`https://aws-stream.onrender.com/stream/${id}`
			);
			setVideoLink(response.data);
			console.log(response.data);
			setLoading(false);
		};

		fetchVideoLink();
	}, [id]);

	return (
		<>
			{loading ? (
				<LoadingSpinner />
			) : (
				<>
					{videoLink && (
						<div className='flex flex-col gap-2 justify-center items-center h-screen mx-auto max-w-4xl'>
							<div className='flex items-center justify-between w-full'>
								<Typography variant='h3' color='black'>
									{videoLink.filename}
								</Typography>
								<Link to={videoLink.url}>
									<Button>Download</Button>
								</Link>
							</div>
							<div className='w-80'>
								<video controls width='100%' height='auto'>
									<source
										src={`https://d1ks1k6yvp3y0e.cloudfront.net/${videoLink.filename}`}
										type='video/mp4'
									/>
									Your browser does not support the video tag.
								</video>
							</div>
						</div>
					)}
				</>
			)}
		</>
	);
}

export default Watch;