import React, { FC } from "react";
import { ScrollSync } from "react-virtualized";
import { RowDnd } from "../rowRnd";
import { CommonProp } from "../interface/commonProp";
import "./style.scss";

export type CursorProps = CommonProp & {};

export const Cursor: FC<CursorProps> = () => {
  return (
    <RowDnd>
      <div className="cursor">
        <svg
          className="cursor-top"
          width="8"
          height="12"
          viewBox="0 0 8 12"
          fill="none"
        >
          <path
            d="M0 1C0 0.447715 0.447715 0 1 0H7C7.55228 0 8 0.447715 8 1V9.38197C8 9.76074 7.786 10.107 7.44721 10.2764L4.44721 11.7764C4.16569 11.9172 3.83431 11.9172 3.55279 11.7764L0.552786 10.2764C0.214002 10.107 0 9.76074 0 9.38197V1Z"
            fill="#5297FF"
          />
        </svg>
        <div className="cursor-area" />
      </div>
    </RowDnd>
  );
};
