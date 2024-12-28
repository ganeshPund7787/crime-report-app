import { FileText, CheckCircle, Mail } from "lucide-react";

const HowItWorks = () => {
  return (
    <div className="h-full mt-20 bg-black flex items-center justify-center">
      <div className="max-w-4xl mx-auto p-6 bg-gray-900 rounded-lg shadow-lg">
        <h1 className="text-4xl font-bold text-center bg-gradient-to-r from-cyan-500 to-blue-500 bg-clip-text text-transparent mb-6">
          How It Works
        </h1>
        <div className="space-y-8">
          <div className="flex items-start">
            <div className="bg-blue-500 text-white p-4 rounded-full shadow-lg">
              <FileText className="w-8 h-8" />
            </div>
            <div className="ml-4">
              <h2 className="text-2xl font-semibold text-white">
                Submit the Report
              </h2>
              <p className="text-gray-400">
                Fill in the required details and submit your report through the
                form provided. Make sure to include all necessary information
                for proper action.
              </p>
            </div>
          </div>

          <div className="flex items-start">
            <div className="bg-green-500 text-white p-4 rounded-full shadow-lg">
              <CheckCircle className="w-8 h-8" />
            </div>
            <div className="ml-4">
              <h2 className="text-2xl font-semibold text-white">
                Check Status
              </h2>
              <p className="text-gray-400">
                Use the unique Report ID provided after submission to check the
                status of your report at any time.
              </p>
            </div>
          </div>

          <div className="flex items-start">
            <div className="bg-yellow-500 text-white p-4 rounded-full shadow-lg">
              <Mail className="w-8 h-8" />
            </div>
            <div className="ml-4">
              <h2 className="text-2xl font-semibold text-white">
                Admin Notification
              </h2>
              <p className="text-gray-400">
                Your report and details will be sent to the admin via email for
                further review and action.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
