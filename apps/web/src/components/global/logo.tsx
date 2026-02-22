export default function Logo({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 600 200"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <text
        x="50%"
        y="55%"
        textAnchor="middle"
        dominantBaseline="middle"
        style={{
          fontFamily: '"Brush Script MT", "Segoe Script", cursive',
          fontSize: 120,
        }}
        fill="currentColor"
      >
        Recall
      </text>

      <path
        d="M140 150 Q300 180 460 150"
        stroke="currentColor"
        strokeWidth="6"
        fill="none"
        strokeLinecap="round"
      />
    </svg>
  );
}
