export const addTag = (_: any, variables: any, { cache }: any): void => {
  const data = { todos: [1] };
  cache.writeData({ data });
  console.log(variables);
  return null;
};
