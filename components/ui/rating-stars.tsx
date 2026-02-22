interface RatingStarsProps {
  value: number;
}

export function RatingStars({ value }: RatingStarsProps) {
  const cappedValue = Math.max(0, Math.min(5, Math.round(value)));

  return (
    <span aria-label={`Rated ${value.toFixed(1)} out of 5`} className="rating-stars">
      {Array.from({ length: 5 }).map((_, index) => (
        <span key={index} aria-hidden="true" className={index < cappedValue ? "filled" : "empty"}>
          ★
        </span>
      ))}
    </span>
  );
}
