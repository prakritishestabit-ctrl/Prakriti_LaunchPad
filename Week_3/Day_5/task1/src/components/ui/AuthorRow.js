import Image from "next/image";
import Badge from "./Badge";
import Button from "./Button";

export default function AuthorRow({
  author,
  functionRole,
  status,
  employed,
}) {
  return (
    <tr className="border-b">
      <td className="flex items-center gap-3 p-2">
        <Image
          src={author.avatar}
          alt={author.name}
          width={40}
          height={40}
          className="rounded-full"
        />
        <div>
          <p className="font-medium">{author.name}</p>
          <p className="text-gray-500 text-sm">{author.email}</p>
        </div>
      </td>

      <td>
        <p className="font-semibold">{functionRole.title}</p>
        <p className="text-gray-500 text-sm">{functionRole.sub}</p>
      </td>

      <td>
        <Badge color={status === "Online" ? "green" : "gray"}>
          {status}
        </Badge>
      </td>

      <td>{employed}</td>

      <td>
        <Button variant="ghost">Edit</Button>
      </td>
    </tr>
  );
}
