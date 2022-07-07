import type { RequestEvent, RequestHandler } from "@sveltejs/kit";

// Fetch the graphql api, hiding the endpoint behind the server
export const post = async ({ request }: RequestEvent) => {
  const { query, variables } = (await request.json()) as {
    query: string;
    variables: Record<string, unknown>;
  };

  const res = await fetch("https://graphql.anilist.co", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({
      query,
      variables,
    }),
  });

  const { data } = (await res.json()) as { data: Record<string, unknown> };

  return { status: 200, body: JSON.stringify({ ...data }) };
};
