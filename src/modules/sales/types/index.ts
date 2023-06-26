export type UpdateResult = {
  affected: number;
};

export type FindParams = {
  where?: {
    id?: string;
    category?: {
      id?: string;
    };
  };
};
