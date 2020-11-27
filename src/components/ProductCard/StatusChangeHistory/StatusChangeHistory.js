import classes from './StatusChangeHistory.module.css'

const StatusChangeHistory = (props) => {
	return (
		<div className={classes.History}> 
			<span className={classes.time}>{props.time}</span>&nbsp;
			<span>{props.oldStatus}</span>
			&nbsp;→&nbsp;
			<span>{props.newStatus}</span>
		</div>
	)
}

export default StatusChangeHistory
