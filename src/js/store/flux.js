const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			country_data: [],
			country_metrics: [],
			country_actuals: [],
			country_annotations: [],
			country_risklevels: [],
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			]
		},
		actions: {
			// Use getActions to call a function within a fuction
			fetchCountryData: () => {
				fetch(`https://api.covidactnow.org/v2/country/US.json?apiKey=${process.env.COVID_API_KEY}`, {
					method: "GET"
				})
					.then(function(response) {
						if (!response.ok) {
							throw Error(response.statusText);
						}
						return response.json();
					})
					.then(function(responseAsJson) {
						setStore({ country_metrics: responseAsJson.metrics });
						setStore({ country_actuals: responseAsJson.actuals });
						setStore({ country_annotations: responseAsJson.annotations });
						setStore({ country_risklevels: responseAsJson.riskLevels });
						return setStore({ country_data: responseAsJson });
					})
					.catch(function(error) {
						console.log("Looks like there was a problem: \n", error);
					});
			},
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			loadSomeData: () => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			}
		}
	};
};

export default getState;
