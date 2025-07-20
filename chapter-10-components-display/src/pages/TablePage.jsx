import Table from "../components/Table";

const TablePage = () => {
  // The Table component can receive 3 properties per column that dictate the data that is displayed:
  // - label: the label of the header of a column
  // - render: a function that defines what data what is going to be rendered
  // on each cell for that column
  // - sort: a function that defines how that columns' data can be sorted by

  const config = [
    { label: "Name", render: (fruit) => fruit.name },
    {
      label: "Color",
      render: (fruit) => <div className={`p-3 m-2 ${fruit.color}`} />,
    },
    { label: "Quantity", render: (fruit) => fruit.quantity },
  ];

  const data = [
    { name: "Orange", color: "bg-orange-500", quantity: 5 },
    { name: "Apple", color: "bg-red-300", quantity: 4 },
    { name: "Banana", color: "bg-yellow-500", quantity: 1 },
    { name: "Lime", color: "bg-green-500", quantity: 3 },
  ];

  return (
    <div>
      <Table config={config} data={data}></Table>
    </div>
  );
};

export default TablePage;
