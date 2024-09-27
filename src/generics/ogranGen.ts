// class Vehicle1 {
//   run: number;
// }

interface Vehicle1 {
  run: number;
}

//? Ограничение на дженерики
function kmToMiles<T extends Vehicle1>(vehicle: T): T {
  vehicle.run = vehicle.run / 0.62;

  return vehicle;
}

// class LCV extends Vehicle1 {
//   capacity: number;
// }

interface LCV extends Vehicle1 {
  capacity: number;
}

// const vehicle = kmToMiles(new Vehicle1());
// const lcv = kmToMiles(new LCV());
kmToMiles({ run: 1 });

function logId3<T extends string | number, Y>(
  id: T,
  additionalData: Y,
): { id: T; data: Y } {
  console.log(id);
  console.log(additionalData);

  return { id, data: additionalData };
}
