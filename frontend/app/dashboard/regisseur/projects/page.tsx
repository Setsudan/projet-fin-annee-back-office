'use client';

import { ICourse } from '@interface/courses.interface';
import { getAllCourses } from '@utils/courses';
import Link from 'next/link';

import { useEffect, useState } from 'react';



export default function Page() {
	const [allCourses, setAllCourses] = useState<ICourse[]>([]);

	useEffect(() => {
		getAllCourses().then((data) => {
			console.log(data);
			setAllCourses(data as unknown as ICourse[]);
		});
	}, []);


	return (
		<main id="courses">
			<h1>All courses</h1>
			<table>
				<thead>
					<tr>
						<th>Course id</th>
						<th>Created</th>
						<th>Updated</th>
						<th>Participants</th>
						<th>Teachers</th>
						<th>Related project</th>
					</tr>
				</thead>
				<tbody>
					{allCourses.map((course) => {
						return (
							<tr key={course.id}>
								<td>
									<Link href={`/dashboard/regisseur/course/${course.id}`}>
										{course.id}
									</Link>
								</td>
								<td>{course.created}</td>
								<td>{course.updated}</td>
								<td>
									{course.participants.map((participant) => {
										return (
											<Link
												key={participant}
												href={`/dashboard/user/${participant}`}
											>
												{participant}
											</Link>
										);
									})}
								</td>
								<td>
									{course.teachers.map((teacher) => {
										return (
											<Link key={teacher} href={`/dashboard/user/${teacher}`}>
												{teacher}
											</Link>
										);
									})}
								</td>
								<td>
									<Link
										href={`/dashboard/regisseur/project/${course.related_project}`}
									>
										{course.related_project}
									</Link>
								</td>
							</tr>
						);
					})}
				</tbody>
			</table>
		</main>
	);
}
