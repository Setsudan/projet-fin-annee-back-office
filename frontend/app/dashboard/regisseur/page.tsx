'use client';
import Badge from '@components/badge/badge.component';
import Button from '@components/button/button.component';
import ProjectList from '@components/projectList/projectList.component';
import ProjectCard from '@components/projectcard/projectcard.component';
import { HiArrowUpRight, HiFolder } from 'react-icons/hi2';

export default function Page() {
	return (
		<div className="content">
			<h1>Bonjour</h1>
			<div className="actions">
				<Button
					text="Project"
					leftIcon={<Badge icon={<HiFolder />} type="transparent" />}
					type="success"
					rightIcon={<Badge icon={<HiArrowUpRight />} type="transparent" />}
					isTransparent
					onClicked={() => {
						window.location.href = '/dashboard/regisseur/projects';
					}}
				/>
				<Button
					text="File"
					leftIcon={<Badge icon={<HiFolder />} type="transparent" />}
					type="info"
					rightIcon={<Badge icon={<HiArrowUpRight />} type="transparent" />}
					isTransparent
				/>
				<Button
					text="Traduction"
					leftIcon={<Badge icon={<HiFolder />} type="transparent" />}
					type="primary"
					rightIcon={<Badge icon={<HiArrowUpRight />} type="transparent" />
					}
					isTransparent
				/>
				<Button
					text="En attente"
					leftIcon={<Badge icon={<HiFolder />} type="transparent" />}
					type="warning"
					rightIcon={<Badge icon={<HiArrowUpRight />} type="transparent" />}
					isTransparent
				/>
				<Button
					text="Alerte"
					leftIcon={<Badge icon={<HiFolder />} type="transparent" />}
					type="alert"
					rightIcon={<Badge icon={<HiArrowUpRight />} type="transparent" />}
					isTransparent
				/>
			</div>
			<div className="projects">
				<ProjectList />
				<div className={'project_content'}>
					<ProjectCard
						icon={<Badge icon={<HiFolder />} type="info" />}
						status="In progress"
						progress={50}
						link="https://google.com"
						name="John Doe"
						role="Developer"
						type="Web"
					/>
					<ProjectCard
						icon={<Badge icon={<HiFolder />} type="info" />}
						status="In progress"
						progress={50}
						link="https://google.com"
						name="John Doe"
						role="Developer"
						type="Web"
					/>
					<ProjectCard
						icon={<Badge icon={<HiFolder />} type="info" />}
						status="In progress"
						progress={50}
						link="https://google.com"
						name="John Doe"
						role="Developer"
						type="Web"
					/>
					<ProjectCard
						icon={<Badge icon={<HiFolder />} type="info" />}
						status="In progress"
						progress={50}
						link="https://google.com"
						name="John Doe"
						role="Developer"
						type="Web"
					/>
				</div>
			</div>
		</div>
	);
}
