export class ClientDetails {
  constructor(
    public firstName: string,
    public lastName: string,
    public address: string,
    public country: string,
    public cardType: string,
    public cardNumber: number,
    public cvc: number,
    public expirationMonth: string,
    public expirationYear: number,
    public apartment?: string
  ) {}
}
