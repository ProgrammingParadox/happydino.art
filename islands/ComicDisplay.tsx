
import * as Preact from "preact";
import Comic from "../components/Comic.tsx";

export default class ComicDisplay extends Preact.Component {
    // constructor(props: any) {
    //     super(props);
    // }

    override componentDidMount(): void {
        const params = new URLSearchParams(globalThis.location?.search);
        const id = params.get("c"); // is the number 123

        this.setState({ id });
    }

    // deno-lint-ignore no-explicit-any
    override render(props: any) {
        return (
            <Comic id={ this.state.id ?? 1 }/>
        );
    }
}