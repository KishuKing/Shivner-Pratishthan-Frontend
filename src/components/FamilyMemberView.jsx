import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  MapPin,
  Calendar,
  Phone,
  FileText,
  Activity,
  Pill,
  ChevronDown,
  ChevronUp,
  ExternalLink,
  User,
} from "lucide-react";

const Card = ({ children, className = "" }) => (
  <div className={`bg-white rounded-lg shadow-lg ${className}`}>{children}</div>
);

const Button = ({ children, onClick, className = "" }) => (
  <button
    onClick={onClick}
    className={`px-4 py-2 rounded-md transition-colors duration-200 ${className}`}>
    {children}
  </button>
);

const ScrollArea = ({ children, className = "" }) => (
  <div className={`overflow-auto ${className}`}>{children}</div>
);

const FamilyMemberView = () => {
  const [activeSection, setActiveSection] = useState(null);

  const resident = {
    name: "John Doe",
    age: 75,
    roomNumber: "203",
    admissionDate: "15 May 2022",
    phone: "+91 98765 43210",
    id: "SP12345",
    photo: "/placeholder.svg?height=400&width=400",
    reports: [
      {
        date: "01 Jun 2023",
        type: "Monthly Check-up",
        pdfUrl: "/reports/monthly-checkup-june2023.pdf",
      },
      {
        date: "15 May 2023",
        type: "Blood Test",
        pdfUrl: "/reports/blood-test-may2023.pdf",
      },
    ],
    healthConditions: ["Hypertension", "Type 2 Diabetes", "Osteoarthritis"],
    medications: [
      { name: "Lisinopril", dosage: "10mg", frequency: "Once daily" },
      { name: "Metformin", dosage: "500mg", frequency: "Twice daily" },
      {
        name: "Acetaminophen",
        dosage: "500mg",
        frequency: "As needed for pain",
      },
    ],
  };

  const toggleSection = (section) => {
    setActiveSection(activeSection === section ? null : section);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-8">
          Family Member Portal
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* ID Card */}
          <Card className="lg:col-span-1 overflow-hidden hover:shadow-xl transition-shadow duration-300">
            <div className="h-36 md:h-48 bg-gradient-to-r from-green-400 to-blue-500 flex items-center justify-center">
              <User className="text-white w-16 h-16 md:w-24 md:h-24" />
            </div>

            <div className="p-4 md:p-8 bg-white relative">
              <div className="flex flex-col md:flex-row justify-between items-center md:items-start">
                <div className="space-y-4 text-center md:text-left mb-4 md:mb-0">
                  <div>
                    <h2 className="text-xl md:text-2xl font-bold text-gray-800">
                      {resident.name}
                    </h2>
                    <p className="text-green-500 font-medium">
                      Age: {resident.age} years
                    </p>
                  </div>

                  <div className="space-y-2 md:space-y-4">
                    <div className="flex items-center text-gray-600">
                      <MapPin className="w-5 h-5 mr-3 text-green-500 shrink-0" />
                      <span>Room {resident.roomNumber}</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <Calendar className="w-5 h-5 mr-3 text-green-500 shrink-0" />
                      <span>Admitted: {resident.admissionDate}</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <Phone className="w-5 h-5 mr-3 text-green-500 shrink-0" />
                      <span>{resident.phone}</span>
                    </div>
                  </div>
                </div>

                <div className="w-24 h-24 md:w-36 md:h-36 rounded-xl border-2 border-green-500 overflow-hidden">
                  <img
                    src={resident.photo || "/placeholder.svg"}
                    alt={resident.name}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>

            <div className="p-4 bg-green-50 text-center text-gray-800">
              ID: {resident.id}
            </div>
          </Card>

          {/* Information Sections */}
          <Card className="lg:col-span-2 hover:shadow-xl transition-shadow duration-300">
            <div className="p-4 md:p-6">
              <ScrollArea className="h-[calc(100vh-12rem)] md:h-[calc(100vh-16rem)]">
                <div className="space-y-4 md:space-y-6">
                  {[
                    {
                      title: "Reports",
                      icon: FileText,
                      content: resident.reports,
                      key: "reports",
                    },
                    {
                      title: "Health Conditions",
                      icon: Activity,
                      content: resident.healthConditions,
                      key: "healthConditions",
                    },
                    {
                      title: "Medications",
                      icon: Pill,
                      content: resident.medications,
                      key: "medications",
                    },
                  ].map((section) => (
                    <motion.div
                      key={section.key}
                      className="bg-gray-50 rounded-xl overflow-hidden">
                      <Button
                        onClick={() => toggleSection(section.key)}
                        className="w-full px-4 md:px-6 py-3 md:py-4 flex justify-between items-center hover:bg-gray-100 transition-colors duration-200">
                        <div className="flex items-center">
                          <section.icon className="w-5 h-5 md:w-6 md:h-6 text-green-600 mr-2" />
                          <span className="text-base md:text-lg font-medium text-gray-800">
                            {section.title}
                          </span>
                        </div>
                        {activeSection === section.key ? (
                          <ChevronUp className="text-green-600" />
                        ) : (
                          <ChevronDown className="text-green-600" />
                        )}
                      </Button>
                      <AnimatePresence>
                        {activeSection === section.key && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.3 }}
                            className="px-4 md:px-6 py-3 md:py-4">
                            {section.key === "reports" &&
                              section.content.map((report, index) => (
                                <div
                                  key={index}
                                  className="mb-3 md:mb-4 last:mb-0 p-3 md:p-4 bg-white rounded-lg shadow">
                                  <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
                                    <h4 className="font-semibold text-green-800 mb-2 md:mb-0">
                                      {report.date} - {report.type}
                                    </h4>
                                    <a
                                      href={report.pdfUrl}
                                      target="_blank"
                                      rel="noopener noreferrer"
                                      className="flex items-center text-green-600 hover:text-green-800 transition-colors">
                                      View PDF{" "}
                                      <ExternalLink className="ml-1 w-4 h-4" />
                                    </a>
                                  </div>
                                </div>
                              ))}
                            {section.key === "healthConditions" && (
                              <ul className="list-disc list-inside">
                                {section.content.map((condition, index) => (
                                  <li
                                    key={index}
                                    className="text-gray-600 mb-2">
                                    {condition}
                                  </li>
                                ))}
                              </ul>
                            )}
                            {section.key === "medications" &&
                              section.content.map((medication, index) => (
                                <div
                                  key={index}
                                  className="mb-3 md:mb-4 last:mb-0 p-3 md:p-4 bg-white rounded-lg shadow">
                                  <h4 className="font-semibold text-green-800">
                                    {medication.name}
                                  </h4>
                                  <p className="text-gray-600">
                                    Dosage: {medication.dosage}
                                  </p>
                                  <p className="text-gray-600">
                                    Frequency: {medication.frequency}
                                  </p>
                                </div>
                              ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </motion.div>
                  ))}
                </div>
              </ScrollArea>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default FamilyMemberView;
