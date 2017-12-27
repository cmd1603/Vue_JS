const CRYPTOCOMPARE_API_URI = "https://min-api.cryptocompare.com";
const COINMARKETCAP_API_URI = "https://api.coinmarketcap.com/";
const BASE_IMAGE_URL = "https://www.cryptocompare.com";
const UPDATE_INTERVAL = 60 * 1000;

let app = new Vue({
	el: "#app",
	data: {
		coin: [],
		coinData: {}
	},
	methods: {
		getCoinData: function() {

		},

		getCoins: function() {
			
		},

		getCoinImage: function(symbol) {
			
		}
	}
})