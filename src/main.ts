/// <reference types="@types/google.maps" />
import { Company } from './Company'
import { User } from './User'

const map: HTMLElement = document.getElementById('map') as HTMLElement

const user = new User()
const company = new Company()

console.log(user)
console.log(company)

new google.maps.Map(map, {
  zoom: 1,
  center: {
    lat: 0,
    lng: 0,
  },
})
