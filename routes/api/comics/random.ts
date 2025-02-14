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

        const myHeaders = new Headers({
            "Access-Control-Allow-Origin":  "http://localhost:8000",
            "Access-Control-Allow-Methods": "POST",
            "Access-Control-Allow-Headers": "Content-Type, Authorization",
            "accept": "application/json",
        });

        return new Response(comic, {
            headers: myHeaders,
        });
    },
};
