
export default function ComicNav(props: object) {
    return (
        <div id="comic-nav">
            <button
                id="last"
                onClick={props.last}
            >
                &lt;
            </button>

            {/*<button id="random">*/}
            {/*    random*/}
            {/*</button>*/}

            <button
                id="next"
                onClick={props.next}
            >
                &gt;
            </button>
        </div>
    );
}

