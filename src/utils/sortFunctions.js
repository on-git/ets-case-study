export const sortIncreasing = (hotelList) => {
  let hotels = [...hotelList];
  hotels.sort(function (currHotel, nextHotel) {
    return currHotel.point > nextHotel.point;
  });
  return hotels;
};

export const sortDecreasing = (hotelList) => {
  let hotels = [...hotelList];
  hotels.sort(function (currHotel, nextHotel) {
    return nextHotel.point > currHotel.point;
  });
  return hotels;
};

export const sortByDate = (hotelList) => {
  let hotels = [...hotelList];
  hotels.sort(function (currHotel, nextHotel) {
    return new Date(nextHotel.updatedTime) - new Date(currHotel.updatedTime);
  });
  return hotels;
};
