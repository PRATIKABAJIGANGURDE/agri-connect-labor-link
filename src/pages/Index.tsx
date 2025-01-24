import { useState } from "react";
import UserTypeSelection from "@/components/UserTypeSelection";
import JobList from "@/components/JobList";
import Navigation from "@/components/Navigation";
import PhoneAuth from "@/components/PhoneAuth";
import PostWork from "@/components/PostWork";
import LocationSearch from "@/components/LocationSearch";

const Index = () => {
  const [userType, setUserType] = useState<"farmer" | "worker" | null>(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [showJobList, setShowJobList] = useState(false);

  const handleAuthSuccess = () => {
    setIsAuthenticated(true);
  };

  const handleLocationSet = () => {
    setShowJobList(true);
  };

  return (
    <div className="min-h-screen bg-agri-green">
      <Navigation />
      <div className="container mx-auto py-20 px-4">
        <h1 className="text-4xl font-bold text-center text-agri-text mb-12">
          Agri-Labor Connect
        </h1>
        
        {!isAuthenticated ? (
          <PhoneAuth onSuccess={handleAuthSuccess} />
        ) : !userType ? (
          <UserTypeSelection onSelect={setUserType} />
        ) : userType === "farmer" ? (
          <PostWork />
        ) : !showJobList ? (
          <LocationSearch onLocationSet={handleLocationSet} />
        ) : (
          <JobList />
        )}
      </div>
    </div>
  );
};

export default Index;