enum Gender {
  Female = 'Female',
  Male = 'Male',
}

export type Client = {
  id: number;
  isActive: boolean;
  picture: string;
  age: number;
  eyeColor: string;
  name: string;
  gender: Gender;
  company: string;
  email: string;
  phone: string;
  address: string;
};
