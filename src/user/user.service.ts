import { HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from "typeorm";
import { Userlogin } from 'src/entities/Userlogin';
import { LoginDTO } from './dto/userLogin.dto';
import { SignUpDTO } from './dto/userSignup.dto';
import { UserInfo } from 'src/entities/Userinfo';
import { DBSequenceService } from 'src/dbService.service';

@Injectable()
export class UserService {
    constructor(
        @InjectRepository(Userlogin)
        private userLoginRepository: Repository<typeof Userlogin>,
        @InjectRepository(UserInfo)
        private userInfoRepository: Repository<typeof UserInfo>,
        private readonly dbSequenceService: DBSequenceService
      ) {}

      async findAllUsers() {
        let response = {};
        try {
          let allUsers = await this.userLoginRepository.find({
            select:{
                EMAIL:true,
                PASSWORD:true
            } as unknown
        });
        response = {
            status: "SUCCESS",
            message: "Users Found",
            httpStatus: HttpStatus.FOUND,
            data: allUsers,
          };
          return response;
          
        } catch (error) {
            console.log(error)
          response = {
            status: "FAILURE",
            message: "Exception Occured",
            httpStatus: HttpStatus.BAD_REQUEST,
            data: [],
          };
          return error;
        }
      }

      async loginUser(loginDTO:LoginDTO){
        let response = {};
        try {
            let user = await this.userLoginRepository.findOne({
                where:{
                    EMAIL:loginDTO.EMAIL,
                    PASSWORD:loginDTO.PASSWORD
                }as unknown,
                select:{
                    EMAIL:true,
                    PASSWORD:true
                } as unknown
            });


            if(user)
            {
                
                response = {
                    status: "SUCCESS",
                    message: "User Found",
                    httpStatus: HttpStatus.FOUND,
                    data: user,
                  };
                  return response;
            }
            else{
                response = {
                    status: "FAILURE",
                    message: "User Not Found",
                    httpStatus: HttpStatus.NOT_FOUND,
                    data: [],
                  };
                  return response;
            }
        }
         catch (error) {
            console.log(error)
          response = {
            status: "FAILURE",
            message: "Exception Occured",
            httpStatus: HttpStatus.BAD_REQUEST,
            data: [],
          };
          return error;
        }
      }

      async registerUser(signUpDTO:SignUpDTO){
        let response = {};
        try {

            const isUserExist = await this.userLoginRepository.find({
                where:{
                    EMAIL:signUpDTO.EMAIL
                } as unknown,   
            })

            if(isUserExist)
            {
                response = {
                    status: "FAILURE",
                    message: "User Already Exist",
                    httpStatus: HttpStatus.BAD_REQUEST,
                    data: [],
                  };
                  return response;
            }
            else
            {
                const newID =
                await this.dbSequenceService.getTableSequence(
                `userinfo_id_seq`
                );
    
               const infoPayload = {
                ID:newID,
                FIRSTNAME:signUpDTO.FIRSTNAME,
                LASTNAME:signUpDTO.LASTNAME,
                AGE:signUpDTO.AGE,
                CITY:signUpDTO.CITY,
                GENDER:signUpDTO.GENDER
               };
    
               const userInfoResponse=await this.userInfoRepository.save(infoPayload as unknown);
    
                const loginPayload={
                    EMAIL:signUpDTO.EMAIL,
                    PASSWORD:signUpDTO.PASSWORD,
                    USERID:newID
                };
                const userLoginResponse=await this.userLoginRepository.save(loginPayload as unknown);
    
                response = {
                status: "SUCCESS",
                message: "User Found",
                httpStatus: HttpStatus.FOUND,
                data: [],
                };
                return response;    
            }
      }
      catch (error) {
        console.log(error)
      }
    }

}
