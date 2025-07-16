import ButtonPage from "./pages/ButtonPage";
import Accordion from "./components/Accordion";
const App = () => {
  const items = [
    {
      key: 1,
      label: "Lorem ipsum dolor sit amet, consectetur adipiscing.",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed id dolor nec erat facilisis cursus.",
    },
    {
      key: 2,
      label: "Lorem ipsum dolor sit amet, consectetur adipiscing.",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed id dolor nec erat facilisis cursus.",
    },
    {
      key: 3,
      label: "Lorem ipsum dolor sit amet, consectetur adipiscing.",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed id dolor nec erat facilisis cursus.",
    },
  ];

  return (
    <div>
      <ButtonPage />
      <Accordion items={items} />
    </div>
  );
};

export default App;
