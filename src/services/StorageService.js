export class StorageService {
  hotels = [
    { id: 1, name: "Voyage Hotel", point: 9 },
    { id: 2, name: "Maxx Royal Hotel", point: 5 },
    { id: 3, name: "Vogue Hotel", point: 7 },
    { id: 4, name: "Afytos Hotel", point: 4 },
    { id: 5, name: "Selen Hotel", point: 6 },
  ];

  getHotels = () => {
    const hotels = localStorage.getItem("hotels");
    if (hotels) {
      return JSON.parse(hotels);
    } else {
      localStorage.setItem("hotels", JSON.stringify(this.hotels));
      return this.hotels;
    }
  };

  updateHotel = (hotelName, newPoint) => {
    const hotelList = JSON.parse(localStorage.getItem("hotels"));
    let index = hotelList.findIndex((h) => h.name === hotelName);
    if (index > -1) {
      hotelList[index].point = newPoint;
      const storedHotels = JSON.stringify(hotelList);
      localStorage.setItem("hotels", storedHotels);
    }
  };

  deleteHotel = (hotelName) => {
    const hotelList = JSON.parse(localStorage.getItem("hotels"));
    let index = hotelList.findIndex((hotel) => hotel.name === hotelName);
    if (index > -1) {
      hotelList.splice(index, 1);
      const storedHotels = JSON.stringify(hotelList);
      localStorage.setItem("hotels", storedHotels);
    }
  };
}
