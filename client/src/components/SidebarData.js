import React from "react";
import HomeIcon from '@mui/icons-material/Home';
import PersonIcon from '@mui/icons-material/Person';
import GroupsIcon from '@mui/icons-material/Groups';
import SchoolIcon from '@mui/icons-material/School';
import SubjectIcon from '@mui/icons-material/Subject';

export const SidebarData =[

    {
      title: "Home",
      icon: <HomeIcon />,
      link: "https://frontend-react-js.vercel.app/"

    },
    {
        title: "No-students",
        icon: <PersonIcon />,
        link: "https://frontend-react-js.vercel.app/"
  
      },

      {
        title: "Schools",
        icon: <SchoolIcon />,
        link: ""
      },
      {
        title: "No-educators",
        icon: <GroupsIcon />,
        link: "/Educators"
  
      },
      {
        title: "No-of classes",
        icon: <SchoolIcon />,
        link: "/classes"

      },

        {
            title: "Couse-List",
            icon: <SubjectIcon />,
            link: "/Course"
      
          }
      
  
]