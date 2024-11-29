import { Handlers } from "$fresh/server.ts";

const kv = await Deno.openKv();

export const handler: Handlers = {
    // because I don't understand typescript
    // deno-lint-ignore no-explicit-any
    async GET(_req: any, _ctx: any) {
        const comics = [];
        for await (const comic of Deno.readDir(`./static/comics`)) {
            comics.push(comic);
        }

        // Return JSON.
        return new Response(JSON.stringify(comics, null, 2), {
            headers: {
                "content-type": "application/json",
            },
        });
    },
};