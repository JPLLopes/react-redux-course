import Link from "./Link";

const Sidebar = () => {
  const links = [
    { label: "Buttons", path: "/buttons" },
    { label: "Dropdown", path: "/" },
    { label: "Accordion", path: "/accordion" },
    { label: "Modal", path: "/modal" },
  ];

  const renderedLinks = links.map((link, index) => {
    return (
      <Link
        key={index}
        to={link.path}
        className="mb-3"
        activeClassName="font-bold border-l-4 border-blue-500 pl-2"
      >
        {link.label}
      </Link>
    );
  });

  return (
    <div className="sticky top-0 flex flex-col items-start">
      {renderedLinks}
    </div>
  );
};

export default Sidebar;
