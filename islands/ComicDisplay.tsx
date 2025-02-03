
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

    async comicExists(comic: number, offset: number = 0): Promise<boolean> {
        return await fetch("https://happydino.art/api/comics/" + (comic + offset))
            .then(res => res.ok);
    }

    changeComic(comic: number) {
        this.comicExists(comic)
            .then(ok => ok ? (
                globalThis.location.href = "/?c=" + comic
            ) : void 0);
    }

    nextComic() {
        this.changeComic(Number(this.state.id) + 1);
    }

    lastComic() {
        this.changeComic(Number(this.state.id) - 1);
    }

    random(){
        // deno-lint-ignore no-this-alias
        const obj = this; // this is probably not the best way to do this

        function rand(){
            fetch("https://happydino.art/api/comics/random")
                .then((r: Response) => r.text())
                .then(r =>
                    r == obj.state.id ?
                        rand.call(obj) :
                        globalThis.location.href = `/?c=${r}`
                );
        }

        rand.call(obj);
    }

    // deno-lint-ignore no-explicit-any
    override render(props: any) {
        return (
            <div className="strip">
                <ComicNav
                    last={this.lastComic.bind(this)}
                    next={this.nextComic.bind(this)}
                    random={this.random.bind(this)}
                />

                <Comic id={this.state.id}/>

                <ComicNav
                    last={this.lastComic.bind(this)}
                    next={this.nextComic.bind(this)}
                    random={this.random.bind(this)}
                />
            </div>
        );
    }
}