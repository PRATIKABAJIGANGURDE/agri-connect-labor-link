import { useToast } from "@/components/ui/use-toast";
import JobCard from "./JobCard";

const SAMPLE_JOBS = [
  {
    id: 1,
    title: "Wheat Harvesting",
    location: "Punjab Farm District",
    wage: "₹500/day",
    duration: "2 weeks",
    farmerName: "Rajesh Kumar"
  },
  {
    id: 2,
    title: "Rice Planting",
    location: "Kerala Paddy Fields",
    wage: "₹450/day",
    duration: "1 week",
    farmerName: "Arun Thomas"
  },
  {
    id: 3,
    title: "Cotton Picking",
    location: "Gujarat Cotton Belt",
    wage: "₹600/day",
    duration: "3 weeks",
    farmerName: "Amit Patel"
  }
];

const JobList = () => {
  const { toast } = useToast();

  const handleApply = () => {
    toast({
      title: "Application Submitted",
      description: "The farmer will contact you soon!",
      duration: 3000,
    });
  };

  return (
    <div className="space-y-6 animate-fadeIn">
      <h2 className="text-2xl font-semibold text-agri-text mb-8">Available Jobs</h2>
      <div className="grid gap-6">
        {SAMPLE_JOBS.map((job) => (
          <JobCard
            key={job.id}
            title={job.title}
            location={job.location}
            wage={job.wage}
            duration={job.duration}
            farmerName={job.farmerName}
            onApply={handleApply}
          />
        ))}
      </div>
    </div>
  );
};

export default JobList;