import React from "react";
import { Grid, GridCellRenderer, AutoSizer } from "react-virtualized";
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
      <AutoSizer>
        {({ width, height }) => {
          return (
            <Grid
              columnCount={100}
              columnWidth={30}
              rowCount={1}
              rowHeight={height}
              width={width+200}
              height={height}
              overscanRowCount={0} // tranhs truowng hop ko load kip khi scroll
              overscanColumnCount={10} // giam thieu truowng hop khong load kip cac item khi keo sang trai
              cellRenderer={cellRenderer}
            />
          );
        }}
      </AutoSizer>
    </div>
  );
};
