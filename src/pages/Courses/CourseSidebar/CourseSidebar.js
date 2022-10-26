import React from "react";
import SidebarMenu from "react-bootstrap-sidebar-menu";
import { Link } from "react-router-dom";

const CourseSidebar = ({courses}) => {
    // console.log(courses)
  return (
    <div className=" px-1 py-5">
      <SidebarMenu>
        <SidebarMenu.Header>
          <SidebarMenu.Brand><h3 className=" mb-3">
          Courses
            </h3></SidebarMenu.Brand>
          
        </SidebarMenu.Header>
        <SidebarMenu.Body>
          <SidebarMenu.Nav>
            <SidebarMenu.Nav.Link>
              <SidebarMenu.Nav.Title style={{textAlign: 'left', textDecoration: 'none'}}>

                <div >
                {
                    courses.map(courseName => <p><Link to={`/course/${courseName.id}`} className="mb-3 text-white">{courseName.name}</Link></p>)
                }
                </div>
              </SidebarMenu.Nav.Title>
            </SidebarMenu.Nav.Link>
          </SidebarMenu.Nav>
        </SidebarMenu.Body>
      </SidebarMenu>
    </div>
  );
};

export default CourseSidebar;
