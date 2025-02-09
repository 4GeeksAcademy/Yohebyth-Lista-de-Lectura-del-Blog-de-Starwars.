const getState = ({ getStore, setStore }) => {
	return {
		store: {
			characters: [],
			vehicles: [],
			planets: [],
			favorites: [],
		},
		actions: {
			getCharacters: () => {
				const store = getStore();			
				if(store.characters.length===0){
					fetch("https://www.swapi.tech/api/people")
					.then(resp => {
						return resp.json()
					})
					.then(data => setStore({ characters: data.results }))
					.catch(err => console.error(err))
				}				
			},
			getVehicles: () => {
				const store = getStore();
				if(store.characters.length===0){
					fetch("https://www.swapi.tech/api/vehicles")
					.then(resp => {
						return resp.json()
					})
					.then(data => setStore({ vehicles: data.results }))
					.catch(err => console.error(err))
				}				
			},
			getPlanets: () => {
				const store = getStore();
				if(store.planets.length===0){
					fetch("https://www.swapi.tech/api/planets")
					.then(resp => {
						return resp.json()
					})
					.then(data => setStore({ planets: data.results }))
					.catch(err => console.error(err))
				}				
			},
			addFavorite: (favorite_name) => {
				const store=getStore();
				setStore({ favorites: [...store.favorites, favorite_name]					
				})			
			},
			removeFavorite: (favorite_name) => {
				const store=getStore();
				setStore({ favorites: store.favorites.filter((favorite) => favorite !== favorite_name)					
				});
				
			}
		}
	};
};
export default getState;

