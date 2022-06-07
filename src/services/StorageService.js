import { sortByDate } from "../utils/sortFunctions";

export class StorageService {
  hotels = [
    {
      id: 1,
      name: "Voyage Hotel",
      point: 9,
      updatedTime: "2021-10-05T14:48:00.000Z",
    },
    {
      id: 2,
      name: "Maxx Royal Hotel",
      point: 5,
      updatedTime: "2021-11-05T14:48:00.000Z",
    },
    {
      id: 3,
      name: "Vogue Hotel",
      point: 7,
      updatedTime: "2021-09-05T14:48:00.000Z",
    },
    {
      id: 4,
      name: "Afytos Hotel",
      point: 4,
      updatedTime: "2021-12-05T14:48:00.000Z",
    },
    {
      id: 5,
      name: "Selen Hotel",
      point: 6,
      updatedTime: "2021-08-05T14:48:00.000Z",
    },
  ];

  getHotels = () => {
    const hotels = localStorage.getItem("hotels");
    if (hotels) {
      const parsed = JSON.parse(hotels);
      let hotelList = sortByDate(parsed);
      return hotelList;
    } else {
      localStorage.setItem("hotels", JSON.stringify(this.hotels));
      let hotelList = sortByDate(this.hotels);
      return hotelList;
    }
  };

  addHotel = (hotel) => {
    const hotels = localStorage.getItem("hotels");
    if (hotels) {
      const parsed = JSON.parse(hotels);
      let index = parsed.findIndex((h) => {
        return h.name === hotel.name;
      });
      if (index === -1) {
        parsed.push(hotel);
        localStorage.setItem("hotels", JSON.stringify(parsed));
      } else {
      }
    } else {
      localStorage.setItem("hotels", JSON.stringify(hotel));
    }
  };

  updateHotels = (hotels) => {
    localStorage.setItem("hotels", hotels);
  };

  updateHotel = (hotelName, newPoint) => {
    const hotelList = JSON.parse(localStorage.getItem("hotels"));
    let index = hotelList.findIndex((h) => h.name === hotelName);
    if (index > -1) {
      hotelList[index].point = newPoint;
      hotelList[index].updatedTime = new Date().toISOString();
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
