export const sortUsersById = (users) => {
  function compareUsers(item1, item2) {
    if (item1.id > item2.id) {
      return 1;
    }
    if (item1.id < item2.id) {
      return -1;
    }
    return 0;
  }
  return users.sort(compareUsers);
}