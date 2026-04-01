function getUsers(req, res) {
  const users = [
    { id: 1, name: 'Ira', email: 'ira@email.com' },
    { id: 2, name: 'Anna', email: 'anna@email.com' },
    { id: 3, name: 'John', email: 'john@email.com' },
  ];

  const theme = req.cookies.theme || 'light';

  res.render('users/users.pug', {
    title: 'Users',
    users,
    theme,
  });
}

function postUsers(req, res) {
  res.send('Post users route');
}

function getUserById(req, res) {
  const { userId } = req.params;

  const user = {
    id: userId,
    name: `User ${userId}`,
    email: `user${userId}@email.com`,
  };

  const theme = req.cookies.theme || 'light';

  res.render('users/user-details.pug', {
    title: 'User Details',
    user,
    theme,
  });
}

function putUserById(req, res) {
  const { userId } = req.params;
  res.send(`Put user by Id route: ${userId}`);
}

function deleteUserById(req, res) {
  const { userId } = req.params;
  res.send(`Delete user by Id route: ${userId}`);
}

export {
  getUsers,
  postUsers,
  getUserById,
  putUserById,
  deleteUserById,
};