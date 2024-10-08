import Image from "next/image";

const SideMenu = () => {
  return (
    <div className="drawer w-auto">
      <input id="my-drawer" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">
        <label htmlFor="my-drawer" className=" drawer-button">
          <Image
            src="/images/hamburger-icon.svg"
            className="w-10 drawer-button transition-all active:scale-125"
            alt="menu_icon"
            width={40}
            height={40}
          />
        </label>
      </div>
      <div className="drawer-side w-screen -left-6">
        <label
          htmlFor="my-drawer"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <ul className="menu p-4 w-80 min-h-full bg-base-200 pl-8 text-base-content text-xl font-sixCaps tracking-wider">
          <li>
            <a href="#works">Inicio</a>{" "}
          </li>
          <li>
            <a href="#about_me">Plataforma</a>{" "}
          </li>
          <li>
            <a href="#contact">Que hacemos</a>{" "}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SideMenu;
