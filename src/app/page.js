"use client";
import { useNotification } from "@/store/hooks/useNotification";

export default function page() {
  const { pushNotification } = useNotification();

  const handleError = () => {
    pushNotification({
      message: "Failed to load data!",
      type: "error",
      action: {
        label: "Retry",
        callback: () => alert("Retrying..."),
      },
    });
  };

  const handleSuccess = () => {
    pushNotification({
      message: "Data loaded successfully!",
      type: "success",
    });
  };

  return (
    <div className="space-x-4">
      <button onClick={handleError} className="btn bg-red-500 text-white">
        Show Error
      </button>
      <button onClick={handleSuccess} className="btn bg-green-500 text-white">
        Show Success
      </button>
    </div>
  );
}
