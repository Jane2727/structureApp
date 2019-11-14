/* global Scorocode */

Scorocode.Init({
  ApplicationID: "3196b2e873234547ad8b06ed636d3538",
  JavaScriptKey: "5e85f685a23e44e6abad95accc1dd2ea",
  MasterKey: "659d718ff9664f6fafbdb79efc93cb34"
});

const _transformBuildingsData = data =>
  data.map(({ name, rooms, _id }) => ({
    id: _id,
    name,
    children: rooms
  }));

const _transformEquipmentData = data =>
  data.map(({ count, name, _id, room }) => ({
    id: _id,
    name,
    count,
    room
  }));

export const getBuildings = async () => {
  const buildings = new Scorocode.Query("buildings");
  const items = await buildings.find();
  const { result } = items;
  return _transformBuildingsData(result);
};

export const getEquipment = async () => {
  const equipment = new Scorocode.Query("equipment");
  const items = await equipment.find();
  const { result } = items;
  return _transformEquipmentData(result);
};

export const addEquipment = async ({ name, id, count }) => {
  const equipment = new Scorocode.Object("equipment");
  equipment.set("name", name);
  equipment.set("room", id);
  equipment.set("count", count);
  const result = await equipment.save();
  return result;
};

export const updateEquipment = async ({ id, name, count }) => {
  const equipment = new Scorocode.Object("equipment");
  equipment.set("_id", id);
  equipment.set("name", name);
  equipment.set("count", Number(count));
  const result = await equipment.save();
  return result;
};

export const deleteEquipment = async id => {
  const equipment = new Scorocode.Object("equipment");
  const item = equipment.getById(id);
  const result = await equipment.remove(item);
  return result;
};
