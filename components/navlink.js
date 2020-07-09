import { useRouter } from "next/router";

function NavLink({ children, href }) {
  const router = useRouter();
  const style = {
    fontWeight: "bold",
    fontSize: "18px",
    color: router.pathname === href ? "#ffcc4d" : "white",
  };

  const handleClick = (e) => {
    e.preventDefault();
    router.push(href);
  };

  return (
    <a href={href} onClick={handleClick} style={style}>
      {children}
    </a>
  );
}

export default NavLink;
