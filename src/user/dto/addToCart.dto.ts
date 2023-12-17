

import { IsNotEmpty, IsNumber, IsOptional, IsString } from "class-validator";
export class CartDTO {
	@IsString()
    @IsNotEmpty()
	TITLE: string
	
	@IsString()
    @IsNotEmpty()
	PRICE: string

    @IsString()
    @IsNotEmpty()
	IMAGE: string
	
	@IsString()
    @IsOptional()
	ITEMLINK: string

    @IsString()
    @IsOptional()
	DESCRIPTION: string

	@IsString()
    @IsOptional()
	SKUCODE: string

    @IsString()
    @IsNotEmpty()
	USERNAME: string
}
