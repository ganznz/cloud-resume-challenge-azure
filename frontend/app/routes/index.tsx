import type { Route } from "./+types/index";
import { Welcome } from "../welcome/welcome";

export function meta({}: Route.MetaArgs) {
    return [
        { title: "Logan Bellingham Software Developer" },
        { name: "description", content: "Welcome to my website" },
    ];
}

export default function Home() {
    return <Welcome />;
}
