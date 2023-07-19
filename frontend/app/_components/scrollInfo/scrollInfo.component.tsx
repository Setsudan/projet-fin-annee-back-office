import Chip from '@components/chip/chip.components';
import { primary } from '@scss/variables';
import { useRef } from 'react';
import { HiPlusCircle } from 'react-icons/hi2';
import './scrollInfo.styles.scss';
import { ScrollInfoProps } from '@interface/components.props';



export default function ScrollInfo({ dataContent }: ScrollInfoProps) {
	const listRef = useRef(null);

	return (
		<div className="backgroundScrollInfo">
			<div className="containerScrollInfo">
				<h3 className="titleScrollInfo">Projets en cours</h3>
				<div className="scrollableInfo" ref={listRef}>
					<ul className="list">
						{dataContent.map((content, index) => (
							<li key={index}>
								<button>{content}</button>
							</li>
						))}
					</ul>
				</div>
				<Chip
					type="primary"
					text="Create Project"
					icon={<HiPlusCircle size={16} color={primary} />}
					isSelected={false}
					onClicked={() => { }}
					setIsSelected={() => { }}
				/>
			</div>
		</div>
	);
}
