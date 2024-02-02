import React, { ReactElement, useRef } from "react";
import { Interactable } from "@interactjs/types/typings";
import { RowRndApi, RowRndProps } from "../interface/rowRndInterface";

// export const RowDnd = React.forwardRef< RowRndProps>({ children }) => {
//   return (
//     <div>
//       {React.cloneElement(children as ReactElement, {
//         style: {
//           ...((children as ReactElement).props.style || {}),
//         },
//       })}
//     </div>
//   );
// };

export const RowDnd = React.forwardRef<RowRndApi, RowRndProps>( // ref=RowRndApi,props=RowRndProps
  ({ children }, ref) => {
    return (
      <div>
        {React.cloneElement(children as ReactElement, {
          style: {
            ...((children as ReactElement).props.style || {}),
          },
        })}
      </div>
    );
  }
);
