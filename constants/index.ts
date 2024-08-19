import arrowDown from "@/assets/icons/arrow-down.png";
import arrowUp from "@/assets/icons/arrow-up.png";
import backArrow from "@/assets/icons/back-arrow.png";
import chat from "@/assets/icons/chat.png";
import checkmark from "@/assets/icons/check.png";
import close from "@/assets/icons/close.png";
import dollar from "@/assets/icons/dollar.png";
import email from "@/assets/icons/email.png";
import eyecross from "@/assets/icons/eyecross.png";
import google from "@/assets/icons/google.png";
import home from "@/assets/icons/home.png";
import list from "@/assets/icons/list.png";
import lock from "@/assets/icons/lock.png";
import map from "@/assets/icons/map.png";
import marker from "@/assets/icons/marker.png";
import out from "@/assets/icons/out.png";
import person from "@/assets/icons/person.png";
import pin from "@/assets/icons/pin.png";
import point from "@/assets/icons/point.png";
import profile from "@/assets/icons/profile.png";
import search from "@/assets/icons/search.png";
import selectedMarker from "@/assets/icons/selected-marker.png";
import star from "@/assets/icons/star.png";
import target from "@/assets/icons/target.png";
import to from "@/assets/icons/to.png";
import check from "@/assets/images/check.png";
import getStarted from "@/assets/images/get-started.png";
import message from "@/assets/images/message.png";
import noResult from "@/assets/images/no-result.png";
import onboarding1 from "@/assets/images/onboarding1.png";
import onboarding2 from "@/assets/images/onboarding2.png";
import onboarding3 from "@/assets/images/onboarding3.png";
import signUpCar from "@/assets/images/signup-car.png";

export const images = {
  onboarding1,
  onboarding2,
  onboarding3,
  getStarted,
  signUpCar,
  check,
  noResult,
  message,
};

export const icons = {
  arrowDown,
  arrowUp,
  backArrow,
  chat,
  checkmark,
  close,
  dollar,
  email,
  eyecross,
  google,
  home,
  list,
  lock,
  map,
  marker,
  out,
  person,
  pin,
  point,
  profile,
  search,
  selectedMarker,
  star,
  target,
  to,
};

export const onboarding = [
  {
    id: 1,
    title: "The perfect ride is just a tap away!",
    description:
      "Your journey begins with Ryde. Find your ideal ride effortlessly.",
    image: images.onboarding1,
  },
  {
    id: 2,
    title: "Best car in your hands with Ryde",
    description:
      "Discover the convenience of finding your perfect ride with Ryde",
    image: images.onboarding2,
  },
  {
    id: 3,
    title: "Your ride, your way. Let's go!",
    description:
      "Enter your destination, sit back, and let us take care of the rest.",
    image: images.onboarding3,
  },
];

export const data = {
  onboarding,
};

export const rides = [
  {
    "ride_id": "1",
    "origin_address": "Kathmandu, Nepal",
    "destination_address": "Pokhara, Nepal",
    "origin_latitude": "27.717245",
    "origin_longitude": "85.323961",
    "destination_latitude": "28.209583",
    "destination_longitude": "83.985567",
    "ride_time": 391,
    "fare_price": "19500.00",
    "payment_status": "paid",
    "driver_id": 2,
    "user_id": "1",
    "created_at": "2024-08-12 05:19:20.620007",
    "driver": {
      "driver_id": "2",
      "first_name": "David",
      "last_name": "Brown",
      "profile_image_url": "https://ucarecdn.com/6ea6d83d-ef1a-483f-9106-837a3a5b3f67/-/preview/1000x666/",
      "car_image_url": "https://ucarecdn.com/a3872f80-c094-409c-82f8-c9ff38429327/-/preview/930x932/",
      "car_seats": 5,
      "rating": "4.60"
    }
  },
  {
    "ride_id": "2",
    "origin_address": "Jalkot, MH",
    "destination_address": "Pune, Maharashtra, India",
    "origin_latitude": "18.609116",
    "origin_longitude": "77.165873",
    "destination_latitude": "18.520430",
    "destination_longitude": "73.856744",
    "ride_time": 491,
    "fare_price": "24500.00",
    "payment_status": "paid",
    "driver_id": 1,
    "user_id": "1",
    "created_at": "2024-08-12 06:12:17.683046",
    "driver": {
      "driver_id": "1",
      "first_name": "James",
      "last_name": "Wilson",
      "profile_image_url": "https://ucarecdn.com/dae59f69-2c1f-48c3-a883-017bcf0f9950/-/preview/1000x666/",
      "car_image_url": "https://ucarecdn.com/a2dc52b2-8bf7-4e49-9a36-3ffb5229ed02/-/preview/465x466/",
      "car_seats": 4,
      "rating": "4.80"
    }
  },
  {
    "ride_id": "3",
    "origin_address": "Zagreb, Croatia",
    "destination_address": "Rijeka, Croatia",
    "origin_latitude": "45.815011",
    "origin_longitude": "15.981919",
    "destination_latitude": "45.327063",
    "destination_longitude": "14.442176",
    "ride_time": 124,
    "fare_price": "6200.00",
    "payment_status": "paid",
    "driver_id": 1,
    "user_id": "1",
    "created_at": "2024-08-12 08:49:01.809053",
    "driver": {
      "driver_id": "1",
      "first_name": "James",
      "last_name": "Wilson",
      "profile_image_url": "https://ucarecdn.com/dae59f69-2c1f-48c3-a883-017bcf0f9950/-/preview/1000x666/",
      "car_image_url": "https://ucarecdn.com/a2dc52b2-8bf7-4e49-9a36-3ffb5229ed02/-/preview/465x466/",
      "car_seats": 4,
      "rating": "4.80"
    }
  },
  {
    "ride_id": "4",
    "origin_address": "Okayama, Japan",
    "destination_address": "Osaka, Japan",
    "origin_latitude": "34.655531",
    "origin_longitude": "133.919795",
    "destination_latitude": "34.693725",
    "destination_longitude": "135.502254",
    "ride_time": 159,
    "fare_price": "7900.00",
    "payment_status": "paid",
    "driver_id": 3,
    "user_id": "1",
    "created_at": "2024-08-12 18:43:54.297838",
    "driver": {
      "driver_id": "3",
      "first_name": "Michael",
      "last_name": "Johnson",
      "profile_image_url": "https://ucarecdn.com/0330d85c-232e-4c30-bd04-e5e4d0e3d688/-/preview/826x822/",
      "car_image_url": "https://ucarecdn.com/289764fb-55b6-4427-b1d1-f655987b4a14/-/preview/930x932/",
      "car_seats": 4,
      "rating": "4.70"
    }
  }
];

export const drivers = [
  {
    "id": "1",
    "first_name": "James",
    "last_name": "Wilson",
    "profile_image_url": "https://ucarecdn.com/dae59f69-2c1f-48c3-a883-017bcf0f9950/-/preview/1000x666/",
    "car_image_url": "https://ucarecdn.com/a2dc52b2-8bf7-4e49-9a36-3ffb5229ed02/-/preview/465x466/",
    "car_seats": 4,
    "rating": "4.80"
  },
  {
    "id": "2",
    "first_name": "David",
    "last_name": "Brown",
    "profile_image_url": "https://ucarecdn.com/6ea6d83d-ef1a-483f-9106-837a3a5b3f67/-/preview/1000x666/",
    "car_image_url": "https://ucarecdn.com/a3872f80-c094-409c-82f8-c9ff38429327/-/preview/930x932/",
    "car_seats": 5,
    "rating": "4.60"
  },
  {
    "id": "3",
    "first_name": "Michael",
    "last_name": "Johnson",
    "profile_image_url": "https://ucarecdn.com/0330d85c-232e-4c30-bd04-e5e4d0e3d688/-/preview/826x822/",
    "car_image_url": "https://ucarecdn.com/289764fb-55b6-4427-b1d1-f655987b4a14/-/preview/930x932/",
    "car_seats": 4,
    "rating": "4.70"
  },
  {
    "id": "4",
    "first_name": "Robert",
    "last_name": "Green",
    "profile_image_url": "https://ucarecdn.com/fdfc54df-9d24-40f7-b7d3-6f391561c0db/-/preview/626x417/",
    "car_image_url": "https://ucarecdn.com/b6fb3b55-7676-4ff3-8484-fb115e268d32/-/preview/930x932/",
    "car_seats": 4,
    "rating": "4.90"
  }
]