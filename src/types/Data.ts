/* {
  "id": "0032a1b5-8b30-4e10-a27c-3bd818d2f376",
  "premium": true,
  "details": {
    "name": "Copo Descartável",
    "description": "Copo descartável para café"
  }
} */

export interface Data {
  id: string;
  premium: boolean;
  details: {
    name: string;
    description: string;
  };
}
