
// // 'use client';

// // import { motion } from "framer-motion";
// // import { SubNavHeader } from "@/components/sub-nav-header";
// // import { GraduationCap } from "lucide-react";

// // const ViewButton = ({ href }: { href: string }) => (
// //   <a
// //     href={href}
// //     target="_blank"
// //     rel="noopener noreferrer"
// //     className="btn btn-primary btn-sm"
// //   >
// //     View <i className="bi bi-box-arrow-up-right ms-1"></i>
// //   </a>
// // );

// // const facultyList = [
// //   { id: 1, name: "Mrs. Sudha Bhat", designation: "Principal", qualification: "B.Sc, B.Ed" },
// //   { id: 2, name: "Mrs. Sushma Patil", designation: "Co-ordinator", qualification: "M.Sc" },
// //   { id: 3, name: "Mrs. Ashwini Shahane", designation: "TGT (Science)", qualification: "M.Sc, B.Ed" },
// //   { id: 4, name: "Mrs. Laxmi Jadhav", designation: "TGT (Science)", qualification: "B.Sc, B.Ed" },
// //   { id: 5, name: "Mrs. Mrunal Shekhar Bagul", designation: "TGT (Hist/Geo)", qualification: "MA, B.Ed" },
// //   { id: 6, name: "Mrs. Tambe Surekha", designation: "TGT (English)", qualification: "BA, B.Ed" },
// //   { id: 7, name: "Mrs. Vidya Patil", designation: "TGT (Hindi)", qualification: "MA, M.Ed" },
// //   { id: 8, name: "Mrs. Jayashree Bhure", designation: "TGT (German)", qualification: "German A1 A2 B1 Level" },
// //   { id: 9, name: "Mrs. Archana Kulkarni", designation: "TGT (Marathi)", qualification: "MA, M.Ed" },
// //   { id: 10, name: "Mrs. Pooja Nakhate", designation: "TGT (IT)", qualification: "BE (IT)" },
// //   { id: 11, name: "Mrs. Savita Dahale", designation: "PRT (B.Sc, B.Ed)", qualification: "B.Sc, B.Ed" },
// //   { id: 12, name: "Mrs. Arpana Kalbande", designation: "PRT (B.Sc, B.Ed)", qualification: "B.Sc, B.Ed" },
// //   { id: 13, name: "Mrs. Harsha Khodake", designation: "PRT (MA, B.Ed)", qualification: "MA, B.Ed" },
// //   { id: 14, name: "Mrs. Pranita More", designation: "PRT (B.Sc, B.Ed)", qualification: "B.Sc, B.Ed" },
// //   { id: 15, name: "Mrs. Pooja Kapase", designation: "PRT (M.Sc, B.Ed)", qualification: "M.Sc, B.Ed" },
// //   { id: 16, name: "Mrs. Chaitali Pange", designation: "PRT (B.Sc, B.Ed)", qualification: "B.Sc, B.Ed" },
// //   { id: 17, name: "Mrs. Ashwini Deshmukh", designation: "PRT (M.Sc, B.Ed)", qualification: "M.Sc, B.Ed" },
// //   { id: 18, name: "Mrs. Smita Band", designation: "PRT (MA, B.Ed)", qualification: "MA, B.Ed" },
// //   { id: 19, name: "Mrs. Bharti Halloli", designation: "PRT (BA, B.Ed)", qualification: "BA, B.Ed" },
// //   { id: 20, name: "Miss Neha Inamdar", designation: "PRT (B.Com, B.Ed)", qualification: "B.Com, B.Ed" },
// //   { id: 21, name: "Mrs. Reshma Dhamale", designation: "PRT (M.Sc, B.Ed)", qualification: "M.Sc, B.Ed" },
// //   { id: 22, name: "Mrs. Aarati Bhalerao", designation: "PRT (MA, BP.Ed)", qualification: "MA, BP.Ed" },
// //   { id: 23, name: "Mrs. Shital Patil", designation: "PRT (M.Sc)", qualification: "M.Sc" },
// //   { id: 24, name: "Mrs. Reetu Lokhande", designation: "PRT (Diploma in CSE)", qualification: "Diploma in CSE" },
// //   { id: 25, name: "Mrs. Lata Maniyan", designation: "PRT (M.Com)", qualification: "M.Com" },
// //   { id: 26, name: "Mrs. Manjusha Paul", designation: "PRT (B.Com, D.Ted)", qualification: "B.Com, D.Ted" },
// //   { id: 27, name: "Mrs. Pradnya Vetal", designation: "PRT (BA, ECCED Phonix)", qualification: "BA, ECCED Phonix" },
// //   { id: 28, name: "Mrs. Gauri Thombre", designation: "PRT (M.Tech Electronics)", qualification: "M.Tech Electronics" },
// //   { id: 29, name: "Mrs. Sneha Jadhav", designation: "PRT (M.Com, GDCA)", qualification: "M.Com, GDCA" },
// //   { id: 30, name: "Mrs. Pratiksha Pathade", designation: "PRT (M.Sc)", qualification: "M.Sc" },
// //   { id: 31, name: "Miss Nikita Mor", designation: "PRT (BA, D.Ed)", qualification: "BA, D.Ed" },
// //   { id: 32, name: "Mrs. Sangita Bargaje", designation: "PRT (MA, TTC)", qualification: "MA, TTC" },
// //   { id: 33, name: "Mrs. Sadhana Bhalerao", designation: "PRT (B.Com, MCM)", qualification: "B.Com, MCM" },
// //   { id: 34, name: "Mrs. Arundhati Patil", designation: "PRT (IT)", qualification: "B.Sc, MBA, PGDBO (COM)" },
// //   { id: 35, name: "Mr. Santosh Naik", designation: "PRT (PI)", qualification: "B.Ped, M.Ed (PE)" },
// //   { id: 36, name: "Mr. Pratik Lonkar", designation: "MCF", qualification: "BA, NCC" },
// //   { id: 37, name: "Mrs. Rupali Devkar", designation: "Drawing Teacher", qualification: "GD Arts, Dip Aed, MA" },
// //   { id: 38, name: "Mrs. Mayuri Joshi", designation: "Music Teacher", qualification: "MA, Music Visharad" },
// //   { id: 39, name: "Mrs. Megha Suryawanshi", designation: "Dance Teacher", qualification: "MBA, HR" },
// //   { id: 40, name: "Mrs. Annapurna Madasanal", designation: "Librarian", qualification: "M.Sc, B.Ed" },
// //   { id: 41, name: "Mr. Maruti Dadarao Khokshe", designation: "Special Educator", qualification: "MA, DSA (Spl Edu)" },
// //   { id: 42, name: "Mrs. Swati Sandeep Kasbe", designation: "Counselor", qualification: "BA Psychology" },
// //   { id: 43, name: "Mrs. Puneeta Tamhankar", designation: "Accountant/Admin", qualification: "BBA, CA Intermediate" },
// //   { id: 44, name: "Miss Ritu Sachin Awate", designation: "Nurse", qualification: "GNM (Nursing)" }
// // ];


// // const MpdPage = () => {
// //   return (
// //     <div className="min-h-screen bg-gradient-to-br from-[#f9f6fb] to-white font-serif">
// //       <SubNavHeader title="Mandatory Public Disclosure" items={[]} />
// //       <div className="container pt-5 mt-5" style={{ fontFamily: 'Georgia, serif' }}>
       
// //         <motion.div
// //                   initial={{ opacity: 0, y: 30 }}
// //                   whileInView={{ opacity: 1, y: 0 }}
// //                   viewport={{ once: true }}
// //                   transition={{ duration: 0.6 }}
// //                   className="text-center"
// //                 >
// //                   <h1 className="text-4xl font-bold text-[#800000] mb-2">  Mandatory Public Disclosure (APPENDIX - IX)</h1>
// //                   <div className="h-1 w-24 mx-auto bg-gradient-to-r from-[#800000] to-[#800000] rounded-full mb-6" />
                 
// //                 </motion.div>

// //         {/* Section A: General Information */}
// //         <div className="card mb-4 shadow-sm">
// //           <div className="card-header text-white fw-bold" style={{ backgroundColor: '#800000' }}>A : General Information</div>
// //           <div className="card-body">
// //             <table className="table table-bordered table-striped">
// //               <tbody>
// //                 <tr><td>1</td><td>NAME OF THE SCHOOL</td><td>Abhishek International School</td></tr>
// //                 <tr><td>2</td><td>AFFILIATION NO. (IF APPLICABLE)</td><td>1131099</td></tr>
// //                 <tr><td>3</td><td>SCHOOL CODE (IF APPLICABLE)</td><td>31087</td></tr>
// //                 <tr><td>4</td><td>COMPLETE ADDRESS WITH PIN CODE</td><td>Plot No.2, Sector No.6, Moshi Pradhikaran, Pune - 412105</td></tr>
// //                 <tr><td>5</td><td>PRINCIPAL NAME</td><td>Mrs. Sudha Bhat</td></tr>
// //                 <tr><td>6</td><td>PRINCIPAL QUALIFICATION</td><td>B.S.C, B.Ed ,DSM</td></tr>
// //                 <tr><td>7</td><td>SCHOOL EMAIL ID</td><td>abhishekinternational.cbse@gmail.com</td></tr>
// //                 <tr><td>8</td><td>CONTACT DETAILS (LANDLINE/MOBILE)</td><td>8446713030</td></tr>
// //               </tbody>
// //             </table>
// //           </div>
// //         </div>

// //         {/* Section B: Documents and Information */}
// //         <div className="card mb-4 shadow-sm">
// //           <div className="card-header text-white fw-bold" style={{ backgroundColor: '#800000' }}>B : Documents and Information</div>
// //           <div className="card-body">
// //             <table className="table table-bordered table-striped">
// //               <thead className="table-light">
// //                 <tr><th>SR No.</th><th>DOCUMENTS / INFORMATION</th><th>UPLOADED DOCUMENTS</th></tr>
// //               </thead>
         
// //                         <tbody>
// //               <tr><td>1</td><td>COPIES OF AFFILIATION / UPGRADATION LETTER AND RECENT EXTENSION OF AFFILIATION, IF ANY</td><td><ViewButton href="/pdf/Affiliation letter.pdf" /></td></tr>
// //               <tr><td>2</td><td>COPIES OF SOCIETIES / TRUST / COMPANY REGISTRATION / RENEWAL CERTIFICATE, AS APPLICABLE</td><td><ViewButton href="/pdf/trust-registration-certificate.pdf" /></td></tr>
// //               <tr><td>3</td><td>COPY OF NO OBJECTION CERTIFICATE (NOC) ISSUED, IF APPLICABLE, BY THE STATE GOVT./UT</td><td><ViewButton href="/pdf/state NOC.pdf" /></td></tr>
// //               <tr><td>4</td><td>COPIES OF RECOGNITION CERTIFICATE UNDER RTE ACT, 2009, AND IT’S RENEWAL IF APPLICABLE</td><td><ViewButton href="/pdf/RTE recognition certificate.pdf" /></td></tr>
// //               <tr><td>5</td><td>COPY OF VALID BUILDING SAFETY CERTIFICATE AS PER THE NATIONAL BUILDING CODE</td><td><ViewButton href="/pdf/building.pdf" /></td></tr>
// //               <tr><td>6</td><td>COPY OF VALID FIRE SAFETY CERTIFICATE ISSUED BY THE COMPETENT AUTHORITY</td><td><ViewButton href="/pdf/AIS fire safety certificate .pdf" /></td></tr>
// //               <tr><td>7</td><td>COPY OF SELF CERTIFICATION BY SCHOOL</td><td><ViewButton href="/pdf/AIS self certificate sect increase .pdf" /></td></tr>
// //               <tr><td>8</td><td>COPIES OF VALID WATER, HEALTH AND SANITATION CERTIFICATES</td><td><ViewButton href="/pdf/health services.pdf" /></td></tr>
// //               <tr><td>9</td><td>COPY OF WATER TESTING REPORT</td><td><ViewButton href="/pdf/health services.pdf" /></td></tr>
// //               <tr><td>10</td><td>COPY OF CERTIFICATE OF LAND (Annex ‘B’ )</td><td><ViewButton href="/pdf/Certificate Of Land Abhishek International School.pdf" /></td></tr>
// //             </tbody>
// //             </table>
// //           </div>
// //         </div>

// //         {/* Section C: Result and Academics */}
// //         <div className="card mb-4 shadow-sm">
// //           <div className="card-header text-white fw-bold" style={{ backgroundColor: '#800000' }}>C : Result and Academics</div>
// //           <div className="card-body">
// //             <table className="table table-bordered">
// //               <thead className="table-light">
// //                 <tr><th>SR No.</th><th>DOCUMENTS / INFORMATION</th><th>UPLOADED DOCUMENTS</th></tr>
// //               </thead>
// //                 <tbody>
// //               <tr><td>1</td><td>FEE STRUCTURE OF THE SCHOOL</td><td><ViewButton href="/pdf/AIS Fees structure 25-26-.pdf" /></td></tr>
// //                <tr><td>2</td><td>ANNUAL ACADEMIC CALENDER</td><td><ViewButton href="/pdf/Annual Calendar 2025-26.pdf" /></td></tr>
// //               <tr><td>3</td><td>LIST OF SCHOOL MANAGEMENT COMMITTEE (SMC)</td><td><ViewButton href="/pdf/AIS SMC 25-26.pdf" /></td></tr>
// //               <tr><td>4</td><td>LIST OF PARENTS TEACHERS ASSOCIATION (PTA) MEMBERS</td><td><ViewButton href="/pdf/AIS PTA 25-26.pdf" /></td></tr>
// //               <tr><td>5</td><td>LAST THREE-YEAR RESULT OF THE BOARD EXAMINATION AS PER APPLICABILITY</td><td><ViewButton href="/last-three-years.pdf" /></td></tr>
// //             </tbody>
// //             </table>
// //           </div>
// //         </div>

// //         {/* Section D: Staff (Teaching) */}
// //         <div className="card mb-4 shadow-sm">
// //           <div className="card-header text-white fw-bold" style={{ backgroundColor: '#800000' }}>D : Staff (Teaching)</div>
// //           <div className="card-body">
// //             <table className="table table-bordered">
// //                <tbody>
          
// //               <tr><td>1</td><td>TOTAL NO. OF TEACHERS</td><td>43</td></tr>
// //               {/* <tr><td></td><td>PGT</td><td>0</td></tr> */}
// //               <tr><td></td><td>TGT</td><td>10</td></tr>
// //               <tr><td></td><td>PRT</td><td>31</td></tr>
// //               <tr><td>2</td><td>TEACHERS SECTION RATIO</td><td>1:1.5</td></tr>
// //               <tr><td>3</td><td>DETAILS OF SPECIAL EDUCATOR</td><td>Mr. Maruti Dadarao Gokshe</td></tr>
// //               <tr><td>4</td><td>DETAILS OF COUNSELLOR AND WELLNESS TEACHER</td><td>Mrs. Swati Sandeep Kasbe</td></tr>
// //             </tbody>
// //             </table>
// //             {/* Add result tables here */}
            
// // <h6 className="mt-4">RESULT CLASS: XII</h6>
// // <table className="table table-bordered">
// //   <thead className="table-light">
// //     <tr>
// //       <th>SL No.</th>
// //       <th>YEAR</th>
// //       <th>NO. OF REGISTERED STUDENTS</th>
// //       <th>NO. OF STUDENTS PASSED</th>
// //       <th>PASS PERCENTAGE</th>
// //       <th>REMARKS</th>
// //     </tr>
// //   </thead>
// //   <tbody>
// //     <tr>
// //       <td>1</td>
// //       <td>2024-25</td>
// //       <td>--</td>
// //       <td>--</td>
// //       <td>--</td>
// //       <td>Not Applicable</td>
// //     </tr>
// //   </tbody>
// // </table>
// //           </div>
// //         </div>

// //         {/* Section E: Infrastructure */}
// //         <div className="card mb-4 shadow-sm">
// //           <div className="card-header text-white fw-bold" style={{ backgroundColor: '#800000' }}>E : School Infrastructure</div>
// //           <div className="card-body">
// //             <table className="table table-bordered">
// //               <tbody>
// //   <tr><td>1</td><td>TOTAL CAMPUS AREA OF THE SCHOOL (IN SQ MTR)</td><td>4000 sq.m</td></tr>
// //   <tr><td>2</td><td>NO. AND SIZE OF CLASS ROOMS (IN SQ MTR)</td><td>31 classrooms, 47 sq.m each</td></tr>
// //   <tr><td>3</td><td>NO. AND SIZE OF LABORATORIES INCLUDING COMPUTER LABS (IN SQ MTR)</td><td>4 labs, 57 sq.m each</td></tr>
// //   <tr><td>4</td><td>INTERNET FACILITY</td><td>YES</td></tr>
// //   <tr><td>5</td><td>NO. OF GIRLS TOILETS</td><td>30</td></tr>
// //   <tr><td>6</td><td>NO. OF BOYS TOILETS</td><td>30</td></tr>
// //   <tr><td>7</td><td>NO. OF BOYS TOILETS (CWSN)</td><td>6</td></tr>
// //   <tr><td>8</td><td>NO. OF GIRLS TOILETS (CWSN)</td><td>6</td></tr>
// //   <tr><td>9</td><td>LINK OF YOUTUBE VIDEO OF THE INSPECTION OF SCHOOL COVERING THE INFRASTRUCTURE</td><td><a href="https://www.youtube.com/watch?v=UOLS0IGKYsw">Watch</a></td></tr>
// // </tbody>
// //             </table>
// //           </div>
// //         </div>

// //         {/* Section F: Teachers Details */}
// //         <div className="card shadow-sm mb-5">
// //           <div className="card-header text-white fw-bold" style={{ backgroundColor: '#800000' }}>
// //             F : Teachers Details
// //           </div>
// //           <div className="card-body">
// //             <div className="table-responsive">
// //               <table className="table table-bordered">
// //                 <thead className="table-light">
// //                   <tr>
// //                     <th>SR No.</th>
// //                     <th>Teacher Name</th>
// //                     <th>Designation</th>
// //                     <th>Qualification</th>
// //                   </tr>
// //                 </thead>
// //                 <tbody className="text-gray-800 text-sm sm:text-base">
// //                   {facultyList.map((f, index) => (
// //                     <tr key={f.id} className={index % 2 === 0 ? "bg-white" : "bg-[#f9f6fb]"}>
// //                       <td>{index + 1}</td>
// //                       <td>{f.name}</td>
// //                       <td>{f.designation}</td>
// //                       <td>{f.qualification}</td>
// //                     </tr>
// //                   ))}
// //                 </tbody>
// //               </table>
// //             </div>
// //           </div>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default MpdPage;
// 'use client';

// import { motion } from "framer-motion";
// import { SubNavHeader } from "@/components/sub-nav-header";
// import { GraduationCap } from "lucide-react";

// const ViewButton = ({ href }: { href: string }) => (
//   <a
//     href={href}
//     target="_blank"
//     rel="noopener noreferrer"
//     className="btn btn-primary btn-sm"
//   >
//     View <i className="bi bi-box-arrow-up-right ms-1"></i>
//   </a>
// );

// const facultyList = [
//   { id: 1, name: "Mrs. Sudha Bhat", designation: "Principal", qualification: "B.Sc, B.Ed" },
//   { id: 2, name: "Mrs. Sushma Patil", designation: "Co-ordinator", qualification: "M.Sc" },
//   { id: 3, name: "Mrs. Ashwini Shahane", designation: "TGT (Science)", qualification: "M.Sc, B.Ed" },
//   { id: 4, name: "Mrs. Laxmi Jadhav", designation: "TGT (Science)", qualification: "B.Sc, B.Ed" },
//   { id: 5, name: "Mrs. Mrunal Shekhar Bagul", designation: "TGT (Hist/Geo)", qualification: "MA, B.Ed" },
//   { id: 6, name: "Mrs. Tambe Surekha", designation: "TGT (English)", qualification: "BA, B.Ed" },
//   { id: 7, name: "Mrs. Vidya Patil", designation: "TGT (Hindi)", qualification: "MA, M.Ed" },
//   { id: 8, name: "Mrs. Jayashree Bhure", designation: "TGT (German)", qualification: "German A1 A2 B1 Level" },
//   { id: 9, name: "Mrs. Archana Kulkarni", designation: "TGT (Marathi)", qualification: "MA, M.Ed" },
//   { id: 10, name: "Mrs. Pooja Nakhate", designation: "TGT (IT)", qualification: "BE (IT)" },
//   { id: 11, name: "Mrs. Savita Dahale", designation: "PRT (B.Sc, B.Ed)", qualification: "B.Sc, B.Ed" },
//   { id: 12, name: "Mrs. Arpana Kalbande", designation: "PRT (B.Sc, B.Ed)", qualification: "B.Sc, B.Ed" },
//   { id: 13, name: "Mrs. Harsha Khodake", designation: "PRT (MA, B.Ed)", qualification: "MA, B.Ed" },
//   { id: 14, name: "Mrs. Pranita More", designation: "PRT (B.Sc, B.Ed)", qualification: "B.Sc, B.Ed" },
//   { id: 15, name: "Mrs. Pooja Kapase", designation: "PRT (M.Sc, B.Ed)", qualification: "M.Sc, B.Ed" },
//   { id: 16, name: "Mrs. Chaitali Pange", designation: "PRT (B.Sc, B.Ed)", qualification: "B.Sc, B.Ed" },
//   { id: 17, name: "Mrs. Ashwini Deshmukh", designation: "PRT (M.Sc, B.Ed)", qualification: "M.Sc, B.Ed" },
//   { id: 18, name: "Mrs. Smita Band", designation: "PRT (MA, B.Ed)", qualification: "MA, B.Ed" },
//   { id: 19, name: "Mrs. Bharti Halloli", designation: "PRT (BA, B.Ed)", qualification: "BA, B.Ed" },
//   { id: 20, name: "Miss Neha Inamdar", designation: "PRT (B.Com, B.Ed)", qualification: "B.Com, B.Ed" },
//   { id: 21, name: "Mrs. Reshma Dhamale", designation: "PRT (M.Sc, B.Ed)", qualification: "M.Sc, B.Ed" },
//   { id: 22, name: "Mrs. Aarati Bhalerao", designation: "PRT (MA, BP.Ed)", qualification: "MA, BP.Ed" },
//   { id: 23, name: "Mrs. Shital Patil", designation: "PRT (M.Sc)", qualification: "M.Sc" },
//   { id: 24, name: "Mrs. Reetu Lokhande", designation: "PRT (Diploma in CSE)", qualification: "Diploma in CSE" },
//   { id: 25, name: "Mrs. Lata Maniyan", designation: "PRT (M.Com)", qualification: "M.Com" },
//   { id: 26, name: "Mrs. Manjusha Paul", designation: "PRT (B.Com, D.Ted)", qualification: "B.Com, D.Ted" },
//   { id: 27, name: "Mrs. Pradnya Vetal", designation: "PRT (BA, ECCED Phonix)", qualification: "BA, ECCED Phonix" },
//   { id: 28, name: "Mrs. Gauri Thombre", designation: "PRT (M.Tech Electronics)", qualification: "M.Tech Electronics" },
//   { id: 29, name: "Mrs. Sneha Jadhav", designation: "PRT (M.Com, GDCA)", qualification: "M.Com, GDCA" },
//   { id: 30, name: "Mrs. Pratiksha Pathade", designation: "PRT (M.Sc)", qualification: "M.Sc" },
//   { id: 31, name: "Miss Nikita Mor", designation: "PRT (BA, D.Ed)", qualification: "BA, D.Ed" },
//   { id: 32, name: "Mrs. Sangita Bargaje", designation: "PRT (MA, TTC)", qualification: "MA, TTC" },
//   { id: 33, name: "Mrs. Sadhana Bhalerao", designation: "PRT (B.Com, MCM)", qualification: "B.Com, MCM" },
//   { id: 34, name: "Mrs. Arundhati Patil", designation: "PRT (IT)", qualification: "B.Sc, MBA, PGDBO (COM)" },
//   { id: 35, name: "Mr. Santosh Naik", designation: "PRT (PI)", qualification: "B.Ped, M.Ed (PE)" },
//   { id: 36, name: "Mr. Pratik Lonkar", designation: "MCF", qualification: "BA, NCC" },
//   { id: 37, name: "Mrs. Rupali Devkar", designation: "Drawing Teacher", qualification: "GD Arts, Dip Aed, MA" },
//   { id: 38, name: "Mrs. Mayuri Joshi", designation: "Music Teacher", qualification: "MA, Music Visharad" },
//   { id: 39, name: "Mrs. Megha Suryawanshi", designation: "Dance Teacher", qualification: "MBA, HR" },
//   { id: 40, name: "Mrs. Annapurna Madasanal", designation: "Librarian", qualification: "M.Sc, B.Ed" },
//   { id: 41, name: "Mr. Maruti Dadarao Khokshe", designation: "Special Educator", qualification: "MA, DSA (Spl Edu)" },
//   { id: 42, name: "Mrs. Swati Sandeep Kasbe", designation: "Counselor", qualification: "BA Psychology" },
//   { id: 43, name: "Mrs. Puneeta Tamhankar", designation: "Accountant/Admin", qualification: "BBA, CA Intermediate" },
//   { id: 44, name: "Miss Ritu Sachin Awate", designation: "Nurse", qualification: "GNM (Nursing)" }
// ];

// const MpdPage = () => {
//   return (
//     <div className="min-h-screen bg-gradient-to-br from-[#f9f6fb] to-white font-serif">
//       <SubNavHeader title="Mandatory Public Disclosure" items={[]} />
//       <div className="container pt-5 mt-5" style={{ fontFamily: 'Georgia, serif' }}>
//         <h2 className="mb-4 fw-bold border-bottom pb-2 text-center" style={{ color: '#800000' }}>
//           Mandatory Public Disclosure (APPENDIX - IX)
//         </h2>

//         {/* Section A: General Information */}
//         <div className="card mb-4 shadow-lg rounded-lg">
//           <div className="card-header text-white fw-bold" style={{ backgroundColor: '#800000' }}>A : General Information</div>
//           <div className="card-body">
//             <table className="table table-bordered table-striped">
//               <tbody>
//                 <tr><td>1</td><td>NAME OF THE SCHOOL</td><td>Abhishek International School</td></tr>
//                 <tr><td>2</td><td>AFFILIATION NO. (IF APPLICABLE)</td><td>1131099</td></tr>
//                 <tr><td>3</td><td>SCHOOL CODE (IF APPLICABLE)</td><td>31087</td></tr>
//                 <tr><td>4</td><td>COMPLETE ADDRESS WITH PIN CODE</td><td>Plot No.2, Sector No.6, Moshi Pradhikaran, Pune - 412105</td></tr>
//                 <tr><td>5</td><td>PRINCIPAL NAME</td><td>Mrs. Sudha Bhat</td></tr>
//                 <tr><td>6</td><td>PRINCIPAL QUALIFICATION</td><td>B.S.C, B.Ed ,DSM</td></tr>
//                 <tr><td>7</td><td>SCHOOL EMAIL ID</td><td>abhishekinternational.cbse@gmail.com</td></tr>
//                 <tr><td>8</td><td>CONTACT DETAILS (LANDLINE/MOBILE)</td><td>8446713030</td></tr>
//               </tbody>
//             </table>
//           </div>
//         </div>

//         {/* Section B: Documents and Information */}
//         <div className="card mb-4 shadow-lg rounded-lg">
//           <div className="card-header text-white fw-bold" style={{ backgroundColor: '#800000' }}>B : Documents and Information</div>
//           <div className="card-body">
//             <table className="table table-bordered table-striped">
//               <thead className="table-light">
//                 <tr><th>SR No.</th><th>DOCUMENTS / INFORMATION</th><th>UPLOADED DOCUMENTS</th></tr>
//               </thead>
//               <tbody>
//                 <tr><td>1</td><td>COPIES OF AFFILIATION / UPGRADATION LETTER AND RECENT EXTENSION OF AFFILIATION, IF ANY</td><td><ViewButton href="/pdf/Affiliation letter.pdf" /></td></tr>
//                 <tr><td>2</td><td>COPIES OF SOCIETIES / TRUST / COMPANY REGISTRATION / RENEWAL CERTIFICATE, AS APPLICABLE</td><td><ViewButton href="/pdf/trust-registration-certificate.pdf" /></td></tr>
//                 <tr><td>3</td><td>COPY OF NO OBJECTION CERTIFICATE (NOC) ISSUED, IF APPLICABLE, BY THE STATE GOVT./UT</td><td><ViewButton href="/pdf/state NOC.pdf" /></td></tr>
//                 <tr><td>4</td><td>COPIES OF RECOGNITION CERTIFICATE UNDER RTE ACT, 2009, AND IT’S RENEWAL IF APPLICABLE</td><td><ViewButton href="/pdf/RTE recognition certificate.pdf" /></td></tr>
//                 <tr><td>5</td><td>COPY OF VALID BUILDING SAFETY CERTIFICATE AS PER THE NATIONAL BUILDING CODE</td><td><ViewButton href="/pdf/building.pdf" /></td></tr>
//                 <tr><td>6</td><td>COPY OF VALID FIRE SAFETY CERTIFICATE ISSUED BY THE COMPETENT AUTHORITY</td><td><ViewButton href="/pdf/AIS fire safety certificate .pdf" /></td></tr>
//                 <tr><td>7</td><td>COPY OF SELF CERTIFICATION BY SCHOOL</td><td><ViewButton href="/pdf/AIS self certificate sect increase .pdf" /></td></tr>
//                 <tr><td>8</td><td>COPIES OF VALID WATER, HEALTH AND SANITATION CERTIFICATES</td><td><ViewButton href="/pdf/health services.pdf" /></td></tr>
//                 <tr><td>9</td><td>COPY OF WATER TESTING REPORT</td><td><ViewButton href="/pdf/health services.pdf" /></td></tr>
//                 <tr><td>10</td><td>COPY OF CERTIFICATE OF LAND (Annex ‘B’ )</td><td><ViewButton href="/pdf/Certificate Of Land Abhishek International School.pdf" /></td></tr>
//               </tbody>
//             </table>
//           </div>
//         </div>

//         {/* Section C: Result and Academics */}
//         <div className="card mb-4 shadow-lg rounded-lg">
//           <div className="card-header text-white fw-bold" style={{ backgroundColor: '#800000' }}>C : Result and Academics</div>
//           <div className="card-body">
//             <table className="table table-bordered table-striped">
//               <thead className="table-light">
//                 <tr><th>SR No.</th><th>DOCUMENTS / INFORMATION</th><th>UPLOADED DOCUMENTS</th></tr>
//               </thead>
//               <tbody>
//                 <tr><td>1</td><td>FEE STRUCTURE OF THE SCHOOL</td><td><ViewButton href="/pdf/AIS Fees structure 25-26-.pdf" /></td></tr>
//                 <tr><td>2</td><td>ANNUAL ACADEMIC CALENDER</td><td><ViewButton href="/pdf/Annual Calendar 2025-26.pdf" /></td></tr>
//                 <tr><td>3</td><td>LIST OF SCHOOL MANAGEMENT COMMITTEE (SMC)</td><td><ViewButton href="/pdf/AIS SMC 25-26.pdf" /></td></tr>
//                 <tr><td>4</td><td>LIST OF PARENTS TEACHERS ASSOCIATION (PTA) MEMBERS</td><td><ViewButton href="/pdf/AIS PTA 25-26.pdf" /></td></tr>
//                 <tr><td>5</td><td>LAST THREE-YEAR RESULT OF THE BOARD EXAMINATION AS PER APPLICABILITY</td><td><ViewButton href="/last-three-years.pdf" /></td></tr>
//               </tbody>
//             </table>
//           </div>
//         </div>

//         {/* Section D: Staff (Teaching) */}
//         <div className="card mb-4 shadow-lg rounded-lg">
//           <div className="card-header text-white fw-bold" style={{ backgroundColor: '#800000' }}>D : Staff (Teaching)</div>
//           <div className="card-body">
//             <table className="table table-bordered table-striped">
//               <tbody>
//                 <tr><td>1</td><td>TOTAL NO. OF TEACHERS</td><td>43</td></tr>
//                 <tr><td></td><td>TGT</td><td>10</td></tr>
//                 <tr><td></td><td>PRT</td><td>31</td></tr>
//                 <tr><td>2</td><td>TEACHERS SECTION RATIO</td><td>1:1.5</td></tr>
//                 <tr><td>3</td><td>DETAILS OF SPECIAL EDUCATOR</td><td>Mr. Maruti Dadarao Gokshe</td></tr>
//                 <tr><td>4</td><td>DETAILS OF COUNSELLOR AND WELLNESS TEACHER</td><td>Mrs. Swati Sandeep Kasbe</td></tr>
//               </tbody>
//             </table>
//             <h6 className="mt-4">RESULT CLASS: XII</h6>
//             <table className="table table-bordered table-striped">
//               <thead className="table-light">
//                 <tr>
//                   <th>SL No.</th>
//                   <th>YEAR</th>
//                   <th>NO. OF REGISTERED STUDENTS</th>
//                   <th>NO. OF STUDENTS PASSED</th>
//                   <th>PASS PERCENTAGE</th>
//                   <th>REMARKS</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 <tr>
//                   <td>1</td>
//                   <td>2024-25</td>
//                   <td>--</td>
//                   <td>--</td>
//                   <td>--</td>
//                   <td>Not Applicable</td>
//                 </tr>
//               </tbody>
//             </table>
//           </div>
//         </div>

//         {/* Section E: Infrastructure */}
//         <div className="card mb-4 shadow-lg rounded-lg">
//           <div className="card-header text-white fw-bold" style={{ backgroundColor: '#800000' }}>E : School Infrastructure</div>
//           <div className="card-body">
//             <table className="table table-bordered table-striped">
//               <tbody>
//                 <tr><td>1</td><td>TOTAL CAMPUS AREA OF THE SCHOOL (IN SQ MTR)</td><td>4000 sq.m</td></tr>
//                 <tr><td>2</td><td>NO. AND SIZE OF CLASS ROOMS (IN SQ MTR)</td><td>31 classrooms, 47 sq.m each</td></tr>
//                 <tr><td>3</td><td>NO. AND SIZE OF LABORATORIES INCLUDING COMPUTER LABS (IN SQ MTR)</td><td>4 labs, 57 sq.m each</td></tr>
//                 <tr><td>4</td><td>INTERNET FACILITY</td><td>YES</td></tr>
//                 <tr><td>5</td><td>NO. OF GIRLS TOILETS</td><td>30</td></tr>
//                 <tr><td>6</td><td>NO. OF BOYS TOILETS</td><td>30</td></tr>
//                 <tr><td>7</td><td>NO. OF BOYS TOILETS (CWSN)</td><td>6</td></tr>
//                 <tr><td>8</td><td>NO. OF GIRLS TOILETS (CWSN)</td><td>6</td></tr>
//                 <tr><td>9</td><td>LINK OF YOUTUBE VIDEO OF THE INSPECTION OF SCHOOL COVERING THE INFRASTRUCTURE</td><td><a href="https://www.youtube.com/watch?v=UOLS0IGKYsw">Watch</a></td></tr>
//               </tbody>
//             </table>
//           </div>
//         </div>

//         {/* Section F: Teachers Details */}
//         <div className="card shadow-lg rounded-lg mb-5">
//           <div className="card-header text-white fw-bold" style={{ backgroundColor: '#800000' }}>
//             F : Teachers Details
//           </div>
//           <div className="card-body">
//             <div className="table-responsive">
//               <table className="table table-bordered table-striped">
//                 <thead className="table-light">
//                   <tr>
//                     <th>SR No.</th>
//                     <th>Teacher Name</th>
//                     <th>Designation</th>
//                     <th>Qualification</th>
//                   </tr>
//                 </thead>
//                 <tbody className="text-gray-800 text-sm sm:text-base">
//                   {facultyList.map((f, index) => (
//                     <tr key={f.id} className={index % 2 === 0 ? "bg-white" : "bg-[#f9f6fb]"}>
//                       <td>{index + 1}</td>
//                       <td>{f.name}</td>
//                       <td>{f.designation}</td>
//                       <td>{f.qualification}</td>
//                     </tr>
//                   ))}
//                 </tbody>
//               </table>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default MpdPage;
// 'use client';

// import { motion } from "framer-motion";
// import { SubNavHeader } from "@/components/sub-nav-header";
// import { GraduationCap } from "lucide-react";

// const ViewButton = ({ href }: { href: string }) => (
//   <a
//     href={href}
//     target="_blank"
//     rel="noopener noreferrer"
//     className="btn btn-primary btn-sm"
//   >
//     View <i className="bi bi-box-arrow-up-right ms-1"></i>
//   </a>
// );

// const facultyList = [
//   { id: 1, name: "Mrs. Sudha Bhat", designation: "Principal", qualification: "B.Sc, B.Ed" },
//   { id: 2, name: "Mrs. Sushma Patil", designation: "Co-ordinator", qualification: "M.Sc" },
//   { id: 3, name: "Mrs. Ashwini Shahane", designation: "TGT (Science)", qualification: "M.Sc, B.Ed" },
//   { id: 4, name: "Mrs. Laxmi Jadhav", designation: "TGT (Science)", qualification: "B.Sc, B.Ed" },
//   { id: 5, name: "Mrs. Mrunal Shekhar Bagul", designation: "TGT (Hist/Geo)", qualification: "MA, B.Ed" },
//   { id: 6, name: "Mrs. Tambe Surekha", designation: "TGT (English)", qualification: "BA, B.Ed" },
//   { id: 7, name: "Mrs. Vidya Patil", designation: "TGT (Hindi)", qualification: "MA, M.Ed" },
//   { id: 8, name: "Mrs. Jayashree Bhure", designation: "TGT (German)", qualification: "German A1 A2 B1 Level" },
//   { id: 9, name: "Mrs. Archana Kulkarni", designation: "TGT (Marathi)", qualification: "MA, M.Ed" },
//   { id: 10, name: "Mrs. Pooja Nakhate", designation: "TGT (IT)", qualification: "BE (IT)" },
//   { id: 11, name: "Mrs. Savita Dahale", designation: "PRT (B.Sc, B.Ed)", qualification: "B.Sc, B.Ed" },
//   { id: 12, name: "Mrs. Arpana Kalbande", designation: "PRT (B.Sc, B.Ed)", qualification: "B.Sc, B.Ed" },
//   { id: 13, name: "Mrs. Harsha Khodake", designation: "PRT (MA, B.Ed)", qualification: "MA, B.Ed" },
//   { id: 14, name: "Mrs. Pranita More", designation: "PRT (B.Sc, B.Ed)", qualification: "B.Sc, B.Ed" },
//   { id: 15, name: "Mrs. Pooja Kapase", designation: "PRT (M.Sc, B.Ed)", qualification: "M.Sc, B.Ed" },
//   { id: 16, name: "Mrs. Chaitali Pange", designation: "PRT (B.Sc, B.Ed)", qualification: "B.Sc, B.Ed" },
//   { id: 17, name: "Mrs. Ashwini Deshmukh", designation: "PRT (M.Sc, B.Ed)", qualification: "M.Sc, B.Ed" },
//   { id: 18, name: "Mrs. Smita Band", designation: "PRT (MA, B.Ed)", qualification: "MA, B.Ed" },
//   { id: 19, name: "Mrs. Bharti Halloli", designation: "PRT (BA, B.Ed)", qualification: "BA, B.Ed" },
//   { id: 20, name: "Miss Neha Inamdar", designation: "PRT (B.Com, B.Ed)", qualification: "B.Com, B.Ed" },
//   { id: 21, name: "Mrs. Reshma Dhamale", designation: "PRT (M.Sc, B.Ed)", qualification: "M.Sc, B.Ed" },
//   { id: 22, name: "Mrs. Aarati Bhalerao", designation: "PRT (MA, BP.Ed)", qualification: "MA, BP.Ed" },
//   { id: 23, name: "Mrs. Shital Patil", designation: "PRT (M.Sc)", qualification: "M.Sc" },
//   { id: 24, name: "Mrs. Reetu Lokhande", designation: "PRT (Diploma in CSE)", qualification: "Diploma in CSE" },
//   { id: 25, name: "Mrs. Lata Maniyan", designation: "PRT (M.Com)", qualification: "M.Com" },
//   { id: 26, name: "Mrs. Manjusha Paul", designation: "PRT (B.Com, D.Ted)", qualification: "B.Com, D.Ted" },
//   { id: 27, name: "Mrs. Pradnya Vetal", designation: "PRT (BA, ECCED Phonix)", qualification: "BA, ECCED Phonix" },
//   { id: 28, name: "Mrs. Gauri Thombre", designation: "PRT (M.Tech Electronics)", qualification: "M.Tech Electronics" },
//   { id: 29, name: "Mrs. Sneha Jadhav", designation: "PRT (M.Com, GDCA)", qualification: "M.Com, GDCA" },
//   { id: 30, name: "Mrs. Pratiksha Pathade", designation: "PRT (M.Sc)", qualification: "M.Sc" },
//   { id: 31, name: "Miss Nikita Mor", designation: "PRT (BA, D.Ed)", qualification: "BA, D.Ed" },
//   { id: 32, name: "Mrs. Sangita Bargaje", designation: "PRT (MA, TTC)", qualification: "MA, TTC" },
//   { id: 33, name: "Mrs. Sadhana Bhalerao", designation: "PRT (B.Com, MCM)", qualification: "B.Com, MCM" },
//   { id: 34, name: "Mrs. Arundhati Patil", designation: "PRT (IT)", qualification: "B.Sc, MBA, PGDBO (COM)" },
//   { id: 35, name: "Mr. Santosh Naik", designation: "PRT (PI)", qualification: "B.Ped, M.Ed (PE)" },
//   { id: 36, name: "Mr. Pratik Lonkar", designation: "MCF", qualification: "BA, NCC" },
//   { id: 37, name: "Mrs. Rupali Devkar", designation: "Drawing Teacher", qualification: "GD Arts, Dip Aed, MA" },
//   { id: 38, name: "Mrs. Mayuri Joshi", designation: "Music Teacher", qualification: "MA, Music Visharad" },
//   { id: 39, name: "Mrs. Megha Suryawanshi", designation: "Dance Teacher", qualification: "MBA, HR" },
//   { id: 40, name: "Mrs. Annapurna Madasanal", designation: "Librarian", qualification: "M.Sc, B.Ed" },
//   { id: 41, name: "Mr. Maruti Dadarao Khokshe", designation: "Special Educator", qualification: "MA, DSA (Spl Edu)" },
//   { id: 42, name: "Mrs. Swati Sandeep Kasbe", designation: "Counselor", qualification: "BA Psychology" },
//   { id: 43, name: "Mrs. Puneeta Tamhankar", designation: "Accountant/Admin", qualification: "BBA, CA Intermediate" },
//   { id: 44, name: "Miss Ritu Sachin Awate", designation: "Nurse", qualification: "GNM (Nursing)" }
// ];

// const MpdPage = () => {
//   return (
//     <div className="min-h-screen bg-gradient-to-br from-[#f9f6fb] to-white font-serif">
//       <SubNavHeader title="Mandatory Public Disclosure" items={[]} />
//       <div className="container pt-5 mt-5 flex justify-center">
//         <div className="w-full max-w-6xl">
//           <h2 className="mb-4 fw-bold border-bottom pb-2 text-center" style={{ color: '#800000' }}>
//             Mandatory Public Disclosure (APPENDIX - IX)
//           </h2>

//           {/* Section A: General Information */}
//           <div className="card mb-4 shadow-lg rounded-lg">
//             <div className="card-header text-white fw-bold" style={{ backgroundColor: '#800000' }}>A : General Information</div>
//             <div className="card-body">
//               <table className="table table-bordered table-striped">
//                 <tbody>
//                   <tr><td>1</td><td>NAME OF THE SCHOOL</td><td>Abhishek International School</td></tr>
//                   <tr><td>2</td><td>AFFILIATION NO. (IF APPLICABLE)</td><td>1131099</td></tr>
//                   <tr><td>3</td><td>SCHOOL CODE (IF APPLICABLE)</td><td>31087</td></tr>
//                   <tr><td>4</td><td>COMPLETE ADDRESS WITH PIN CODE</td><td>Plot No.2, Sector No.6, Moshi Pradhikaran, Pune - 412105</td></tr>
//                   <tr><td>5</td><td>PRINCIPAL NAME</td><td>Mrs. Sudha Bhat</td></tr>
//                   <tr><td>6</td><td>PRINCIPAL QUALIFICATION</td><td>B.S.C, B.Ed ,DSM</td></tr>
//                   <tr><td>7</td><td>SCHOOL EMAIL ID</td><td>abhishekinternational.cbse@gmail.com</td></tr>
//                   <tr><td>8</td><td>CONTACT DETAILS (LANDLINE/MOBILE)</td><td>8446713030</td></tr>
//                 </tbody>
//               </table>
//             </div>
//           </div>

//           {/* Section B: Documents and Information */}
//           <div className="card mb-4 shadow-lg rounded-lg">
//             <div className="card-header text-white fw-bold" style={{ backgroundColor: '#800000' }}>B : Documents and Information</div>
//             <div className="card-body">
//               <table className="table table-bordered table-striped">
//                 <thead className="table-light">
//                   <tr><th>SR No.</th><th>DOCUMENTS / INFORMATION</th><th>UPLOADED DOCUMENTS</th></tr>
//                 </thead>
//                 <tbody>
//                   <tr><td>1</td><td>COPIES OF AFFILIATION / UPGRADATION LETTER AND RECENT EXTENSION OF AFFILIATION, IF ANY</td><td><ViewButton href="/pdf/Affiliation letter.pdf" /></td></tr>
//                   <tr><td>2</td><td>COPIES OF SOCIETIES / TRUST / COMPANY REGISTRATION / RENEWAL CERTIFICATE, AS APPLICABLE</td><td><ViewButton href="/pdf/trust-registration-certificate.pdf" /></td></tr>
//                   <tr><td>3</td><td>COPY OF NO OBJECTION CERTIFICATE (NOC) ISSUED, IF APPLICABLE, BY THE STATE GOVT./UT</td><td><ViewButton href="/pdf/state NOC.pdf" /></td></tr>
//                   <tr><td>4</td><td>COPIES OF RECOGNITION CERTIFICATE UNDER RTE ACT, 2009, AND IT’S RENEWAL IF APPLICABLE</td><td><ViewButton href="/pdf/RTE recognition certificate.pdf" /></td></tr>
//                   <tr><td>5</td><td>COPY OF VALID BUILDING SAFETY CERTIFICATE AS PER THE NATIONAL BUILDING CODE</td><td><ViewButton href="/pdf/building.pdf" /></td></tr>
//                   <tr><td>6</td><td>COPY OF VALID FIRE SAFETY CERTIFICATE ISSUED BY THE COMPETENT AUTHORITY</td><td><ViewButton href="/pdf/AIS fire safety certificate .pdf" /></td></tr>
                  // <tr><td>7</td><td>COPY OF SELF CERTIFICATION BY SCHOOL</td><td><ViewButton href="/pdf/AIS self certificate sect increase .pdf" /></td></tr>
                  // <tr><td>8</td><td>COPIES OF VALID WATER, HEALTH AND SANITATION CERTIFICATES</td><td><ViewButton href="/pdf/health services.pdf" /></td></tr>
                  // <tr><td>9</td><td>COPY OF WATER TESTING REPORT</td><td><ViewButton href="/pdf/health services.pdf" /></td></tr>
                  // <tr><td>10</td><td>COPY OF CERTIFICATE OF LAND (Annex ‘B’ )</td><td><ViewButton href="/pdf/Certificate Of Land Abhishek International School.pdf" /></td></tr>
//                 </tbody>
//               </table>
//             </div>
//           </div>

//           {/* Section C: Result and Academics */}
          // <div className="card mb-4 shadow-lg rounded-lg">
          //   <div className="card-header text-white fw-bold" style={{ backgroundColor: '#800000' }}>C : Result and Academics</div>
          //   <div className="card-body">
          //     <table className="table table-bordered table-striped">
          //       <thead className="table-light">
          //         <tr><th>SR No.</th><th>DOCUMENTS / INFORMATION</th><th>UPLOADED DOCUMENTS</th></tr>
          //       </thead>
          //       <tbody>
          //         <tr><td>1</td><td>FEE STRUCTURE OF THE SCHOOL</td><td><ViewButton href="/pdf/AIS Fees structure 25-26-.pdf" /></td></tr>
          //         <tr><td>2</td><td>ANNUAL ACADEMIC CALENDER</td><td><ViewButton href="/pdf/Annual Calendar 2025-26.pdf" /></td></tr>
          //         <tr><td>3</td><td>LIST OF SCHOOL MANAGEMENT COMMITTEE (SMC)</td><td><ViewButton href="/pdf/AIS SMC 25-26.pdf" /></td></tr>
          //         <tr><td>4</td><td>LIST OF PARENTS TEACHERS ASSOCIATION (PTA) MEMBERS</td><td><ViewButton href="/pdf/AIS PTA 25-26.pdf" /></td></tr>
          //         <tr><td>5</td><td>LAST THREE-YEAR RESULT OF THE BOARD EXAMINATION AS PER APPLICABILITY</td><td><ViewButton href="/last-three-years.pdf" /></td></tr>
          //       </tbody>
          //     </table>
          //   </div>
          // </div>

//           {/* Section D: Staff (Teaching) */}
//           <div className="card mb-4 shadow-lg rounded-lg">
//             <div className="card-header text-white fw-bold" style={{ backgroundColor: '#800000' }}>D : Staff (Teaching)</div>
//             <div className="card-body">
//               <table className="table table-bordered table-striped">
//                 <tbody>
//                   <tr><td>1</td><td>TOTAL NO. OF TEACHERS</td><td>43</td></tr>
//                   <tr><td></td><td>TGT</td><td>10</td></tr>
//                   <tr><td></td><td>PRT</td><td>31</td></tr>
//                   <tr><td>2</td><td>TEACHERS SECTION RATIO</td><td>1:1.5</td></tr>
//                   <tr><td>3</td><td>DETAILS OF SPECIAL EDUCATOR</td><td>Mr. Maruti Dadarao Gokshe</td></tr>
//                   <tr><td>4</td><td>DETAILS OF COUNSELLOR AND WELLNESS TEACHER</td><td>Mrs. Swati Sandeep Kasbe</td></tr>
//                 </tbody>
//               </table>
//               <h6 className="mt-4">RESULT CLASS: XII</h6>
//               <table className="table table-bordered table-striped">
//                 <thead className="table-light">
//                   <tr>
//                     <th>SL No.</th>
//                     <th>YEAR</th>
//                     <th>NO. OF REGISTERED STUDENTS</th>
//                     <th>NO. OF STUDENTS PASSED</th>
//                     <th>PASS PERCENTAGE</th>
//                     <th>REMARKS</th>
//                   </tr>
//                 </thead>
//                 <tbody>
//                   <tr>
//                     <td>1</td>
//                     <td>2024-25</td>
//                     <td>--</td>
//                     <td>--</td>
//                     <td>--</td>
//                     <td>Not Applicable</td>
//                   </tr>
//                 </tbody>
//               </table>
//             </div>
//           </div>

//           {/* Section E: Infrastructure */}
//           <div className="card mb-4 shadow-lg rounded-lg">
//             <div className="card-header text-white fw-bold" style={{ backgroundColor: '#800000' }}>E : School Infrastructure</div>
//             <div className="card-body">
//               <table className="table table-bordered table-striped">
//                 <tbody>
//                   <tr><td>1</td><td>TOTAL CAMPUS AREA OF THE SCHOOL (IN SQ MTR)</td><td>4000 sq.m</td></tr>
//                   <tr><td>2</td><td>NO. AND SIZE OF CLASS ROOMS (IN SQ MTR)</td><td>31 classrooms, 47 sq.m each</td></tr>
//                   <tr><td>3</td><td>NO. AND SIZE OF LABORATORIES INCLUDING COMPUTER LABS (IN SQ MTR)</td><td>4 labs, 57 sq.m each</td></tr>
//                   <tr><td>4</td><td>INTERNET FACILITY</td><td>YES</td></tr>
//                   <tr><td>5</td><td>NO. OF GIRLS TOILETS</td><td>30</td></tr>
//                   <tr><td>6</td><td>NO. OF BOYS TOILETS</td><td>30</td></tr>
//                   <tr><td>7</td><td>NO. OF BOYS TOILETS (CWSN)</td><td>6</td></tr>
//                   <tr><td>8</td><td>NO. OF GIRLS TOILETS (CWSN)</td><td>6</td></tr>
//                   <tr><td>9</td><td>LINK OF YOUTUBE VIDEO OF THE INSPECTION OF SCHOOL COVERING THE INFRASTRUCTURE</td><td><a href="https://www.youtube.com/watch?v=UOLS0IGKYsw">Watch</a></td></tr>
//                 </tbody>
//               </table>
//             </div>
//           </div>

//           {/* Section F: Teachers Details */}
//           <div className="card shadow-lg rounded-lg mb-5">
//             <div className="card-header text-white fw-bold" style={{ backgroundColor: '#800000' }}>
//               F : Teachers Details
//             </div>
//             <div className="card-body">
//               <div className="table-responsive">
//                 <table className="table table-bordered table-striped">
//                   <thead className="table-light">
//                     <tr>
//                       <th>SR No.</th>
//                       <th>Teacher Name</th>
//                       <th>Designation</th>
//                       <th>Qualification</th>
//                     </tr>
//                   </thead>
//                   <tbody className="text-gray-800 text-sm sm:text-base">
//                     {facultyList.map((f, index) => (
//                       <tr key={f.id} className={index % 2 === 0 ? "bg-white" : "bg-[#f9f6fb]"}>
//                         <td>{index + 1}</td>
//                         <td>{f.name}</td>
//                         <td>{f.designation}</td>
//                         <td>{f.qualification}</td>
//                       </tr>
//                     ))}
//                   </tbody>
//                 </table>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default MpdPage;
'use client';

import { SubNavHeader } from "@/components/sub-nav-header";
import { ExternalLink } from "lucide-react";

const ViewButton = ({ href }: { href: string }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="inline-flex items-center px-3 py-1.5 text-sm font-medium rounded-lg text-white bg-[#800000] hover:bg-[#a52a2a] transition-colors shadow-md"
  >
    View <ExternalLink className="w-4 h-4 ml-1" />
  </a>
);

const facultyList = [
  { id: 1, name: "Mrs. Sudha Bhat", designation: "Principal", qualification: "B.Sc, B.Ed" },
  { id: 2, name: "Mrs. Sushma Patil", designation: "Co-ordinator", qualification: "M.Sc" },
  { id: 3, name: "Mrs. Ashwini Shahane", designation: "TGT (Science)", qualification: "M.Sc, B.Ed" },
  { id: 4, name: "Mrs. Laxmi Jadhav", designation: "TGT (Science)", qualification: "B.Sc, B.Ed" },
  { id: 5, name: "Mrs. Mrunal Shekhar Bagul", designation: "TGT (Hist/Geo)", qualification: "MA, B.Ed" },
  { id: 6, name: "Mrs. Tambe Surekha", designation: "TGT (English)", qualification: "BA, B.Ed" },
  { id: 7, name: "Mrs. Vidya Patil", designation: "TGT (Hindi)", qualification: "MA, M.Ed" },
  { id: 8, name: "Mrs. Jayashree Bhure", designation: "TGT (German)", qualification: "German A1 A2 B1 Level" },
  { id: 9, name: "Mrs. Archana Kulkarni", designation: "TGT (Marathi)", qualification: "MA, M.Ed" },
  { id: 10, name: "Mrs. Pooja Nakhate", designation: "TGT (IT)", qualification: "BE (IT)" },
  { id: 11, name: "Mrs. Savita Dahale", designation: "PRT (B.Sc, B.Ed)", qualification: "B.Sc, B.Ed" },
  { id: 12, name: "Mrs. Arpana Kalbande", designation: "PRT (B.Sc, B.Ed)", qualification: "B.Sc, B.Ed" },
  { id: 13, name: "Mrs. Harsha Khodake", designation: "PRT (MA, B.Ed)", qualification: "MA, B.Ed" },
  { id: 14, name: "Mrs. Pranita More", designation: "PRT (B.Sc, B.Ed)", qualification: "B.Sc, B.Ed" },
  { id: 15, name: "Mrs. Pooja Kapase", designation: "PRT (M.Sc, B.Ed)", qualification: "M.Sc, B.Ed" },
  { id: 16, name: "Mrs. Chaitali Pange", designation: "PRT (B.Sc, B.Ed)", qualification: "B.Sc, B.Ed" },
  { id: 17, name: "Mrs. Ashwini Deshmukh", designation: "PRT (M.Sc, B.Ed)", qualification: "M.Sc, B.Ed" },
  { id: 18, name: "Mrs. Smita Band", designation: "PRT (MA, B.Ed)", qualification: "MA, B.Ed" },
  { id: 19, name: "Mrs. Bharti Halloli", designation: "PRT (BA, B.Ed)", qualification: "BA, B.Ed" },
  { id: 20, name: "Miss Neha Inamdar", designation: "PRT (B.Com, B.Ed)", qualification: "B.Com, B.Ed" },
  { id: 21, name: "Mrs. Reshma Dhamale", designation: "PRT (M.Sc, B.Ed)", qualification: "M.Sc, B.Ed" },
  { id: 22, name: "Mrs. Aarati Bhalerao", designation: "PRT (MA, BP.Ed)", qualification: "MA, BP.Ed" },
  { id: 23, name: "Mrs. Shital Patil", designation: "PRT (M.Sc)", qualification: "M.Sc" },
  { id: 24, name: "Mrs. Reetu Lokhande", designation: "PRT (Diploma in CSE)", qualification: "Diploma in CSE" },
  { id: 25, name: "Mrs. Lata Maniyan", designation: "PRT (M.Com)", qualification: "M.Com" },
  { id: 26, name: "Mrs. Manjusha Paul", designation: "PRT (B.Com, D.Ted)", qualification: "B.Com, D.Ted" },
  { id: 27, name: "Mrs. Pradnya Vetal", designation: "PRT (BA, ECCED Phonix)", qualification: "BA, ECCED Phonix" },
  { id: 28, name: "Mrs. Gauri Thombre", designation: "PRT (M.Tech Electronics)", qualification: "M.Tech Electronics" },
  { id: 29, name: "Mrs. Sneha Jadhav", designation: "PRT (M.Com, GDCA)", qualification: "M.Com, GDCA" },
  { id: 30, name: "Mrs. Pratiksha Pathade", designation: "PRT (M.Sc)", qualification: "M.Sc" },
  { id: 31, name: "Miss Nikita Mor", designation: "PRT (BA, D.Ed)", qualification: "BA, D.Ed" },
  { id: 32, name: "Mrs. Sangita Bargaje", designation: "PRT (MA, TTC)", qualification: "MA, TTC" },
  { id: 33, name: "Mrs. Sadhana Bhalerao", designation: "PRT (B.Com, MCM)", qualification: "B.Com, MCM" },
  { id: 34, name: "Mrs. Arundhati Patil", designation: "PRT (IT)", qualification: "B.Sc, MBA, PGDBO (COM)" },
  { id: 35, name: "Mr. Santosh Naik", designation: "PRT (PI)", qualification: "B.Ped, M.Ed (PE)" },
  { id: 36, name: "Mr. Pratik Lonkar", designation: "MCF", qualification: "BA, NCC" },
  { id: 37, name: "Mrs. Rupali Devkar", designation: "Drawing Teacher", qualification: "GD Arts, Dip Aed, MA" },
  { id: 38, name: "Mrs. Mayuri Joshi", designation: "Music Teacher", qualification: "MA, Music Visharad" },
  { id: 39, name: "Mrs. Megha Suryawanshi", designation: "Dance Teacher", qualification: "MBA, HR" },
  { id: 40, name: "Mrs. Annapurna Madasanal", designation: "Librarian", qualification: "M.Sc, B.Ed" },
  { id: 41, name: "Mr. Maruti Dadarao Khokshe", designation: "Special Educator", qualification: "MA, DSA (Spl Edu)" },
  { id: 42, name: "Mrs. Swati Sandeep Kasbe", designation: "Counselor", qualification: "BA Psychology" },
  { id: 43, name: "Mrs. Puneeta Tamhankar", designation: "Accountant/Admin", qualification: "BBA, CA Intermediate" },
  { id: 44, name: "Miss Ritu Sachin Awate", designation: "Nurse", qualification: "GNM (Nursing)" }
];

const SectionCard = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <div className="bg-white shadow-md rounded-xl mb-6 overflow-hidden">
    <div className="px-4 py-2 text-white font-semibold tracking-wide" style={{ backgroundColor: "#800000" }}>
      {title}
    </div>
    <div className="p-4 overflow-x-auto">{children}</div>
  </div>
);

const MpdPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#fdfbfb] to-[#f9f6fb] font-serif">
      <SubNavHeader title="Mandatory Public Disclosure" items={[]} />
      <div className="container mx-auto max-w-6xl px-4 pt-10">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 pb-2 border-b border-gray-300" style={{ color: "#800000" }}>
          Mandatory Public Disclosure (APPENDIX - IX)
        </h2>

        {/* Section A */}
        <SectionCard title="A : General Information">
          <table className="table-auto w-full text-sm border border-gray-200">
            <tbody className="divide-y divide-gray-200">
              <tr><td className="p-2">1</td><td className="p-2 font-medium">NAME OF THE SCHOOL</td><td className="p-2">Abhishek International School</td></tr>
              <tr><td className="p-2">2</td><td className="p-2 font-medium">AFFILIATION NO.</td><td className="p-2">1131099</td></tr>
              <tr><td className="p-2">3</td><td className="p-2 font-medium">SCHOOL CODE</td><td className="p-2">31087</td></tr>
              <tr><td className="p-2">4</td><td className="p-2 font-medium">ADDRESS</td><td className="p-2">Plot No.2, Sector No.6, Moshi Pradhikaran, Pune - 412105</td></tr>
              <tr><td className="p-2">5</td><td className="p-2 font-medium">PRINCIPAL NAME</td><td className="p-2">Mrs. Sudha Bhat</td></tr>
              <tr><td className="p-2">6</td><td className="p-2 font-medium">PRINCIPAL QUALIFICATION</td><td className="p-2">B.Sc, B.Ed, DSM</td></tr>
              <tr><td className="p-2">7</td><td className="p-2 font-medium">EMAIL</td><td className="p-2">abhishekinternational.cbse@gmail.com</td></tr>
              <tr><td className="p-2">8</td><td className="p-2 font-medium">CONTACT</td><td className="p-2">8446713030</td></tr>
            </tbody>
          </table>
        </SectionCard>


        {/* Section B */}
        <SectionCard title="B : Documents and Information">
          <table className="table-auto w-full text-sm border border-gray-200">
            <thead className="bg-gray-100 text-left">
              <tr><th className="p-2">Sr</th><th className="p-2">Documents / Information</th><th className="p-2">Uploaded</th></tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              <tr><td className="p-2">1</td><td className="p-2">COPIES OF AFFILIATION / UPGRADATION LETTER AND RECENT EXTENSION OF AFFILIATION, IFANY</td><td className="p-2"><ViewButton href="/pdf/Affiliation letter.pdf" /></td></tr>
              <tr><td className="p-2">2</td><td className="p-2">COPIES OF SOCIETIES / TRUST / COMPANY REGISTRATION / RENEWAL CERTIFICATE, AS APPLICABLE</td><td className="p-2"><ViewButton href="/pdf/trust-registration-certificate.pdf" /></td></tr>
              <tr><td className="p-2">3</td><td className="p-2">COPY OF NO OBJECTION CERTIFICATE (NOC) ISSUED, IF APPLICABLE, BY THE STATE GOVT./UT</td><td className="p-2"><ViewButton href="/pdf/state NOC.pdf" /></td></tr>
              <tr><td className="p-2">4</td><td className="p-2">COPIES OF RECOGNITION CERTIFICATE UNDER RTE ACT, 2009, AND IT’S RENEWAL IF APPLICABLE</td><td className="p-2"><ViewButton href="/pdf/RTE recognition certificate.pdf" /></td></tr>
              <tr><td className="p-2">5</td><td className="p-2">COPY OF VALID BUILDING SAFETY CERTIFICATE AS PER THE NATIONAL BUILDING CODE</td><td className="p-2"><ViewButton href="/pdf/building.pdf" /></td></tr>
              <tr><td className="p-2">6</td><td className="p-2">COPY OF VALID FIRE SAFETY CERTIFICATE ISSUED BY THE COMPETENT AUTHORITY</td><td className="p-2"><ViewButton href="/pdf/AIS fire safety certificate .pdf" /></td></tr>
               <tr><td className="p-2">7</td><td className="p-2">COPY OF SELF CERTIFICATION BY SCHOOL</td><td className="p-2"><ViewButton href="/pdf/AIS self certificate sect increase .pdf" /></td></tr>
              <tr><td className="p-2">8</td><td className="p-2">COPIES OF VALID WATER, HEALTH AND SANITATION CERTIFICATES</td><td className="p-2"><ViewButton  href="/pdf/health services.pdf" /></td></tr>
              <tr><td className="p-2">9</td><td className="p-2">COPY OF WATER TESTING REPORT</td><td className="p-2"><ViewButton href="/pdf/health services.pdf" /></td></tr>
              <tr><td className="p-2">10</td><td className="p-2">COPY OF CERTIFICATE OF LAND (Annex ‘B’ )</td><td className="p-2"><ViewButton href="/pdf/Certificate Of Land Abhishek International School.pdf" /></td></tr>
            

            </tbody>
          </table>
        </SectionCard>
        
        {/* Section C */}
        <SectionCard title="C : Result and Academics">
          <table className="table-auto w-full text-sm border border-gray-200">
            <thead className="bg-gray-100 text-left">
              <tr>
                <th className="p-2">Sr</th>
                <th className="p-2">Documents / Information</th>
                <th className="p-2">Uploaded</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              <tr><td className="p-2">1</td><td className="p-2">FEE STRUCTURE OF THE SCHOOL</td><td className="p-2"><ViewButton href="/pdf/AIS Fees structure 25-26-.pdf" /></td></tr>
              <tr><td className="p-2">2</td><td className="p-2">ANNUAL ACADEMIC CALENDER</td><td className="p-2"><ViewButton href="/pdf/Annual Calendar 2025-26.pdf" /></td></tr>
              <tr><td className="p-2">3</td><td className="p-2">LIST OF SCHOOL MANAGEMENT COMMITTEE (SMC)</td><td className="p-2"><ViewButton href="/pdf/AIS SMC 25-26.pdf" /></td></tr>
              <tr><td className="p-2">4</td><td className="p-2">LIST OF PARENTS TEACHERS ASSOCIATION (PTA) MEMBERS</td><td className="p-2"><ViewButton href="/pdf/AIS PTA 25-26.pdf" /></td></tr>
              <tr><td className="p-2">5</td><td className="p-2">LAST THREE-YEAR RESULT OF THE BOARD EXAMINATION AS PER APPLICABILITY</td><td className="p-2"><ViewButton href="/last-three-years.pdf" /></td></tr>
            </tbody>
          </table>
        </SectionCard>

        {/* Section D */}
        <SectionCard title="D : Staff (Teaching)">
          <table className="table-auto w-full text-sm border border-gray-200 mb-6">
            <tbody className="divide-y divide-gray-200">
              <tr><td className="p-2">1</td><td className="p-2">TOTAL NO. OF TEACHERS</td><td className="p-2">43</td></tr>
              <tr><td className="p-2"></td><td className="p-2">TGT</td><td className="p-2">10</td></tr>
              <tr><td className="p-2"></td><td className="p-2">PRT</td><td className="p-2">31</td></tr>
              <tr><td className="p-2">2</td><td className="p-2">TEACHERS SECTION RATIO</td><td className="p-2">1:1.5</td></tr>
              <tr><td className="p-2">3</td><td className="p-2">DETAILS OF SPECIAL EDUCATOR</td><td className="p-2">Mr. Maruti Dadarao Gokshe</td></tr>
              <tr><td className="p-2">4</td><td className="p-2">DETAILS OF COUNSELLOR AND WELLNESS TEACHER</td><td className="p-2">Mrs. Swati Sandeep Kasbe</td></tr>
            </tbody>
          </table>

          <h6 className="font-semibold text-[#800000] mb-2">Result Class: X</h6>
          <table className="table-auto w-full text-sm border border-gray-200">
            <thead className="bg-gray-100">
              <tr>
                <th className="p-2">SL No.</th>
                <th className="p-2">Year</th>
                <th className="p-2">Registered Students</th>
                <th className="p-2">Students Passed</th>
                <th className="p-2">Pass %</th>
                <th className="p-2">Remarks</th>
              </tr>
            </thead>
            <tbody>
              <tr className="hover:bg-gray-100">
                <td className="p-2">1</td>
                <td className="p-2">2024-25</td>
                <td className="p-2">--</td>
                <td className="p-2">--</td>
                <td className="p-2">--</td>
                <td className="p-2">All Passed</td>
              </tr>
            </tbody>
          </table>


           <h6 className="font-semibold text-[#800000] mb-2">Result Class: XII</h6>
          <table className="table-auto w-full text-sm border border-gray-200">
            <thead className="bg-gray-100">
              <tr>
                <th className="p-2">SL No.</th>
                <th className="p-2">Year</th>
                <th className="p-2">Registered Students</th>
                <th className="p-2">Students Passed</th>
                <th className="p-2">Pass %</th>
                <th className="p-2">Remarks</th>
              </tr>
            </thead>
            <tbody>
              <tr className="hover:bg-gray-100">
                <td className="p-2">1</td>
                <td className="p-2">2024-25</td>
                <td className="p-2">--</td>
                <td className="p-2">--</td>
                <td className="p-2">--</td>
                <td className="p-2">Not Applicable</td>
              </tr>
            </tbody>
          </table>
        </SectionCard>

        {/* Section E */}
        <SectionCard title="E : School Infrastructure">
          <table className="table-auto w-full text-sm border border-gray-200">
            <tbody className="divide-y divide-gray-200">
              <tr><td className="p-2">1</td><td className="p-2">TOTAL CAMPUS AREA OF THE SCHOOL (IN SQ MTR)</td><td className="p-2">4000 sq.m</td></tr>
              <tr><td className="p-2">2</td><td className="p-2">NO. AND SIZE OF CLASSROOMS</td><td className="p-2">31 classrooms, 47 sq.m each</td></tr>
              <tr><td className="p-2">3</td><td className="p-2">NO. AND SIZE OF LABORATORIES (INCLUDING COMPUTER LABS)</td><td className="p-2">4 labs, 57 sq.m each</td></tr>
              <tr><td className="p-2">4</td><td className="p-2">INTERNET FACILITY</td><td className="p-2">Yes</td></tr>
              <tr><td className="p-2">5</td><td className="p-2">NO. OF GIRLS TOILETS</td><td className="p-2">30</td></tr>
              <tr><td className="p-2">6</td><td className="p-2">NO. OF BOYS TOILETS</td><td className="p-2">30</td></tr>
              <tr><td className="p-2">7</td><td className="p-2">NO. OF BOYS TOILETS (CWSN)</td><td className="p-2">6</td></tr>
              <tr><td className="p-2">8</td><td className="p-2">NO. OF GIRLS TOILETS (CWSN)</td><td className="p-2">6</td></tr>
              <tr>
                <td className="p-2">9</td>
                <td className="p-2">LINK OF YOUTUBE VIDEO OF THE INSPECTION OF SCHOOL COVERING THE INFRASTRUCTURE OF THE SCHOOL</td>
                <td className="p-2">
                  <a
                    href="https://www.youtube.com/watch?v=UOLS0IGKYsw"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-3 py-1.5 text-sm font-medium rounded-lg text-white bg-[#800000] hover:bg-[#a52a2a] transition-colors shadow-md"
                  >
                    Watch <ExternalLink className="w-4 h-4 ml-1" />
                  </a>
                </td>
              </tr>
            </tbody>
          </table>
        </SectionCard>

        {/* Section F - Teachers */}
        <SectionCard title="F : Teachers Details">
          <div className="overflow-x-auto">
            <table className="w-full border border-gray-200 text-sm">
              <thead className="bg-gray-100">
                <tr>
                  <th className="p-2 text-left">SR No.</th>
                  <th className="p-2 text-left">Teacher Name</th>
                  <th className="p-2 text-left">Designation</th>
                  <th className="p-2 text-left">Qualification</th>
                </tr>
              </thead>
              <tbody>
                {facultyList.map((f, index) => (
                  <tr
                    key={f.id}
                    className={`${
                      index % 2 === 0 ? "bg-white" : "bg-gray-50"
                    } hover:bg-gray-100 transition`}
                  >
                    <td className="p-2">{index + 1}</td>
                    <td className="p-2">{f.name}</td>
                    <td className="p-2">{f.designation}</td>
                    <td className="p-2">{f.qualification}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </SectionCard>
      </div>
    </div>
  );
};

export default MpdPage;
