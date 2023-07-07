export default async function handler(
  req: any,
  res: {
    status: (arg0: number) => {
      (): any;
      new (): any;
      json: {
        (arg0: {
          backend: any;
          frontend: { status: string; message: string };
        }): void;
        new (): any;
      };
    };
  }
) {
  const backendRes = await fetch(process.env.API_URL + "/api-status");
  const backendData = await backendRes.json();
  const frontendData = {
    status: "ok",
    message: "Frontend is running",
  };
  res.status(200).json({
    backend: backendData,
    frontend: frontendData,
  });
}
