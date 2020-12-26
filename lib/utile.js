// filter function

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
// sorting function
export const sortArray = (array, soryBy, desc) => {
  array.sort((a, b) => {
    if (a[soryBy] < b[soryBy]) return -1;
    if (a[soryBy] > b[soryBy]) return 1;
    return 0;
  });
  if (desc) array.reverse();
  return array;
};
