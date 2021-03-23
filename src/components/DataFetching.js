import React, { useState, useEffect } from 'react'
import axios from 'axios'

function DataFetching() {
	const [post, setPost] = useState({})
	// const [id, setId] = useState(1)
	// const [idFromButtonClick, setIdFromButtonClick] = useState(1)

	useEffect(() => {
		axios
			.get(`http://127.0.0.1:5000/api_cdm/available_data_test`)
			.then(res => {
        console.log(res)
        setPost(res.data)
			})
			.catch(err => {
				console.log(err)
			})
	}, [])

	// const handleClick = () => {
	// 	setIdFromButtonClick(id)
	// }

	return (
		<div>
			{/* <input type="text" value={id} onChange={e => setId(e.target.value)} />
			<button type="button" onClick={handleClick}>Fetch Post</button> */}
			<div>{post.title}</div>
			
		</div>
	)
}

export default DataFetching