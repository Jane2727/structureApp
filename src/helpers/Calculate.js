// проверка (count !== undefined && name !== undefined) чтобы выводить только релевантные ответы
export const findEquipmentForAllChildren = (child, equipments) => {
  const arrayOfRooms = [];

  const findEquipForRoom = elem => {
    if (elem.children) {
      if (!arrayOfRooms.some(({ roomId }) => roomId === elem.id)) {
        const { id, name } = elem;
        const result = equipments.filter(
          equip =>
            equip.room === id &&
            equip.count !== undefined &&
            equip.name !== undefined
        );
        if (result.length !== 0) {
          arrayOfRooms.push({
            roomId: id,
            roomName: name,
            equipInfo: result,
          });
        }
      }
      return elem.children.map(el => findEquipForRoom(el));
    }
    const { id, name } = elem;
    const result = equipments.filter(
      equip =>
        equip.room === id &&
        equip.count !== undefined &&
        equip.name !== undefined
    );
    if (result.length !== 0) {
      arrayOfRooms.push({
        roomId: id,
        roomName: name,
        equipInfo: result,
      });
    }
    return result;
  };

  findEquipForRoom(child);

  return arrayOfRooms;
};

export const countEquipment = arr => {
  const total = arr.reduce(
    (totalAcc, { equipInfo }) =>
      totalAcc + equipInfo.reduce((acc, { count }) => acc + count, 0),
    0
  );
  return total;
};
