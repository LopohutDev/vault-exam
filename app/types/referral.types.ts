type Address = {
  street: string;
  city: string;
  state: string;
  postalCode: string;
  country: string;
};

export interface Referral {
  givenname: string;
  surname: string;
  email: string;
  phone: string;
  address: Address;
  notes?: string;
  id?: number;
}
