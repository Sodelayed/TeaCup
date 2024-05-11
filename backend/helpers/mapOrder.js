module.exports = function (order) {
  return {
    id: order._id,
    owner: order.owner.id,
    client: order.client,
    phonenumber: order.phonenumber,
    email: order.email,
    date: order.createdAt,
    selectedTime: order.selectedTime,
    adress: order.adress,
    state: order.state,
    typeofPayment: order.typeofPayment,
    comment: order.comment,
    basketPrice: order.basketPrice,
    basketCount: order.basketCount,
    items: order.items,
  };
};
