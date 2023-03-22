export type MarkerItem = {
  id: number | string;
  coordinate: {
    latitude: number;
    longitude: number;
  };
  detail: {
    name: string;
    description: string;
  };
};
