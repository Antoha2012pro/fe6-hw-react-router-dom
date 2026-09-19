export const renderStars = (rating) => {
  if (rating === null || rating === undefined) return null;

  const starsCount = Math.round(rating / 2);
  const maxStars = 5;

  return (
    <div className="flex items-center text-yellow-500 text-sm">
      {Array.from({ length: maxStars }).map((_, index) => (
        <span key={index} className="text-lg">
          {index < starsCount ? "★" : "☆"}
        </span>
      ))}
      <span className="ml-1.5 text-xs text-gray-500 font-medium">
        ({rating}/10)
      </span>
    </div>
  );
};