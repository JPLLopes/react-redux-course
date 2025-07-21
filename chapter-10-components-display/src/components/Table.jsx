import { Fragment } from "react";

const Table = ({ data, config }) => {
  const renderedHeaders = config.map((column, index) => {
    if (column.header) {
      return <Fragment key={index}>{column.header()}</Fragment>;
    }

    return <th key={index}>{column.label}</th>;
  });

  const renderedRows = data.map((rowData, index) => {
    const renderedCells = config.map((column, colIndex) => {
      return (
        <td key={colIndex} className="p-2">
          {column.render(rowData)}
        </td>
      );
    });

    return (
      <tr key={index} className="border-b">
        {renderedCells}
      </tr>
    );
  });

  return (
    <table className="table-auto border-spacing-2">
      <thead>
        <tr className="border-b-2">{renderedHeaders}</tr>
      </thead>
      <tbody>{renderedRows}</tbody>
    </table>
  );
};

export default Table;
