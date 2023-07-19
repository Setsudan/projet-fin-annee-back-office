import {useState} from 'react';
import './projectList.styles.scss';
import Chip from '@components/chip/chip.components';
import { HiPlus } from 'react-icons/hi2';
import Badge from '@components/badge/badge.component';
import { projectListProps } from '@interface/components.props';

export default function ProjectList() {
	const list: projectListProps['list'] = [
		{
			name: 'Project 1',
			id: '1',
		},
		{
			name: 'Project 2',
			id: '2',
		},
		{
			name: 'Project 3',
			id: '3',
		},
	];
	const [selected, setSelected] = useState(list[0].id);

	return (
		<>
			<div className={'project_list'}>
				<div className={'project_list__header'}>
					<h3>Projects</h3>
					{list.map((item) => (
						<Chip
							isSelected = { selected === item.id}
							onClicked = {() => setSelected(item.id)}
							text={item.name} key={item.id}
							setIsSelected={() => setSelected(item.id)}
						/>
					))}
				</div>
				<Chip
					setIsSelected={
						() => {
							setSelected('new');
						}
					}
					isSelected={selected === 'new'}
					onClicked={() => setSelected('new')}
					text="Create new project"
					icon={<Badge icon={<HiPlus />} type="transparent" />}
				/>
			</div>
		</>
	);
}
