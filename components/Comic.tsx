
// deno-lint-ignore no-explicit-any
export default function Comic(props: any, _state: any) {
    return props.id != undefined ? (
        <div class="strip-holder">
            <img
                src={`/comics/${props.id}.png`}
                alt="A comic; sorry, no accurate alts yet"
            />
        </div>
    ) : (
        <div>
            Loading...
        </div>
    );
}
