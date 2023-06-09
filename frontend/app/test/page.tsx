import { ApiStatus } from "~/app/_interface/api.interface";
const getApiStatus = async (): Promise<ApiStatus> => {
  try {
    const data = await fetch("http://localhost:8000/api/");
    const apiStatus = await data.json();
    return apiStatus;
  } catch (error) {
    console.error("Error fetching API status:", error);
    return {
      data: {
        id: "",
        type: "",
        attributes: {
          name: "",
          version: "",
          message: "",
        },
      },
    };
  }
};

export default async function ApiStatus() {
  const status = await getApiStatus();
  console.log(status);

  if (!status?.data?.id) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Status</h1>

      <div className="data">
        <p>id: {status?.data?.id}</p>
        <p>type: {status?.data?.type}</p>
        <div className="attributes">
          <p>Name: {status?.data?.attributes?.name}</p>
          <p>Message: {status?.data?.attributes?.message}</p>
          <p>Version: {status?.data?.attributes?.version}</p>
        </div>
      </div>
    </div>
  );
}
