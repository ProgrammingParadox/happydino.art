
export function handler(_req: Request, ctx: any): Response {
    return new Response("", {
        status: 307,
        headers: { Location: "/?c=" + ctx.params.id },
    });
}