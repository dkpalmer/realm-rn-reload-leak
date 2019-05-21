import Realm from "realm";

const realm = new Realm({
  path: "default.realm",
  schema: [{ name: "Dog", properties: { name: "string" } }],
  schemaVersion: 0
});

const dogs = realm.objects("Dog");

if (dogs.length === 0) {
  realm.write(() => {
    realm.create("Dog", { name: "Rex" });
  });
}

export default realm;
