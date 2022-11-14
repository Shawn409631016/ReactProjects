import React from 'react';

const students = ['ShawnFromStudents', 'AndyFromStudents', 'GigiFromStudents'];
const studentList = students.map((person) => <li>{person}</li>);
function Students() {
	return (
		<div>
			<ul>{studentList}</ul>
		</div>
	);
}

export default Students;
