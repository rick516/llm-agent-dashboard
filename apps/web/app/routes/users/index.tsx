import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { PrismaClient } from "@repo/database";

const prisma = new PrismaClient();

export const loader = async () => {
  const users = await prisma.user.findMany();
  return json({ users });
};

export default function Users() {
  const { users } = useLoaderData<typeof loader>();

  return (
    <div>
      <h1>Users</h1>
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name || user.email}</li>
        ))}
      </ul>
    </div>
  );
}