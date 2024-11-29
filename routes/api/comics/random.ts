import { Handlers } from "$fresh/server.ts";

export const handler: Handlers = {
    async GET(_req, ctx) {
        const comics = [];
        for await (const comic of Deno.readDir(`./static/comics`)) {
            comics.push(comic);
        }

        const comic =
            comics[
                // get random index of comic
                Math.floor(
                    Math.random() * comics.length
                )
            ]

            // get the comic number/name (remove the .png or other future extensions idk)
            .name.replace(
                /(.+)\.png/, "$1"
            );

        return new Response(comic);
    },
};
