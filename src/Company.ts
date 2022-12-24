import { faker } from '@faker-js/faker'

export class Company {
  companyName: string
  catchPhrase: string
  location: {
    lat: number
    lng: number
  }

  constructor() {
    this.companyName = faker.company.name()
    this.catchPhrase = faker.company.catchPhrase()
    this.location = {
      lat: parseFloat(faker.address.latitude()),
      lng: parseFloat(faker.address.longitude()),
    }
  }

  markerContent(): string {
    return `
      <div>
        <h1>Company: ${this.companyName}</h1>
        <h3>Catchphrase: ${this.catchPhrase}</h3>
      </div>
    `
  }
}
