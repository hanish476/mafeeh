export const formatTimeAgo = (dateString) => {
  const now = new Date();
  const published = new Date(dateString);
  const diffInMs = now - published;
  const diffInSec = Math.floor(diffInMs / 1000);
  const diffInMin = Math.floor(diffInSec / 60);
  const diffInHrs = Math.floor(diffInMin / 60);
  const diffInDays = Math.floor(diffInHrs / 24);

  if (diffInSec < 15) return "Just now";
  if (diffInSec < 60) return `${diffInSec}s ago`;
  if (diffInMin < 60) return `${diffInMin}m ago`;
  if (diffInHrs < 24) return `${diffInHrs}h ago`;
  return `${diffInDays}d ago`;
};