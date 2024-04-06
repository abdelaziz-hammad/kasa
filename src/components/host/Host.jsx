/**
 * Renders the host component.
 * @param {Object} props - The component props.
 * @param {string} props.hostName - The name of the host.
 * @param {string} props.hostPic - The URL of the host's picture.
 * @param {string} props.id - The ID of the host.
 * @returns {JSX.Element} The host component.
 */
export default function Host(props) {
	return (
		<aside className="host-comp">
			<div className="host-name">{props.hostName}</div>
			<div className="hostPicture">
				<img src={props.hostPic} alt={props.id} />
			</div>
		</aside>
	);
}
