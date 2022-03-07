export type User = {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    };
  };
};

export type Comment = {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
};
