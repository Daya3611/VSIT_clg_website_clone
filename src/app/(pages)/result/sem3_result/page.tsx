"use client"
import React, { useState } from "react";

interface StudentDetails {
  rollNo: string;
  studentName: string;
  course: string;
  semester: string;
  results: ResultRow[];
}

interface ResultRow {
  subjectName: string;
  internal: string | number;
  theory: string | number;
  total: string | number;
}

const Page: React.FC = () => {
  const [rollNo, setRollNo] = useState<string>("");
  const [studentData, setStudentData] = useState<StudentDetails | null>(null);

 
  const students: StudentDetails[] = [
    {
      rollNo: "23302B0019",
      studentName: "SAM CHADDI BANIYAN WALA",
      course: "B.Sc.IT",
      semester: "III",
      results: [
        { subjectName: "Pythone Programing", internal: '7E', theory: '25E', total: '32E' },
        { subjectName: "Pythone Programing practicale", internal: '--', theory: '--', total: '11E' },
        { subjectName: "Data Structures", internal: '5E', theory: '20E', total: '25E' },
        { subjectName: "Data Structures practicale", internal: '--', theory: '--', total: '9E' },
        { subjectName: "Computer Network", internal: '2E', theory: '18E', total: '20E' },
        { subjectName: "Computer Network practicle", internal: '--', theory: '--', total: '12E' },
        { subjectName: "Oprating System", internal: '4E', theory: '26E', total: '30E' },
        { subjectName: "Oprating System practicle", internal: '--', theory: '--', total: '15E' },
        { subjectName: "Applied Mathematics", internal: '6E', theory: '24E', total: '30E' },
        { subjectName: "Mobile Programming practile", internal: '--', theory: '--', total: '16E' },
        { subjectName: "Grand Total", internal: " ", theory: '200', total: "unsuccessful" },
      ],
    },
    
  ];

  const handleSearch = () => {
    const student = students.find((s) => s.rollNo === rollNo);
    setStudentData(student || null);
  };

  const handleReset = () => {
    setRollNo("");
    setStudentData(null);
  };

  return (
    <div className="p-6 bg-white flex flex-col items-center min-h-screen">
      <div className="w-full max-w-5xl bg-white border rounded-lg p-4">
        <h2 className="text-center text-2xl font-bold mb-4">
          RESULT OF UG COURSES FOR SEMESTER-3 REGULAR & ATKT OCTOBER 2024
        </h2>
        <div className="flex justify-center mb-6">
          <input
            type="text"
            value={rollNo}
            onChange={(e) => setRollNo(e.target.value)}
            placeholder="Enter Roll No"
            className="border border-gray-300 rounded-md px-4 py-2 mr-2 w-80 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <button
            onClick={handleSearch}
            className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition"
          >
            Search
          </button>
          <button
            onClick={handleReset}
            className="ml-2 bg-gray-300 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-400 transition"
          >
            Reset
          </button>
        </div>

        {rollNo && !studentData && (
          <>
            
            <p className="text-center text-red-500">
              *In case of result not found, kindly check with the exam cell in
              college
            </p>
          </>
        )}

        {studentData && (
            
          <>
            <div className="border border-gray-300 mb-6 p-4">
              <table className="w-full table-fixed border-collapse">
                <tbody>
                  <tr>
                    <td className="border px-4 py-2 font-semibold">Roll No</td>
                    <td className="border px-4 py-2">{studentData.rollNo}</td>
                  </tr>
                  <tr>
                    <td className="border px-4 py-2 font-semibold">
                      Student Name
                    </td>
                    <td className="border px-4 py-2">{studentData.studentName}</td>
                  </tr>
                  <tr>
                    <td className="border px-4 py-2 font-semibold">Course</td>
                    <td className="border px-4 py-2">{studentData.course}</td>
                  </tr>
                  <tr>
                    <td className="border px-4 py-2 font-semibold">Semester</td>
                    <td className="border px-4 py-2">{studentData.semester}</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <table className="w-full border border-gray-300 text-left">
              <thead>
                <tr className="bg-red-600 text-white">
                  <th className="border px-4 py-2">Subject Name</th>
                  <th className="border px-4 py-2">IN</th>
                  <th className="border px-4 py-2">TH</th>
                  <th className="border px-4 py-2">TOT</th>
                </tr>
              </thead>
              <tbody>
                {studentData.results.map((row, index) => (
                  <tr
                    key={index}
                    className={index % 2 === 0 ? "bg-gray-100" : "bg-white"}
                  >
                    <td className="border px-4 py-2">{row.subjectName}</td>
                    <td className="border px-4 py-2 text-center">
                      {row.internal}
                    </td>
                    <td className="border px-4 py-2 text-center">
                      {row.theory}
                    </td>
                    <td className="border px-4 py-2 text-center">
                      {row.total}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </>
        )}
      </div>
    </div>
  );
};

export default Page;

