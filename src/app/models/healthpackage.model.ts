export interface HealthPackage {
  id: number;
  name: string;
  testsIncluded: number;
  hospital: string;
  price: number;
  tests: string[];
  icon?: string;          // Optional property
  startingPrice?: number; // Optional property
}

  
  
  export interface Category {
    id: number;
    name: string;
    packages: HealthPackage[];
  }