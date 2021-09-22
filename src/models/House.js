export class House {
  constructor(houseData = {}) {
    this.id = houseData.id
    this.bedrooms = houseData.bedrooms
    this.bathrooms = houseData.bathrooms
    this.levels = houseData.levels
    this.year = houseData.year
    this.price = houseData.price
    this.description = houseData.description
    this.img = houseData.imgUrl
    this.creatorId = houseData.creatorId
    this.creator = houseData.creator || {}
  }
}
