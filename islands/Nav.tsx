
import NavItem from "./NavItem.tsx";
import * as Preact from "preact";

// TODO? better as an interface?
function _nl(name: string, link: string){
    return {
        name: name,
        link: link,
    };
}
const navLinks = [
    _nl("Home", '/'),
    _nl("Characters", '/characters'),
    _nl("About", '/about')
];

export default class Nav extends Preact.Component {
    // constructor(props: any) {
    //     super(props);
    // }

    override componentDidMount() {
        this._handleClick(globalThis.location.pathname);
    }

    _handleClick(menuItem: string) {
        this.setState({ active: menuItem });
    }

    override render() {
        return (
            <div id="nav">
                <div id="nav-top">

                </div>

                <div id="nav-bottom">
                    <div id="nav-left">
                        <img src="/images/HappyDinoLogo.png" id="logo" alt="happy dino logo"/>
                    </div>

                    <div id="nav-center">
                        {navLinks.map(navItem =>
                            <NavItem
                                link={navItem.link}

                                onClick={this._handleClick.bind(this, navItem.link)}
                                active={this.state.active == navItem.link}
                            >
                                {navItem.name}
                            </NavItem>
                        )}
                    </div>

                    <div id="nav-end">

                    </div>
                </div>
            </div>
        );
    }
}