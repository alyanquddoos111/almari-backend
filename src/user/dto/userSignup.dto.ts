

import { IsNotEmpty, IsNumber, IsString } from "class-validator";
export class SignUpDTO {
	@IsString()
    @IsNotEmpty()
	FIRSTNAME: string
	
	@IsString()
    @IsNotEmpty()
	LASTNAME: string

    @IsNumber()
    @IsNotEmpty()
	AGE: number
	
	@IsString()
    @IsNotEmpty()
	CITY: string

    @IsString()
    @IsNotEmpty()
	GENDER: string

	@IsString()
    @IsNotEmpty()
	EMAIL: string

    @IsString()
    @IsNotEmpty()
	PASSWORD: string
}
