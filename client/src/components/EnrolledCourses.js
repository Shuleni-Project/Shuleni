export default function EnrolledCOurses() {
    const courses = [
        { id: 1, name: "Mathematics", instructor: "John Doe"},
        { id: 2, name: "English", instructor: "Jane Smith"},
        { id: 3, name: "Science", instructor: "David Lee" },
        { id: 4, name: "History", instructor: "Sarah Brown" }
    ];

    return (
        <>
            <h3 className="my-4 font-mono text-lg antialiased font-bold text-sky-900">ENROLLED COURSES</h3>
            {courses.map((course, index) => {
                return <div className="border-dashed border-b-2 p-4 flex max-w-full" key={index}>
                    <div className="flex-1">
                        <p>{course.name}</p>
                        <span className="text-xs text-slate-500 mt-8">7 lessons</span>
                    </div>
                    <div className="flex-1">
                        <p className="text-xs text-slate-500 mt-8">{course.instructor}</p>
                    </div>
                    <div className="flex-1">
                        <p className="text-xs text-slate-500 mt-8">20/25</p>
                    </div>
                    <div className="flex-1">
                        <div className="mt-8 h-1 w-full bg-neutral-200 dark:bg-neutral-600">
                            {/* <div
                                className="bg-slate-600 p-0.5 text-center text-xs font-medium leading-none text-primary-100"
                                style={{width: '25%'}}>
                                25%
                            </div> */}
                            {/* Change the style(width) to change size of bar/progress */}
                            <div className="h-1 bg-slate-600" style={{width: '25%'}}></div>
                        </div>
                    </div>
                </div>
            })}
        </>
    );
}
