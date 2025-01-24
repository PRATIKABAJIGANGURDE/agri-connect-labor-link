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
    <div className="min-h-screen bg-tech-gray">
      <Navigation />
      <div className="container mx-auto pt-20 px-4 pb-8">
        <div className="max-w-4xl mx-auto">
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
    </div>
  );
};

export default Index;