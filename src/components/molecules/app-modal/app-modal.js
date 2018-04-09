import AppButton from './../../atoms/app-button/AppButton';
import { toggle } from './../../mixins/toggle';

export default{
	name: 'AppModal',
	mixins: [toggle],
	components:{
		AppButton
	}
}