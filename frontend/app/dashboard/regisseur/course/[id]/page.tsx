'use client';
import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import { getCourseById } from '@utils/courses'; 
import { getProjectById } from '@utils/projects';
import { getNamesById } from '@utils/user';
import './course.styles.scss';
import Link from 'next/link';
import { ICourse, Project, IParticipant } from '@interface/courses.interface';
import Badge from '@components/badge/badge.component';
import Button from '@components/button/button.component';
import { HiArrowLeft } from 'react-icons/hi2';



export default function Page() {
	const { id } = useParams();
	const [course, setCourse] = useState<ICourse | null>(null);
	const [project, setProject] = useState<Project | null>(null);
	const [loading, setLoading] = useState(true);
	const [participants, setParticipants] = useState<IParticipant[]>([]);
	const [teachers, setTeachers] = useState<IParticipant[]>([]);

	useEffect(() => {
		const fetchCourseAndProject = async () => {
			try {
				if (id) {
					const fetchedCourse = await getCourseById(id);
					setCourse(fetchedCourse as unknown as ICourse);
					if (fetchedCourse?.related_project) {
						const fetchedProject = await getProjectById(fetchedCourse.related_project);
						setProject(fetchedProject as unknown as Project);
						if (fetchedCourse.participants) {
							const fetchedParticipants: IParticipant[] = [];
							for (const participant of fetchedCourse.participants) {
								const name = await getNamesById(participant);
								fetchedParticipants.push({ id: participant, name: name });
							}
							setParticipants(fetchedParticipants);
						}
						if (fetchedCourse.teachers) {
							const fetchedTeachers: IParticipant[] = [];
							for (const teacher of fetchedCourse.teachers) {
								const name = await getNamesById(teacher);
								fetchedTeachers.push({ id: teacher, name: name });
							}
							setTeachers(fetchedTeachers);
						}
					}
				}
			} catch (error) {
				console.error('Error loading data:', error);
			} finally {
				setLoading(false);
				console.log(participants);
			}
		};

		fetchCourseAndProject();
	}, [id]);

	useEffect(()=>{
		console.log('course', course);
		console.log('project', project);
		console.log('participants', participants);
		
	}, [course, project, participants]);

	if (loading) {
		return (
			<main id="course">
				<h1>Loading...</h1>
			</main>
		);
	}

	return (
		<main id="course">
			{project ? (
				<>
					<Button
						text="Go Back"
						onClicked={() => window.history.back()}
						type="secondary"
						leftIcon={<Badge
							type="transparent"
							icon={<HiArrowLeft />} />}
					/>
					<h1 className="course-title">Project "{project.title}"</h1>
					<div className="tags">
						{project.tags.map((tag) => (
							<span className="tag" key={tag}>
								{tag}
							</span>
						))}
					</div>
					<div className="status">
						<p className="global-status">
              Global status : <span>{project.global_status}</span>
						</p>
						<p className="scope-status">
              Scope status : <span>{project.scope_status}</span>
						</p>
					</div>
					<h2 className="section-title">Description :</h2>
					<section className="description" dangerouslySetInnerHTML={{ __html: project.description }}></section>
					{project.project_link && (
						<>
							<h2 className="section-title">Project link :</h2>
							<section>
								<a href={project.project_link}>{project.project_link}</a>
							</section>
						</>
					)
					}
					{project.project_files.length > 0 && (
						<>
							<h2 className="section-title">Project files :</h2>
							<section>
								<ul>
									{project.project_files.map((file) => (
										<li key={file}>
											<a href={file}>{file}</a>
										</li>
									))}
								</ul>
							</section>
						</>
					)}
					{course && (
						<>
							<h2 className="section-title">Teachers :</h2>
							<section>
								{teachers.map((teach) => (
									<Link href={`/dashboard/user/${teach.id}`} key={teach.id}>
										<p>{`${teach.name}`}</p>
									</Link>
								))}
							</section>
							<h2 className="section-title">Participants :</h2>
							<section>
								{participants.map((participant) => (
									<Link href={`/dashboard/user/${participant.id}`} key={participant.id}>
										<p>{`${participant.name}`}</p>
									</Link>
								))}
							</section>
						</>
					)}

				</>
			) : (
				<h1>No project data found.</h1>
			)}
		</main>
	);
}
