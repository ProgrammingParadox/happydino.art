import ComicDisplay from "../islands/ComicDisplay.tsx";
import { RouteConfig } from "$fresh/server.ts";

// takes
// export const config: RouteConfig = {
//     routeOverride: "/{:id}?",
// };

export default function Home(props: any, ctx: any) {
    return (
        <>
            <div id="page">
                <ComicDisplay />
            </div>
        </>
    );
}
