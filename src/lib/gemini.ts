import axios from "axios";

// Helper to determine API URL based on environment
const getApiUrl = () => {
    // Use VITE_API_URL from .env if available (e.g., http://localhost:3000/api)
    const envApiUrl = import.meta.env.VITE_API_URL;
    if (envApiUrl) {
        // Ensure no double slashes if env var ends with /
        return `${envApiUrl.replace(/\/$/, '')}/ai`;
    }

    // Fallback logic
    if (import.meta.env.PROD) return "/api/ai";
    return "http://localhost:3000/api/ai";
};

const API_URL = getApiUrl();

/**
 * Chat with the AI assistant via Backend
 */
export async function chatWithAssistant(
    message: string,
    history: Array<{ role: "user" | "assistant"; content: string }>
): Promise<string> {
    try {
        const response = await axios.post(`${API_URL}/chat`, {
            message,
            history
        });

        return response.data.response;
    } catch (error) {
        console.error("Chat API error:", error);
        return "I'm sorry, I'm having trouble connecting to the server. Please try again later.";
    }
}

/**
 * Generate product description via Backend
 */
export async function generateProductDescription(
    title: string,
    category: string
): Promise<{ short: string; full: string }> {
    const fallback = {
        short: `A meticulously crafted ${category.toLowerCase()} designed for modern creators.`,
        full: `${title} is a premium ${category.toLowerCase()} designed for modern creators and professionals.\n\nThis product features high-quality assets, fully customizable layouts, and comprehensive documentation.`
    };

    try {
        const response = await axios.post(`${API_URL}/description`, {
            title,
            category
        });

        return response.data;
    } catch (error) {
        console.error("Description API error:", error);
        return fallback;
    }
}

/**
 * Generate smart tags via Backend
 */
export async function generateSmartTags(
    title: string,
    description: string
): Promise<string[]> {
    const fallbackTags = ["premium", "digital", "professional"];

    try {
        const response = await axios.post(`${API_URL}/tags`, {
            title,
            description
        });

        return response.data || fallbackTags;
    } catch (error) {
        console.error("Tags API error:", error);
        return fallbackTags;
    }
}

/**
 * Check if AI service is available
 * With backend integration, we assume it's always "available" to try
 */
export function isGeminiAvailable(): boolean {
    return true;
}
