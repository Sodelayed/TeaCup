const express = require("express");

const {
  getUsers,
  getRoles,
  updateUser,
  deleteUser,
} = require("../controllers/user.js");

const hasRole = require("../middlewares/hasRole.js");
const authentificated = require("../middlewares/authentificated.js");

const mapUser = require("../helpers/mapUser.js");
const ROLES = require("../constants/role.js");

const router = express.Router({ mergeParams: true });

//Изменить личные данные пользователя
router.patch("/:id/personal", authentificated, async (req, res) => {
  const newUser = await updateUser(req.params.id, {
    name: req.body.name,
    surname: req.body.surname,
    phonenumber: req.body.phonenumber,
    email: req.body.email,
  });

  res.send({ data: mapUser(newUser) });
});

// Получить всех пользователей
router.get(
  "/",
  authentificated,
  hasRole([ROLES.ADMINISTRATOR]),
  async (req, res) => {
    const users = await getUsers();
    const roles = getRoles();

    res.send({ data: { users: users.map(mapUser), roles } });
  }
);

// Изменить роль пользователя
router.patch(
  "/:userId",
  authentificated,
  hasRole([ROLES.ADMINISTRATOR]),
  async (req, res) => {
    await updateUser(req.params.userId, {
      roleId: req.body.roleId,
      basket: [],
      order: [],
    });

    const users = await getUsers();
    const roles = getRoles();

    res.send({ data: { users: users.map(mapUser), roles } });
  }
);

// Удалить пользователя
router.delete(
  "/:userId",
  authentificated,
  hasRole([ROLES.ADMINISTRATOR]),
  async (req, res) => {
    await deleteUser(req.params.userId);

    const users = await getUsers();
    const roles = getRoles();

    res.send({ data: { users: users.map(mapUser), roles } });
  }
);

module.exports = router;
