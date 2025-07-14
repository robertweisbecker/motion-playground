import './styles.css';

const LENGTH = 3;

export default function StackedComponent() {
	return (
		<div className="wrapper">
			{new Array(LENGTH).fill(0).map((_, i) => (
				<div className="card" key={i} />
			))}
		</div>
	);
}
