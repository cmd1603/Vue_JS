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
			let self = this;

			axios.get(CRYPTOCOMPARE_API_URI + "/api/data/coinlist")
				.then((resp) => {
					this.coinData = resp.data.Data;
					this.getCoins();
				})
				.catch((err) => {
					this.getCoins();
					console.error(err);
				});
		},

		getCoins: function() {
			let self = this;

			axios.get(COINMARKETCAP_API_URI + "/v1/ticker/?limit=10")
				.then((resp) => {
					this.coins = resp.data;
				})
				.catch((err) => {
					console.error(err);
				});
		},

		getCoinImage: function(symbol) {
			return CRYPTOCOMPARE_API_URI + this.coinData[symbol].ImageUrl;
		}
	}
})