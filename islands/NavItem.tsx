import { JSX } from "preact/jsx-runtime";
import * as Preact from "preact";

//import { Partial } from "$fresh/runtime.ts";

const SPRING_TARGET = 5;

function springv(x: number, xv: number, a: number, b: number, target=0){
    xv *= a;
    xv += (target-x) * b;

    return xv;
}

// deno-lint-ignore no-explicit-any
function interactivify(r: Preact.RefObject<any>): JSX.Element{
    const n = r.current.querySelectorAll(".nav-item-name")[0];

    // deno-lint-ignore no-explicit-any
    function animate(spring: any, e: any){
        function a() {
            const mediaQuery = globalThis.matchMedia('(max-width: 500px)');
            if (mediaQuery.matches) {
                e.style.marginBottom = SPRING_TARGET + "px";

                return;
            }

            spring[1] = springv.apply(null, spring);
            spring[0] += spring[1];

            e.style.marginBottom = (SPRING_TARGET + spring[0]) + "px";

            if (Math.abs(spring[1]) > 0.0000001) {
                globalThis.requestAnimationFrame(a);
            }
        }

        a();
    }

    // boingy
    r.current.addEventListener("mouseenter", function(){
        const spring: [number, number, number, number, number] = [0, 0, 0.8, 0.2, 10];

        animate(spring, n);
    });
    r.current.addEventListener("mouseleave", function(){
        const spring: [number, number, number, number, number] = [10, 0, 0.8, 0.2, 0];

        animate(spring, n);
    });

    return n;
}

export default class NavItem extends Preact.Component {
    ref = Preact.createRef();

    override componentDidMount(){
        interactivify(this.ref);
    }

    // TODO instead of props being type `any`, make an interface (is that how this works?)
    // deno-lint-ignore no-explicit-any
    render(props: any, _state: object) {
        return (
            <a className="nav-item"

               href={props.link}
               ref={this.ref}

               onClick={props.onClick}
            >
                <div className="nav-item-top"></div>
                <div
                    className={"nav-item-name" + (props.active ? " active" : "")}
                >
                    {props.children}
                </div>
            </a>
        );
    }
}
