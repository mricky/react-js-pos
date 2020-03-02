import {makeStyles} from '@material-ui/styles';

const useStyles = makeStyles(theme=>({
	title:{
		//color: theme.pallete.primary.main
		textAlign: 'center',
		marginBottom:theme.spacing(3) // 24 px
	},
	paper:{
		marginTop: theme.spacing(8), // menghasilkan 64 px
		padding: theme.spacing(6)
	},
	buttons:{
		marginTop: theme.spacing(6)
	}

}))

export default useStyles;