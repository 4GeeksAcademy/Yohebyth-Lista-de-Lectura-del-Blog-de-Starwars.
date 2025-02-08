const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			characters: [],
			vehicles: [],
			planets: [],
			favorites: [],
		},
		actions: {
			getCharacters: () => {
				fetch("https://www.swapi.tech/api/people")
					.then(resp => {
						return resp.json()
					})
					.then(data => setStore({ characters: data.results }))
					.catch(err => console.error(err))
			},
			getVehicles: () => {
				fetch("https://www.swapi.tech/api/vehicles")
					.then(resp => {
						return resp.json()
					})
					.then(data => setStore({ vehicles: data.results }))
					.catch(err => console.error(err))
			},
			getPlanets: () => {
				fetch("https://www.swapi.tech/api/planets")
					.then(resp => {
						return resp.json()
					})
					.then(data => setStore({ planets: data.results }))
					.catch(err => console.error(err))
			},
			addFavorite: (favorite) => {
				const store=getStore();
				setStore({ favorites: [...store.favorites, favorite]					
				})
				console.log(store.favorites);				
			},
			removeFavorite: (item) => {
				const store=getStore();
				setStore({ favorites: store.favorites.filter((favorite) => favorite !== item)					
				});
			}
		}
	};
};
export default getState;

