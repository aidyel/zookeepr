const fs = require('fs');
const {
    filterByQuery,
    findById,
    createNewZookeeper,
    validateZookeeper,
} = require('../lib/zookeepers');

jest.mock('fs');
test('creates an zookeeper object', () => {
    const zookeeper = createNewZookeeper(
        {name: "Darlene", id: "hduiw2" }, []);

    expect(zookeeper.name).toBe('Darlene');
    expect(zookeeper.id).toBe("hduiw2");

})

test("filters by query", () => {
    const startingZookeepers = [
        {
            id: "1",
            name: "Raksha",
            age: 31,
            favoriteAnimal: "penguin"
          },
          {
            id: "2",
            name: "Isabella",
            age: 67,
            favoriteAnimal: "bear"
          },
    ];

    const updateZookeepers = filterByQuery({age: 31}, startingZookeepers);

    expect(updateZookeepers.length).toEqual(1);
});

test("finds by id", () => {
    const startingZookeepers =[
        {
            id: "1",
            name: "Raksha",
            age: 31,
            favoriteAnimal: "penguin"
          },
          {
            id: "2",
            name: "Isabella",
            age: 67,
            favoriteAnimal: "bear"
          },
    ];

    const result = findById('2', startingZookeepers);

    expect(result.name).toBe('Isabella');
});

test("validates age", () => {
    const zookeeper = {

            id: "1",
            name: "Raksha",
            age: 31,
            favoriteAnimal: "penguin"
          };
    const invalidZookeeper =
          {
            id: "2",
            name: "Isabella",
            age: 67,
            favoriteAnimal: "bear"
          };

    const result = validateZookeeper(zookeeper);
    const result2 = validateZookeeper(invalidZookeeper);

    expect(result).toBe(true)
    expect(result2).toBe(false);

})