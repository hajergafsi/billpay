export const fetchClientIP = async (): Promise<string> => {
  try {
    const requestOptions: RequestInit = {
      method: "GET",
      mode: "cors", // Ensure CORS mode
      cache: "no-cache",
      credentials: "same-origin", // Adjust as needed
      headers: {
        "Content-Type": "application/json",
        // You can add additional headers if required
      },
    };

    const response = await fetch("https://molo-molo.vercel.app/api/client-ip", {
      method: "GET",
    });
    if (!response.ok) {
      throw new Error("Failed to fetch client IP");
    }
    const data = await response.json();
    return data.ip;
  } catch (error) {
    console.error("Error fetching client IP:", error);
    throw error;
  }
};
