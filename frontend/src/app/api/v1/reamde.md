# How to write api routes for the backend dev

@FabPiv @gaoubak @JinSu77 @Rijenth

```tsx
export default async function handler(
  req: any,
  res: {
    /* the backend should return a json object */
    json: (arg0: { message: string }) => void;
  }
) {
  const bres = await fetch(process.env.API_URL + "your-path");
  const bdata = await bres.json();
  switch (res.status) {
    case 200:
      res.json(bdata);
      break;
    case 400:
      res.json({ message: "bad request" }, bdata);
      break;
    case 401:
      res.json({ message: "unauthorized" });
      break;
    case 403:
      res.json({ message: "forbidden" });
      break;
    case 404:
      res.json({ message: "not found" });
      break;
    case 500:
      res.json({ message: "internal server error" });
      break;
    default:
      res.json({ message: "unknown error" }, bdata);
      break;
  }
}
```
