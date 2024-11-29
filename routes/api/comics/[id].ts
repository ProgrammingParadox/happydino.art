import { Handlers } from "$fresh/server.ts";

const kv = await Deno.openKv();

export const handler: Handlers = {
    async GET(_req, ctx) {
        const id = ctx.params.id;
        // const key = ["comic", id];
        // const user = (await kv.get<Comic>(key)).value!;

        return await Deno.readFile(`./static/comics/${id}.png`)
            .then(img =>
                new Response(img, { headers: {
                    "content-type": "image/png"
                }, status: 200 })
            ).catch(_ =>
                new Response(undefined, { status: 404 })
            );
    },
};