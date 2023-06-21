import React, { useEffect, useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";

import Profile from "./Profile";
import StudentInFormation from "./StudentInformation/StudentInFormation";
import Attendance from "./Attendance";
import Exam from "./Exam";
import Subjects from "./Subjects";

const StudentDetails = () => {
  const [tabIndex, setTabIndex] = useState(0);
  const [activeTab, setActiveTab] = useState("");

  useEffect(() => {
    setActiveTab("bg-[#95BCF2] bg-opacity-70");
  }, [tabIndex]);
  return (
    <div className="bg-white p-5 ">
      <div className="bg-secondary border-[1.5px] border-black px-7 pb-3">
        <Profile></Profile>

        <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
          <TabList className="flex cursor-pointer">
            <Tab
              className={`${
                tabIndex === 0 ? activeTab : " bg-[#DDDDDD]"
              } tab-default`}>
              Profile
            </Tab>
            <Tab
              className={`${
                tabIndex === 1 ? activeTab : " bg-[#DDDDDD]"
              } tab-default`}>
              Attendance
            </Tab>
            <Tab
              className={`${
                tabIndex === 2 ? activeTab : " bg-[#DDDDDD]"
              } tab-default`}>
              Exam
            </Tab>
            <Tab
              className={`${
                tabIndex === 3 ? activeTab : " bg-[#DDDDDD]"
              } tab-default`}>
              Subject
            </Tab>
            <Tab
              className={`${
                tabIndex === 4 ? activeTab : " bg-[#DDDDDD]"
              } tab-default`}>
              Fee
            </Tab>
          </TabList>
          <hr className="border-black border mt-2 mb-3" />
          <TabPanel>
            <StudentInFormation></StudentInFormation>
          </TabPanel>
          <TabPanel>
            <Attendance></Attendance>
          </TabPanel>
          <TabPanel>
            <Exam></Exam>
          </TabPanel>
          <TabPanel>
            <Subjects></Subjects>
          </TabPanel>
          <TabPanel>
            <h1>Comming soon</h1>
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
};

export default StudentDetails;
