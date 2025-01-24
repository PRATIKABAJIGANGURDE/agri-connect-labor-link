import { useState } from "react";
import { Button } from "./ui/button";
import { useToast } from "./ui/use-toast";
import { MapPin } from "lucide-react";

const LocationSearch = ({ onLocationSet }: { onLocationSet: () => void }) => {
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);

  const handleGetLocation = () => {
    setIsLoading(true);
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          toast({
            title: "Location Found",
            description: "Showing jobs near you",
          });
          setIsLoading(false);
          onLocationSet();
        },
        (error) => {
          toast({
            title: "Error",
            description: "Could not get your location. Please try again.",
            variant: "destructive",
          });
          setIsLoading(false);
        }
      );
    } else {
      toast({
        title: "Error",
        description: "Location services not supported by your browser",
        variant: "destructive",
      });
      setIsLoading(false);
    }
  };

  return (
    <div className="space-y-4 animate-fadeIn">
      <div className="flex flex-col items-center gap-4 p-6 bg-white rounded-lg shadow-sm">
        <MapPin className="h-12 w-12 text-agri-brown" />
        <h2 className="text-xl font-semibold text-agri-text">Find Jobs Near You</h2>
        <p className="text-center text-gray-600">
          Allow location access to see available work in your area
        </p>
        <Button
          onClick={handleGetLocation}
          disabled={isLoading}
          className="w-full max-w-xs bg-agri-brown hover:bg-agri-brown/90 text-white"
        >
          {isLoading ? "Getting Location..." : "Use My Location"}
        </Button>
      </div>
    </div>
  );
};

export default LocationSearch;