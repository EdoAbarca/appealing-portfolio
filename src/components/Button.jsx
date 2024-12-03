import PropTypes from "prop-types"
const ButtonPrimary = ({ href, target = '_self', label, icon, classes }) => {
	if (href) {
		return (
			<a href={href} target={target} icon={icon} className={"btn btn-primary" + classes}>
				{label}
				{icon ? <span className="material-symbols-rounded" aria-hidden="true">{icon}</span> : undefined}
			</a>
		)
	} else {
		return (<button className={"btn btn-primary "+ classes}></button>)
	}
}

ButtonPrimary.propTypes = {
	label: PropTypes.string.isRequired,
	href: PropTypes.string,
	target: PropTypes.string,
	icon: PropTypes.string,
	classes: PropTypes.string
}

const ButtonOutline = ({ href, target = '_self', label, icon, classes }) => {
	if (href) {
		return (
			<a href={href} target={target} icon={icon} className={"btn btn-outline" + classes}>
				{label}
				{icon ? <span className="material-symbols-rounded" aria-hidden="true">{icon}</span> : undefined}
			</a>
		)
	} else {
		return (<button className={"btn btn-outline "+ classes}></button>)
	}
}

ButtonOutline.propTypes = {
	label: PropTypes.string.isRequired,
	href: PropTypes.string,
	target: PropTypes.string,
	icon: PropTypes.string,
	classes: PropTypes.string
}

export default { ButtonPrimary, ButtonOutline }