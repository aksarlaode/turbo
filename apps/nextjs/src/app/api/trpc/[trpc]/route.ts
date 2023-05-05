import { type NextRequest } from "next/server";
import { appRouter, createTRPCContext } from "@aksar/api";
import { fetchRequestHandler } from "@trpc/server/adapters/fetch";

export const runtime = "edge";

const handler = (req: NextRequest) =>
  fetchRequestHandler({
    endpoint: "/api/trpc/",
    router: appRouter,
    req: req,
    createContext: createTRPCContext,
  });

export { handler as GET, handler as POST };
