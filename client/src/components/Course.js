import Courses from './ReusableComponents/Courses';

import ViewItems from './ReusableComponents/ViewItems/RowedItems';

import { useSelector, useDispatch } from 'react-redux';

function Course({item, role}) {
  const user = useSelector((state) => state.user.data);

  
  return (
    <div className='min-h-screen '>
    <ViewItems/>
    {/* <Courses item={item} role={role}/> */}
    </div>
    
  )
}

export default Course;