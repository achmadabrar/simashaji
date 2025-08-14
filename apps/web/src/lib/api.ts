const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:4000";

// API Health Check Function
export const checkApiHealth = async (): Promise<boolean> => {
  try {
    console.log(`Checking API health at: ${API_BASE_URL}/api/health`);

    const response = await fetch(`${API_BASE_URL}/api/health`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      // Add timeout
      signal: AbortSignal.timeout(5000), // 5 seconds
    });

    if (response.ok) {
      const data = await response.json();
      console.log("API Health Check Success:", data);
      return true;
    } else {
      console.error("API Health Check Failed - Status:", response.status);
      return false;
    }
  } catch (error) {
    console.error("API Health Check Error:", error);
    return false;
  }
};

// Enhanced fetch with debugging
export const apiRequest = async (
  endpoint: string,
  options: RequestInit = {}
): Promise<Response> => {
  const url = `${API_BASE_URL}${endpoint}`;

  console.log(`API Request: ${options.method || "GET"} ${url}`);
  console.log("Request headers:", options.headers);

  if (options.body) {
    console.log("Request body:", options.body);
  }

  try {
    const response = await fetch(url, {
      ...options,
      headers: {
        "Content-Type": "application/json",
        ...options.headers,
      },
    });

    console.log(`API Response: ${response.status} ${response.statusText}`);

    // Log response headers
    console.log(
      "Response headers:",
      Object.fromEntries(response.headers.entries())
    );

    // Check if response is HTML (usually means server error or wrong endpoint)
    const contentType = response.headers.get("content-type");
    if (contentType && contentType.includes("text/html")) {
      const htmlContent = await response.text();
      console.error(
        "Received HTML instead of JSON:",
        htmlContent.substring(0, 200) + "..."
      );
      throw new Error(
        "Server returned HTML instead of JSON. Check if API server is running correctly."
      );
    }

    return response;
  } catch (error) {
    console.error(`API Request Error for ${url}:`, error);
    throw error;
  }
};

// Test API Connection
export const testApiConnection = async (): Promise<void> => {
  console.log("=== API Connection Test ===");
  console.log("API Base URL:", API_BASE_URL);

  try {
    // Test health endpoint
    const isHealthy = await checkApiHealth();

    if (!isHealthy) {
      console.error("❌ API Health Check Failed");
      console.error("Possible issues:");
      console.error("1. API server is not running");
      console.error("2. Wrong API URL");
      console.error("3. CORS issues");
      console.error("4. Network connectivity issues");
    } else {
      console.log("✅ API Health Check Passed");
    }
  } catch (error) {
    console.error("❌ API Connection Test Failed:", error);
  }

  console.log("=== End API Test ===");
};

export { API_BASE_URL };
