export const filterArray = (arr, inputValue) => {
  const filteredSearch = arr.filter((users, i) => {
    return (
      users.first_name
        .toLocaleLowerCase()
        .includes(inputValue.toLocaleLowerCase().trim()) ||
      users.last_name
        .toLocaleLowerCase()
        .includes(inputValue.toLocaleLowerCase().trim())
    );
  });
  return filteredSearch;
};
