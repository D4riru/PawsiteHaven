export interface AuthFormData {
  email: string;
  phone?: string;
  birthday?: string;
  password?: string;
}

export interface AdoptionFormData {
  // ID Section
  idType: string;
  idNumber: string;
  idPhoto?: File;

  // Personal Info
  firstName: string;
  middleName: string;
  lastName: string;
  gender: string;
  dateOfBirth: string;
  age: string;

  // Companion Selection
  petStore: string;
  petId: string;
  petName: string;
  reasonForAdoption: string;
}

export interface Pet {
  id: string;
  name: string;
  store: string;
  image?: string;
  type: string;
  breed?: string;
}

export interface User {
  id: string;
  email: string;
  firstName?: string;
  lastName?: string;
  phone?: string;
}
