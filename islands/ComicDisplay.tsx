
import * as Preact from "preact";
import Comic from "../components/Comic.tsx";
import ComicNav from "./ComicNav.tsx";

export default class ComicDisplay extends Preact.Component {
    // constructor(props: any) {
    //     super(props);
    // }

    override componentDidMount(): void {
        const params = new URLSearchParams(globalThis.location?.search);
        const id = params.get("c"); // is the number 123

        this.setState({ id: id ?? 1 });
    }

    nextComic() {
        // this.setState({
        //     id: Number(this.state.id) + 1
        // });

        globalThis.location.href = "/?c=" + (Number(this.state.id) + 1);
    }

    lastComic() {
        // this.setState({
        //     id: Number(this.state.id) - 1
        // });

        globalThis.location.href = "/?c=" + (Number(this.state.id) - 1);
    }

    randomComic() {
        // TODO!
    }

    // deno-lint-ignore no-explicit-any
    override render(props: any) {
        return (
            <div className="strip">
                <ComicNav
                    last={this.lastComic.bind(this)}
                    next={this.nextComic.bind(this)}
                />

                <Comic id={this.state.id}/>

                <ComicNav
                    last={this.lastComic.bind(this)}
                    next={this.nextComic.bind(this)}
                />
            </div>
        );
    }
}