export interface HealthPackage {
testsIncluded: any;
tests: any;
hospital: any;
price: any;
    id: number;
    name: string;
    icon: string;
    startingPrice: number;
    description?: string;
  }

   export interface Category {
      id: number;
      name: string;
      packages: HealthPackage[];
    }