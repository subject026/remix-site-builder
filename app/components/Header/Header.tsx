import Navigation from "./Navigation";

export default function Header() {
  return (
    <header className="navbar bg-base-100">
      <div className="flex-1">
        <a className="btn btn-ghost normal-case text-xl">daisyUI</a>
      </div>

      <Navigation />
    </header>
    // <header>
    //   <div className="max-w-10xl m-auto flex">
    //     <span>Logo?</span>
    //     <Navigation />
    //   </div>
    // </header>
  );
}
