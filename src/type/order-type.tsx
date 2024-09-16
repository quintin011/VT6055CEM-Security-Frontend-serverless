export type OrderType = {
    OID: string,
    UID: string,
    Status: string,
    Method: boolean,
    OrderType: boolean,
    PlaceType: boolean,
    Symbol: string,
    Price: number,
    Quantity: number,
    CreatedAt: string,
    UpdatedAt: string,
}


// {
//     "OID": "c39427a0-e63c-4993-9d2e-36a447190ceb",
//     "UID": "a834ddef-37de-4abb-ac2a-ba700012ab10",
//     "Status": "Pending",
//     "Method": true,
//     "OrderType": true,
//     "PlaceType": true,
//     "Symbol": "0001",
//     "Price": 36,
//     "Quantity": 100,
//     "CreatedAt": "2024-09-10T13:58:48.215059Z",
//     "UpdatedAt": "2024-09-10T13:58:48.215059Z"
// },