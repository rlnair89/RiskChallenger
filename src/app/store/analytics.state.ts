export interface AnalyticsState {
    parcelData: Array<{ weight: number; deliveryTime: number; status: string }>;
    isLoading: boolean;
  }
  
  export const initialState: AnalyticsState = {
    parcelData: [],
    isLoading: false,
  };
  