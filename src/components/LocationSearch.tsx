import { useState } from "react";
import { Button } from "./ui/button";
import { useToast } from "./ui/use-toast";
import { MapPin } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

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
    <div className="w-full max-w-md mx-auto p-4 animate-fadeIn">
      <Card className="bg-white shadow-lg">
        <CardHeader className="space-y-1 flex flex-col items-center">
          <div className="w-16 h-16 bg-tech-blue/10 rounded-full flex items-center justify-center mb-4">
            <MapPin className="h-8 w-8 text-tech-blue" />
          </div>
          <CardTitle className="text-2xl font-semibold text-tech-blue">
            Find Jobs Near You
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-center text-gray-600">
            Allow location access to see available work in your area
          </p>
          <Button
            onClick={handleGetLocation}
            disabled={isLoading}
            className="w-full bg-tech-blue hover:bg-tech-blue/90 text-white"
          >
            {isLoading ? "Getting Location..." : "Use My Location"}
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default LocationSearch;