export const authors = [
  {
    name: "Davaughn White",
    image: "https://github.com/davaughnwhite.png",
  },
];

const defaultAuthor = authors[0];

export const getAuthor = (name: string) => {
  const author = authors.find(author => author.name === name);

  return author ?? defaultAuthor;
};
