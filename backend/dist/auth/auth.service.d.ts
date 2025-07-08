import { Users } from './users.entity';
import { Repository } from 'typeorm';
export declare class AuthService {
    private userRepo;
    constructor(userRepo: Repository<Users>);
    register(name: string, email: string, password: string): Promise<Users>;
    login(email: string, password: string): Promise<{
        id: number;
        name: string;
        email: string;
    }>;
}
