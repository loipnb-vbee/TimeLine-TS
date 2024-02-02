import React, { FC } from "react";
import {
  Grid,
  GridCellRenderer,
  AutoSizer,
  OnScrollParams,
} from "react-virtualized";
import { DEFAULT_SCALE_SPLIT_COUNT } from "../../constants";
import { CommonProp } from "../interface/commonProp";
import "./style.scss";

export type TimeAreaProps = CommonProp & {};

export const TimeArea: FC<TimeAreaProps> = ({
  scaleSplitCount = DEFAULT_SCALE_SPLIT_COUNT,
  getScaleRender,
}) => {
  const showUnit = scaleSplitCount > 0;

  const cellRenderer: GridCellRenderer = ({ columnIndex, key, style }) => {
    const isShowScale = showUnit ? columnIndex % scaleSplitCount === 0 : true;
    const classNames = ["time-unit"];
    if (isShowScale) classNames.push("time-unit-big");
    return (
      <div key={key} style={style} className={classNames.join(" ")}>
        {isShowScale && (
          <div className="time-unit-scale">
            {getScaleRender ? getScaleRender(columnIndex) : columnIndex}
          </div>
        )}
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
              width={width}
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
