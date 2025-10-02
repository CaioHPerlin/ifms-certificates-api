import { CanActivate, ExecutionContext, Injectable, UnauthorizedException } from "@nestjs/common";

@Injectable()
export class AuthGuard implements CanActivate {
    canActivate(context: ExecutionContext): boolean {
        const request = context.switchToHttp().getRequest();

        const token = request.headers['x-access-token'];
        
        if (token !== 'token123') {
            throw new UnauthorizedException('Invalid or missing token');
        }
        return true;
    }
}