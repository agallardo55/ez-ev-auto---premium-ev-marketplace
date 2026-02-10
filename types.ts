
export interface EVVehicle {
  id: string;
  make: string;
  model: string;
  year: number;
  price: number;
  range: number;
  acceleration: string;
  topSpeed: number;
  batterySize: string;
  image: string;
  category: 'Sedan' | 'SUV' | 'Performance' | 'Truck';
}

export interface ChatMessage {
  role: 'user' | 'model';
  content: string;
}
