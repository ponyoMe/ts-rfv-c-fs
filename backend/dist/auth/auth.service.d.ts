import { Users } from './users.entity';
import { Repository } from 'typeorm';
import { JwtService } from '@nestjs/jwt';
export declare class AuthService {
    private userRepo;
    private jwtService;
    constructor(userRepo: Repository<Users>, jwtService: JwtService);
    register(name: string, email: string, password: string): Promise<Users>;
    login(email: string, password: string): Promise<{
        access_token: string;
        user: {
            id: number;
            name: string;
            email: string;
        };
    }>;
}
