import "dotenv/config";
import { defineConfig } from "prisma/config";

export default defineConfig({
  schema: "prisma/schema.prisma",
  migrations: {
    path: "prisma/migrations",
  },
  datasource: {
    // `prisma generate` does not need a live database URL, so we keep install/build
    // from failing when DATABASE_URL is not available yet.
    url: process.env.DATABASE_URL ?? "",
  },
});
