import { useState } from "react";
import UserTypeSelection from "@/components/UserTypeSelection";
import JobList from "@/components/JobList";

const Index = () => {
  const [userType, setUserType] = useState<"farmer" | "worker" | null>(null);

  return (
    <div className="min-h-screen bg-agri-green">
      <div className="container mx-auto py-12 px-4">
        <h1 className="text-4xl font-bold text-center text-agri-text mb-12">
          Agri-Labor Connect
        </h1>
        
        {!userType ? (
          <UserTypeSelection onSelect={setUserType} />
        ) : (
          <JobList />
        )}
      </div>
    </div>
  );
};

export default Index;