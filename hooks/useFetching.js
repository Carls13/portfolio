import { useEffect, useState } from 'react';

export const useFetching = (endpoint) => {
	const [loading, setLoading] = useState(true);
	const [data, setData] = useState([]);
	const [error, setError] = useState(null);

	useEffect(() => {
		fetch(endpoint).then(response => response.json()).then((res) => {
			setData(res.graphql.user.edge_owner_to_timeline_media.edges);
			setLoading(false);
		}).catch((error) => {
			setLoading(false);
			setError(error.message);
		})
		// eslint-disable-next-line
	}, [])

	return [loading, data, error, setError];
}