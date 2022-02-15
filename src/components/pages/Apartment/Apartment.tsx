import IBuilding from "../../../models/IBuildind.interface";

const buildings: IBuilding[] = [
    {
        height: 10,
        width: 20,
        floors: 4,
        apartments: 16
    },
    {
        height: 50,
        width: 100,
        floors: 8,
        apartments: 32
    },
    {
        height: 50,
        width: 100,
        floors: 5,
        apartments: 85
    },
    {
        height: 25,
        width: 70,
        floors: 9,
        apartments: 25
    }
];

const PrintBuildings = (buildings: any[]): void => {
    buildings.forEach((buildingItem) => {
        console.log("--");
        for (let key in buildingItem) {
            console.log(`${key} - ${buildingItem[key]}`);
        }
    })
};

const GetOnlyFiveFloorsBuildings = (buildings: IBuilding[]): IBuilding[] => {
    const newBuildings = buildings.filter((item) => item.floors > 5);
    return newBuildings;
};





const Apartment = () => {
    return (
        <>
            <h1>Apartment</h1>
            <button onClick={() => PrintBuildings(buildings)}>Click</button>
            <button onClick={() => GetOnlyFiveFloorsBuildings(buildings)}>5 Floors buildings</button>
        </>
    )
}

export default Apartment;