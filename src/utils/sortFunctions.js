export const sortIncreasing = (hotelList) => {
  let hotels = [...hotelList];
  hotels.sort(function (currHotel, nextHotel) {
    return currHotel.point > nextHotel.point ? 1 : -1;
  });
  return hotels;
};

export const sortDecreasing = (hotelList) => {
  let hotels = [...hotelList];
  hotels.sort(function (currHotel, nextHotel) {
    return nextHotel.point > currHotel.point ? 1 : -1;
  });
  return hotels;
};

export const sortByDate = (hotelList) => {
  let hotels = [...hotelList];
  hotels.sort(function (currHotel, nextHotel) {
    return new Date(nextHotel.updatedTime) - new Date(currHotel.updatedTime)
      ? 1
      : -1;
  });
  return hotels;
};
