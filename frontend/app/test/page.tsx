import { ApiStatus } from '@interface/api.interface';
const getApiStatus = async (): Promise<ApiStatus> => {
	try {
		const data = await fetch('http://localhost:8000/api-status');
		const apiStatus = await data.json();
		return apiStatus;
	} catch (error) {
		console.error('Error fetching API status:', error);
		return {
			data: {
				framework: '',
				version: '',
				services: {
					database: '',
				},
			},
		};
	}
};

export default async function ApiStatus() {
	const status = await getApiStatus();
	console.log(status);

	if (!status?.data?.framework) {
		return <div>Loading...</div>;
	}

	return (
		<div>
			<h1>Status</h1>

			<div className="data">
				<p>framework: {status?.data?.framework}</p>
				<p>version: {status?.data?.version}</p>
				<div className="attributes">
					<p>database: {status?.data?.services?.database}</p>
				</div>
			</div>
		</div>
	);
}
