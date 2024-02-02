import React, { ReactNode } from 'react';

export interface EditData {
    scale?: number;
    getScaleRender?:  (scale:number)=>ReactNode;
    /**
   * @description
   * @default 10
   */
    scaleSplitCount?: number;
}