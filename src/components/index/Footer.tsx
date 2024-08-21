import Divider from "../Divider";

export default function Footer() {
    return (
        <>
            <footer className="max-w-4xl w-full flex flex-col mx-auto pt-4 pb-2">
                <Divider />
                <h2 className="font-leaguespartan text-center font-semibold text-base text-text pt-2">
                    sardiniaa - Made with ❤ by <a href="https://guns.lol/sardiniaa" target="_blank">sardiniaa</a>
                </h2>
            </footer>
        </>
    );
}
