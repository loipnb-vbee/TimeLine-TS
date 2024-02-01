import React from "react";
import { Grid, GridCellRenderer } from "react-virtualized";
import "./style.scss";

export const TimeArea = () => {
  const cellRenderer: GridCellRenderer = ({ columnIndex, key, style }) => {
    const classNames = ["time-unit"];
    if (columnIndex) classNames.push("time-unit-big");
    return (
      <div key={key} style={style} className={classNames.join(" ")}>
        <div className="time-unit-scale">{columnIndex}</div>
      </div>
    );
  };

  return (
    <div className="time-area">
      <Grid
        columnCount={100}
        columnWidth={30}
        rowCount={1}
        rowHeight={50}
        width={1000}
        height={50}
        overscanRowCount={0} // tranhs truowng hop ko load kip khi scroll
        overscanColumnCount={10} // giam thieu truowng hop khong load kip cac item khi keo sang trai
        cellRenderer={cellRenderer}
      />
    </div>
  );
};
