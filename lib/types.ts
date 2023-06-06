export type NetworkConfig = {
  [key in string]?: {
    address: string;
    blockNumber: number;
    blockHash: string;
  };
};
