export const sortIncreasing = (hotelList) => {
  let hotels = [...hotelList];
  hotels.sort(function (currHotel, nextHotel) {
    if (currHotel.point === nextHotel.point) {
      return nextHotel.updatedTime > currHotel.updatedTime ? 1 : -1;
    } else {
      return currHotel.point > nextHotel.point ? 1 : -1;
    }
  });
  return hotels;
};

export const sortDecreasing = (hotelList) => {
  let hotels = [...hotelList];
  hotels.sort(function (currHotel, nextHotel) {
    if (currHotel.point === nextHotel.point) {
      return nextHotel.updatedTime > currHotel.updatedTime ? 1 : -1;
    } else {
      return nextHotel.point > currHotel.point ? 1 : -1;
    }
  });
  console.log(hotels);
  return hotels;
};

export const sortByDate = (hotelList) => {
  let hotels = [...hotelList];
  hotels.sort(function (currHotel, nextHotel) {
    return new Date(nextHotel.updatedTime) > new Date(currHotel.updatedTime)
      ? 1
      : -1;
  });
  return hotels;
};
