import React from "react";
import { Grid, GridCellRenderer } from "react-virtualized";

export const TimeArea = () => {
  const cellRenderer: GridCellRenderer = ({ columnIndex, key, style }) => {
    return (
      <div key={key} style={style}>
        {columnIndex}
      </div>
    );
  };

  return (
    <Grid
      columnCount={10}
      columnWidth={500}
      rowCount={1}
      rowHeight={50}
      width={1000}
      height={50}
      overscanRowCount={0} // tranhs truowng hop ko load kip khi scroll
      overscanColumnCount={10} // giam thieu truowng hop khong load kip cac item khi keo sang trai
      cellRenderer={cellRenderer}
    />
  );
};
