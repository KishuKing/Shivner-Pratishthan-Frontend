// import React, { useState } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';
// import { MapPin, Calendar, Phone, Mail, FileText, Activity, Pill, ChevronDown, ChevronUp, ExternalLink, User } from 'lucide-react';
// import { Card, CardContent } from "@/components/ui/card";
// import { Button } from "@/components/ui/button";
// import { ScrollArea } from "@/components/ui/scroll-area";

// const FamilyMemberView = () => {
//   const [activeSection, setActiveSection] = useState(null);

//   const resident = {
//     name: "John Doe",
//     age: 75,
//     roomNumber: "203",
//     admissionDate: "15 May 2022",
//     phone: "+91 98765 43210",
//     email: "john.doe@example.com",
//     id: "SP12345",
//     photo: "/placeholder.svg?height=400&width=400",
//     reports: [
//       { date: "01 Jun 2023", type: "Monthly Check-up", pdfUrl: "/reports/monthly-checkup-june2023.pdf" },
//       { date: "15 May 2023", type: "Blood Test", pdfUrl: "/reports/blood-test-may2023.pdf" },
//     ],
//     healthConditions: [
//       "Hypertension",
//       "Type 2 Diabetes",
//       "Osteoarthritis",
//     ],
//     medications: [
//       { name: "Lisinopril", dosage: "10mg", frequency: "Once daily" },
//       { name: "Metformin", dosage: "500mg", frequency: "Twice daily" },
//       { name: "Acetaminophen", dosage: "500mg", frequency: "As needed for pain" },
//     ],
//   };

//   const toggleSection = (section) => {
//     setActiveSection(activeSection === section ? null : section);
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50 py-8 px-4 sm:px-6 lg:px-8">
//       <div className="max-w-5xl mx-auto">
//         <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">
          
//           Family Member Portal</h1>

//         <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
//           {/* ID Card */}
//           <Card className="lg:col-span-1 overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
//             <div className="h-48 bg-gradient-to-r from-green-400 to-blue-500 flex items-center justify-center">
//               <User className="text-white w-24 h-24" />
//             </div>

//             <div className="p-8 bg-white relative">
//               <div className="flex justify-between">
//                 <div className="space-y-4">
//                   <div>
//                     <h2 className="text-2xl font-bold text-gray-800">{resident.name}</h2>
//                     <p className="text-green-500 font-medium">Age: {resident.age} years</p>
//                   </div>

//                   <div className="space-y-4">
//                     <div className="flex items-center text-gray-600">
//                       <MapPin className="w-5 h-5 mr-3 text-green-500 shrink-0" />
//                       <span>Room {resident.roomNumber}</span>
//                     </div>
//                     <div className="flex items-center text-gray-600">
//                       <Calendar className="w-5 h-5 mr-3 text-green-500 shrink-0" />
//                       <span>Admitted: {resident.admissionDate}</span>
//                     </div>
//                     <div className="flex items-center text-gray-600">
//                       <Phone className="w-5 h-5 mr-3 text-green-500 shrink-0" />
//                       <span>{resident.phone}</span>
//                     </div>
//                     <div className="flex items-center text-gray-600">
//                       <Mail className="w-5 h-5 mr-3 text-green-500 shrink-0" />
//                       <span>{resident.email}</span>
//                     </div>
//                   </div>
//                 </div>

//                 <div className="w-36 h-36 rounded-xl border-2 border-green-500 overflow-hidden">
//                   <img
//                     src={resident.photo || "/placeholder.svg"}
//                     alt={resident.name}
//                     className="w-full h-full object-cover"
//                   />
//                 </div>
//               </div>
//             </div>

//             <div className="p-4 bg-green-50 text-center text-gray-800">
//               ID: {resident.id}
//             </div>
//           </Card>

//           {/* Information Sections */}
//           <Card className="lg:col-span-2 bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
//             <CardContent className="p-6">
//               <ScrollArea className="h-[calc(100vh-12rem)]">
//                 <div className="space-y-6">
//                   {[{
//                     title: 'Reports',
//                     icon: FileText,
//                     content: resident.reports,
//                     key: 'reports'
//                   }, {
//                     title: 'Health Conditions',
//                     icon: Activity,
//                     content: resident.healthConditions,
//                     key: 'healthConditions'
//                   }, {
//                     title: 'Medications',
//                     icon: Pill,
//                     content: resident.medications,
//                     key: 'medications'
//                   }].map((section) => (
//                     <motion.div key={section.key} className="bg-gray-50 rounded-xl overflow-hidden">
//                       <Button
//                         variant="ghost"
//                         onClick={() => toggleSection(section.key)}
//                         className="w-full px-6 py-4 flex justify-between items-center hover:bg-gray-100 transition-colors duration-200"
//                       >
//                         <div className="flex items-center">
//                           <section.icon className="w-6 h-6 text-green-600 mr-2" />
//                           <span className="text-lg font-medium text-gray-800">{section.title}</span>
//                         </div>
//                         {activeSection === section.key ? <ChevronUp className="text-green-600" /> : <ChevronDown className="text-green-600" />}
//                       </Button>
//                       <AnimatePresence>
//                         {activeSection === section.key && (
//                           <motion.div
//                             initial={{ opacity: 0, height: 0 }}
//                             animate={{ opacity: 1, height: 'auto' }}
//                             exit={{ opacity: 0, height: 0 }}
//                             transition={{ duration: 0.3 }}
//                             className="px-6 py-4"
//                           >
//                             {section.key === 'reports' && (
//                               section.content.map((report, index) => (
//                                 <div key={index} className="mb-4 last:mb-0 p-4 bg-white rounded-lg shadow">
//                                   <div className="flex justify-between items-center">
//                                     <h4 className="font-semibold text-green-800">{report.date} - {report.type}</h4>
//                                     <a
//                                       href={report.pdfUrl}
//                                       target="_blank"
//                                       rel="noopener noreferrer"
//                                       className="flex items-center text-green-600 hover:text-green-800 transition-colors"
//                                     >
//                                       View PDF <ExternalLink className="ml-1 w-4 h-4" />
//                                     </a>
//                                   </div>
//                                 </div>
//                               ))
//                             )}
//                             {section.key === 'healthConditions' && (
//                               <ul className="list-disc list-inside">
//                                 {section.content.map((condition, index) => (
//                                   <li key={index} className="text-gray-600 mb-2">{condition}</li>
//                                 ))}
//                               </ul>
//                             )}
//                             {section.key === 'medications' && (
//                               section.content.map((medication, index) => (
//                                 <div key={index} className="mb-4 last:mb-0 p-4 bg-white rounded-lg shadow">
//                                   <h4 className="font-semibold text-green-800">{medication.name}</h4>
//                                   <p className="text-gray-600">Dosage: {medication.dosage}</p>
//                                   <p className="text-gray-600">Frequency: {medication.frequency}</p>
//                                 </div>
//                               ))
//                             )}
//                           </motion.div>
//                         )}
//                       </AnimatePresence>
//                     </motion.div>
//                   ))}
//                 </div>
//               </ScrollArea>
//             </CardContent>
//           </Card>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default FamilyMemberView;
