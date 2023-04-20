export default function EnrolledCOurses() {
    const courses = [
        { id: 1, name: "Mathematics", instructor: "John Doe" },
        { id: 2, name: "English", instructor: "Jane Smith" },
        { id: 3, name: "Science", instructor: "David Lee" },
        { id: 4, name: "History", instructor: "Sarah Brown" }
    ];

    return (
        <>
            <h3 className="my-4 font-mono text-lg antialiased font-bold text-sky-900">ENROLLED COURSES</h3>
            {courses.map((course) => {
                return <div className="border-dashed border-b-2 p-6">
                    <p>{course.name}</p>
                </div>
            })}
        </>
    );
}
