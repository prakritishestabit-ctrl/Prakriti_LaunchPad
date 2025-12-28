export default function Badge({ text, status }) {
  const colors = {
    success: "bg-green-100 text-green-600",
    warning: "bg-yellow-100 text-yellow-600",
    danger: "bg-red-100 text-red-600",
  };

  return (
    <span
      className={`px-3 py-1 text-sm rounded-full ${colors[status]}`}
    >
      {text}
    </span>
  );
}
