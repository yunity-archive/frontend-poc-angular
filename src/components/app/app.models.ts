export interface GroupDetail {
  id: number;
  name: string;
  address: string;
  public_description: string;
  latitude: number;
  longitude: number;
  protected: boolean;
  members: number[];
}
