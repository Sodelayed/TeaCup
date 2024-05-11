module.exports = function (el1, el2, method) {
  switch (method) {
    case "lower":
      return Number(
        Object.values(el1.price).sort((price1, price2) =>
          Number(price1) > Number(price2) ? 1 : -1
        )[0] >
          Number(
            Object.values(el2.price).sort((price1, price2) =>
              Number(price1) > Number(price2) ? 1 : -1
            )[0]
          )
          ? -1
          : 1
      );
    case "upper":
      return Number(
        Object.values(el1.price).sort((price1, price2) =>
          Number(price1) > Number(price2) ? 1 : -1
        )[0]
      ) >
        Number(
          Object.values(el2.price).sort((price1, price2) =>
            Number(price1) > Number(price2) ? 1 : -1
          )[0]
        )
        ? 1
        : -1;
    default:
      return 1;
  }
};
