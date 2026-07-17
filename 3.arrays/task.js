function compareArrays(arr1, arr2) {

  let isCompare = arr1.every((elem, i) => elem === arr2[i]) && arr1.length === arr2.length;
  return isCompare
  
}


function getUsersNamesInAgeRange(users, gender) {

  const filteredUsers = users.filter(user => user.gender === gender);

  if (filteredUsers.length === 0) {
    return 0;
  }

  return filteredUsers.reduce((sum, user) => sum + user.age, 0) / filteredUsers.length;

}
