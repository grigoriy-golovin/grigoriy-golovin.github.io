// "use strict";

// var advertisements = [
// 	{
// 		author: {
// 			avatar: "img/avatars/user01.png",
// 		},

// 		offer: {
// 			title: "Большая уютная квартира",
// 			address: "150, 200",
// 			price: 1000,
// 			type: "bungalo",
// 			rooms: 5,
// 			guests: 3,
// 			checkin: "12:00",
// 			checkout: "13:00",
// 			features: ["wifi", "dishwasher", "parking", "conditioner"],
// 			description: "Вид на море, много места, тишина",
// 			photos: [
// 				"http://o0.github.io/assets/images/tokyo/hotel1.jpg",
// 				"http://o0.github.io/assets/images/tokyo/hotel2.jpg",
// 				"http://o0.github.io/assets/images/tokyo/hotel3.jpg",
// 			],
// 		},

// 		location: {
// 			x: 150,
// 			y: 500,
// 		},
// 	},

// 	{
// 		author: {
// 			avatar: "img/avatars/user02.png",
// 		},

// 		offer: {
// 			title: "Огромный прекрасный дворец",
// 			address: "100, 700",
// 			price: 100,
// 			type: "palace",
// 			rooms: 10,
// 			guests: 4,
// 			checkin: "12:00",
// 			checkout: "14:00",
// 			features: [
// 				"dishwasher",
// 				"wifi",
// 				"dishwasher",
// 				"parking",
// 				"washer",
// 				"elevator",
// 				"conditioner",
// 			],
// 			description: "",
// 			photos: [
// 				"http://o0.github.io/assets/images/tokyo/hotel3.jpg",
// 				"http://o0.github.io/assets/images/tokyo/hotel2.jpg",
// 				"http://o0.github.io/assets/images/tokyo/hotel1.jpg",
// 			],
// 		},

// 		location: {
// 			x: 500,
// 			y: 700,
// 		},
// 	},

// 	{
// 		author: {
// 			avatar: "img/avatars/user03.png",
// 		},

// 		offer: {
// 			title: "Маленькая неуютная квартира",
// 			address: "400, 400",
// 			price: 10000,
// 			type: "flat",
// 			rooms: 2,
// 			guests: 9,
// 			checkin: "12:00",
// 			checkout: "12:00",
// 			features: ["dishwasher", "parking"],
// 			description: "",
// 			photos: [
// 				"http://o0.github.io/assets/images/tokyo/hotel1.jpg",
// 				"http://o0.github.io/assets/images/tokyo/hotel3.jpg",
// 				"http://o0.github.io/assets/images/tokyo/hotel2.jpg",
// 			],
// 		},

// 		location: {
// 			x: 400,
// 			y: 400,
// 		},
// 	},

// 	{
// 		author: {
// 			avatar: "img/avatars/user04.png",
// 		},

// 		offer: {
// 			title: "Маленький ужасный дворец",
// 			address: "800, 300",
// 			price: 10000,
// 			type: "palace",
// 			rooms: 2,
// 			guests: 3,
// 			checkin: "14:00",
// 			checkout: "14:00",
// 			features: ["dishwasher", "parking", "conditioner"],
// 			description: "",
// 			photos: [
// 				"http://o0.github.io/assets/images/tokyo/hotel3.jpg",
// 				"http://o0.github.io/assets/images/tokyo/hotel2.jpg",
// 				"http://o0.github.io/assets/images/tokyo/hotel1.jpg",
// 			],
// 		},

// 		location: {
// 			x: 800,
// 			y: 350,
// 		},
// 	},

// 	{
// 		author: {
// 			avatar: "img/avatars/user05.png",
// 		},

// 		offer: {
// 			title: "Красивый гостевой домик",
// 			address: "300, 200",
// 			price: 10000,
// 			type: "house",
// 			rooms: 2,
// 			guests: 7,
// 			checkin: "12:00",
// 			checkout: "12:00",
// 			features: ["elevator", "parking", "conditioner"],
// 			description: "",
// 			photos: [
// 				"http://o0.github.io/assets/images/tokyo/hotel1.jpg",
// 				"http://o0.github.io/assets/images/tokyo/hotel3.jpg",
// 				"http://o0.github.io/assets/images/tokyo/hotel2.jpg",
// 			],
// 		},

// 		location: {
// 			x: 300,
// 			y: 600,
// 		},
// 	},

// 	{
// 		author: {
// 			avatar: "img/avatars/user06.png",
// 		},

// 		offer: {
// 			title: "Некрасивый негостеприимный домик",
// 			address: "900, 600",
// 			price: 10000,
// 			type: "house",
// 			rooms: 1,
// 			guests: 1,
// 			checkin: "14:00",
// 			checkout: "12:00",
// 			features: ["elevator", "dishwasher", "parking", "conditioner"],
// 			description: "",
// 			photos: [
// 				"http://o0.github.io/assets/images/tokyo/hotel2.jpg",
// 				"http://o0.github.io/assets/images/tokyo/hotel3.jpg",
// 				"http://o0.github.io/assets/images/tokyo/hotel1.jpg",
// 			],
// 		},

// 		location: {
// 			x: 900,
// 			y: 600,
// 		},
// 	},

// 	{
// 		author: {
// 			avatar: "img/avatars/user07.png",
// 		},

// 		offer: {
// 			title: "Уютное бунгало далеко от моря",
// 			address: "1000, 400",
// 			price: 10000,
// 			type: "bungalo",
// 			rooms: 2,
// 			guests: 3,
// 			checkin: "13:00",
// 			checkout: "12:00",
// 			features: ["dishwasher", "wifi", "parking", "conditioner"],
// 			description: "",
// 			photos: [
// 				"http://o0.github.io/assets/images/tokyo/hotel3.jpg",
// 				"http://o0.github.io/assets/images/tokyo/hotel1.jpg",
// 				"http://o0.github.io/assets/images/tokyo/hotel2.jpg",
// 			],
// 		},

// 		location: {
// 			x: 1000,
// 			y: 400,
// 		},
// 	},

// 	{
// 		author: {
// 			avatar: "img/avatars/user08.png",
// 		},

// 		offer: {
// 			title: "Неуютное бунгало по колено в воде",
// 			address: "600, 100",
// 			price: 10000,
// 			type: "bungalo",
// 			rooms: 1,
// 			guests: 2,
// 			checkin: "14:00",
// 			checkout: "13:00",
// 			features: ["dishwasher", "parking"],
// 			description: "",
// 			photos: [
// 				"http://o0.github.io/assets/images/tokyo/hotel2.jpg",
// 				"http://o0.github.io/assets/images/tokyo/hotel3.jpg",
// 				"http://o0.github.io/assets/images/tokyo/hotel1.jpg",
// 			],
// 		},

// 		location: {
// 			x: 600,
// 			y: 200,
// 		},
// 	},
// ];
