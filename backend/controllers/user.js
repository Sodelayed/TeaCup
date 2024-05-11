const bcrypt = require("bcrypt");
const User = require("../models/User");
const { generate } = require("../helpers/token");
const ROLES = require("../constants/role");
const Basket = require("../models/Basket.js");
const Order = require("../models/Order.js");
// register
async function register(login, name, password) {
  if (!password) {
    throw new Error("Введите пароль");
  }
  const passwordHash = await bcrypt.hash(password, 10);
  const user = await User.create({ login, name, password: passwordHash });

  const token = generate({ id: user.id });

  return { token, user };
}
//login

async function login(login, password) {
  const user = await User.findOne({ login })
    .populate({
      path: "basket",
      populate: "owner",
    })
    .populate({
      path: "order",
      populate: "owner",
    });

  if (!user) {
    throw new Error("Такого пользователя не существует");
  }

  const isPasswordMatch = await bcrypt.compare(password, user.password);

  if (!isPasswordMatch) {
    throw new Error("Неверный пароль");
  }

  const token = generate({ id: user.id });

  return { token, user };
}

async function getUsers() {
  const users = await User.find()
    .populate({
      path: "basket",
      populate: "owner",
    })
    .populate({
      path: "order",
      populate: "owner",
    });

  users.sort((a, b) => (Number(a.roleId) > Number(b.roleId) ? -1 : 1));
  return users;
}

function getRoles() {
  return [
    { id: ROLES.ADMINISTRATOR, name: "Administrator" },
    { id: ROLES.MODERATOR, name: "Moderator" },
    { id: ROLES.BUYER, name: "Buyer" },
  ];
}

// delete

async function deleteUser(userId) {
  await User.deleteOne({ _id: userId });
  await Basket.deleteMany({ owner: userId });
  await Order.deleteMany({ owner: userId });
}

// change role
async function updateUser(userId, newData) {
  if (!!newData.roleId) {
    await Basket.deleteMany({ owner: userId });
    await Order.deleteMany({ owner: userId });
  }
  const newUser = await User.findByIdAndUpdate(userId, newData, {
    returnDocument: "after",
  })
    .populate({
      path: "basket",
      populate: "owner",
    })
    .populate({
      path: "order",
      populate: "owner",
    });

  return newUser;
}
module.exports = {
  register,
  login,
  getUsers,
  getRoles,
  deleteUser,
  updateUser,
};
