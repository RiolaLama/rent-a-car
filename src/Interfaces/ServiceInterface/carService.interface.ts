import { CreateCarDto } from "src/Car/dtos/createCar.dto";
import { UpdateCarDto } from "src/Car/dtos/updateCar.dto";
import { Car } from "src/Entities/car.entity";
import { User } from "src/Entities/user.entity";

export const carService = 'CarServiceInterface'
export interface CarServiceInterface {
    createCar(createCarDto: CreateCarDto, user: User)
    findOneCar(id: number, user: User)
    find(attrs: Partial<Car>, user: User)
    updateCar(id: number, updateCarDto: UpdateCarDto, user: User)
    removeCar(id: number, user: User)
}