import { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { useToast } from "./ui/use-toast";
import { Phone } from "lucide-react";

const PhoneAuth = ({ onSuccess }: { onSuccess: () => void }) => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [otp, setOtp] = useState("");
  const [showOtp, setShowOtp] = useState(false);
  const { toast } = useToast();

  const handleSendOtp = () => {
    // This is a mock implementation - will be replaced with actual OTP service
    toast({
      title: "OTP Sent",
      description: "Please check your phone for the verification code",
    });
    setShowOtp(true);
  };

  const handleVerifyOtp = () => {
    // This is a mock implementation - will be replaced with actual verification
    toast({
      title: "Success",
      description: "Phone number verified successfully",
    });
    onSuccess();
  };

  return (
    <div className="space-y-4 animate-fadeIn">
      <div className="flex flex-col items-center gap-4 p-6 bg-white rounded-lg shadow-sm">
        <Phone className="h-12 w-12 text-agri-brown" />
        <h2 className="text-xl font-semibold text-agri-text">Phone Verification</h2>
        
        {!showOtp ? (
          <>
            <Input
              type="tel"
              placeholder="Enter your phone number"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              className="max-w-xs"
            />
            <Button 
              onClick={handleSendOtp}
              className="w-full max-w-xs bg-agri-brown hover:bg-agri-brown/90 text-white"
            >
              Send OTP
            </Button>
          </>
        ) : (
          <>
            <Input
              type="text"
              placeholder="Enter OTP"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
              className="max-w-xs"
            />
            <Button 
              onClick={handleVerifyOtp}
              className="w-full max-w-xs bg-agri-brown hover:bg-agri-brown/90 text-white"
            >
              Verify OTP
            </Button>
          </>
        )}
      </div>
    </div>
  );
};

export default PhoneAuth;