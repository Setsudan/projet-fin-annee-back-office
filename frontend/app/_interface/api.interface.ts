export interface ApiStatus {
  data: {
    id: string;
    type: string;
    attributes: {
      name: string;
      version: string;
      message: string;
    };
  };
}
