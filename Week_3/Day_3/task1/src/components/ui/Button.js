export default function Button({
  children,
  variant = "primary",
  onClick,
}) {
  const base =
    "px-4 py-2 rounded-lg font-medium transition";

  const styles = {
    primary: "bg-teal-500 text-white hover:bg-teal-600",
    secondary: "bg-gray-100 text-gray-700 hover:bg-gray-200",
    danger: "bg-red-500 text-white hover:bg-red-600",
  };

  return (
    <button onClick={onClick} className={`${base} ${styles[variant]}`}>
      {children}
    </button>
  );
}

