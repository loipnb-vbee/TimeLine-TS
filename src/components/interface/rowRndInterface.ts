export interface RowRndProps {
    width?: number;
    left?: number;
    children?: React.ReactNode;
  }

  export interface RowRndApi {
    updateWidth: (size: number) => void;
    updateLeft: (left: number) => void;
    getLeft: () => number;
    getWidth: () => number;
  }
  