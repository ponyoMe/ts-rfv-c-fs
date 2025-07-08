import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Users } from './users.entity';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcrypt'
import { hash } from 'crypto';

@Injectable()
export class AuthService {
    constructor(
        @InjectRepository(Users)
        private userRepo : Repository<Users>
    ){}

    async register(name:string, email:string, password:string) {
        
        const exists = await this.userRepo.findOneBy({email})
        if(exists) throw new BadRequestException('email already in use')

        const hashed = await bcrypt.hash(password,10)
        const user = this.userRepo.create({name, email, password:hashed})
        return this.userRepo.save(user)
    }

    async login(email:string, password:string){
        const user = await this.userRepo.findOneBy({email})
        if(!user) throw new BadRequestException('Bad credentials')
           
        const isMatch = await bcrypt.compare(password, user.password)
        if(!isMatch) throw new BadRequestException('Bad credentials')  
           
        return {id: user.id,name:user.name, email : user.email}    
    }
}
