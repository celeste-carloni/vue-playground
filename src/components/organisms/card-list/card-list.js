import AppCard from './../../molecules/app-card/AppCard';

export default{
	name: "CardList",
	components: {
		AppCard
	},
	data(){
		return{}
	}, 
	props:{
		items: Array
	}
}