'use client';
import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import { getProjectById } from '@utils/projects';
import './project.styles.scss';
import { Record } from 'pocketbase';
import Button from '@components/button/button.component';
import { HiArrowLeft } from 'react-icons/hi2';
import Badge from '@components/badge/badge.component';

export default function Page() {
	const { id } = useParams();
	const [project, setProject] = useState<Record | null>(null);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const fetchProject = async () => {
			try {
				if (id) {
					const fetchedProject = await getProjectById(id);
					setProject(fetchedProject);
					setLoading(false);
				}
			} catch (error) {
				console.log(error);
			}
		};
		fetchProject();
	}
	, [id]);
    
	useEffect(() => {
		console.log(project);
	}, [project]);
    
	return (
		<main id="project">
			<Button
				text="Go Back"
				onClicked={() => window.history.back()}
				type="secondary"
				leftIcon={<Badge
					type="transparent"
					icon={<HiArrowLeft />} />}
			/>
			<h1>Project</h1>
			{loading ? (
				<p>Loading...</p>
			) : (
				<>
					<h2
						className="project-title"
					>{project?.title}</h2>
					<section className="description" dangerouslySetInnerHTML={{ __html: project?.description }}></section>
					<div className="status">
						<p>{project?.global_status}</p>
						<p>{project?.scope_status}</p>
					</div>
					<div className="tags">
						{
							project?.tags.map((tag: string) => {
								return (
									<span className="tag" key={tag}>
										{tag}
									</span>
								);
							}
							)
						}
					</div>
					<p className='project-created'>
						{
							project?.created ? `Created the ${new Date(project?.created as string).toLocaleDateString()} at ${new Date(project?.created as string).toLocaleTimeString()}` : ''
						}
					</p>
					<p className="project-updated">
						{
							project?.updated ? `Last modified the ${new Date(project?.updated as string).toLocaleDateString()} at ${new Date(project?.updated as string).toLocaleTimeString()}` : ''
						}</p>
				</>
			)}
		</main>
	);
}