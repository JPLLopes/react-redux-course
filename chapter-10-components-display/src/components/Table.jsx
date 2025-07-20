const Table = ({ data, config }) => {
  const renderedHeaders = config.map((parameter, index) => {
    return <th key={index}>{parameter.label}</th>;
  });

  const renderedRows = data.map((rowData, index) => {
    const renderedCells = config.map((parameter, paramIndex) => {
      return (
        <td key={paramIndex} className="p-2">
          {parameter.render(rowData)}
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
