// src/components/ApiDebug.tsx
"use client";
import { useState } from "react";
import { checkApiHealth, testApiConnection, API_BASE_URL } from "@/lib/api";

const ApiDebug = () => {
  const [isTestingApi, setIsTestingApi] = useState(false);
  const [apiStatus, setApiStatus] = useState<
    "unknown" | "healthy" | "unhealthy"
  >("unknown");
  const [testResults, setTestResults] = useState<string[]>([]);

  const runApiTest = async () => {
    setIsTestingApi(true);
    setTestResults([]);

    const results: string[] = [];

    try {
      // Test 1: Basic connectivity
      results.push(`🔍 Testing API at: ${API_BASE_URL}`);

      // Test 2: Health check
      results.push("⏳ Running health check...");
      const isHealthy = await checkApiHealth();

      if (isHealthy) {
        results.push("✅ Health check passed");
        setApiStatus("healthy");
      } else {
        results.push("❌ Health check failed");
        setApiStatus("unhealthy");
      }

      // Test 3: Test endpoints
      if (isHealthy) {
        results.push("⏳ Testing registration endpoint...");

        try {
          const testRegisterResponse = await fetch(
            `${API_BASE_URL}/api/auth/register`,
            {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                name: "Test User",
                email: "test@example.com",
                password: "testpassword123",
                confirmPassword: "testpassword123",
              }),
            }
          );

          if (testRegisterResponse.ok) {
            results.push("✅ Registration endpoint is working");
          } else {
            results.push(
              `⚠️ Registration endpoint returned: ${testRegisterResponse.status}`
            );
          }
        } catch (error: any) {
          results.push(`❌ Registration endpoint error: ${error.message}`);
        }
      }
    } catch (error: any) {
      results.push(`❌ API test failed: ${error.message}`);
      setApiStatus("unhealthy");
    } finally {
      setTestResults(results);
      setIsTestingApi(false);
    }
  };

  const getStatusColor = () => {
    switch (apiStatus) {
      case "healthy":
        return "text-green-600";
      case "unhealthy":
        return "text-red-600";
      default:
        return "text-gray-600";
    }
  };

  const getStatusIcon = () => {
    switch (apiStatus) {
      case "healthy":
        return "✅";
      case "unhealthy":
        return "❌";
      default:
        return "❓";
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-4">API Debug Console</h2>

      <div className="mb-6">
        <div className="flex items-center justify-between mb-4">
          <div>
            <p className="text-gray-700">
              API Base URL:{" "}
              <code className="bg-gray-100 px-2 py-1 rounded">
                {API_BASE_URL}
              </code>
            </p>
            <p className={`flex items-center ${getStatusColor()}`}>
              Status: {getStatusIcon()}{" "}
              {apiStatus.charAt(0).toUpperCase() + apiStatus.slice(1)}
            </p>
          </div>

          <button
            onClick={runApiTest}
            disabled={isTestingApi}
            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isTestingApi ? "Testing..." : "Run API Test"}
          </button>
        </div>
      </div>

      {testResults.length > 0 && (
        <div className="mb-6">
          <h3 className="text-lg font-semibold mb-2">Test Results:</h3>
          <div className="bg-gray-100 p-4 rounded-lg max-h-60 overflow-y-auto">
            {testResults.map((result, index) => (
              <div key={index} className="mb-1 font-mono text-sm">
                {result}
              </div>
            ))}
          </div>
        </div>
      )}

      {apiStatus === "unhealthy" && (
        <div className="bg-red-50 border border-red-200 rounded-lg p-4">
          <h3 className="text-red-800 font-semibold mb-2">
            Troubleshooting Steps:
          </h3>
          <ul className="text-red-700 text-sm space-y-1 list-disc list-inside">
            <li>Make sure your API server is running on port 4000</li>
            <li>
              Check if you have installed all dependencies:{" "}
              <code>npm install</code>
            </li>
            <li>
              Verify the API server is accessible at <code>{API_BASE_URL}</code>
            </li>
            <li>Check browser console for CORS errors</li>
            <li>Ensure your .env files are properly configured</li>
          </ul>
        </div>
      )}

      <div className="mt-6 bg-blue-50 border border-blue-200 rounded-lg p-4">
        <h3 className="text-blue-800 font-semibold mb-2">
          Quick Start Commands:
        </h3>
        <div className="text-blue-700 text-sm space-y-1">
          <p>
            1. Navigate to API directory: <code>cd apps/api</code>
          </p>
          <p>
            2. Install dependencies: <code>npm install</code>
          </p>
          <p>
            3. Start the server: <code>npm run dev</code>
          </p>
          <p>
            4. Check health endpoint:{" "}
            <a
              href={`${API_BASE_URL}/api/health`}
              target="_blank"
              rel="noopener noreferrer"
              className="underline"
            >
              {API_BASE_URL}/api/health
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ApiDebug;
