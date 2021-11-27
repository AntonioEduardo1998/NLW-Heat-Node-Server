import prismaClient from "../prisma";
import { ProfileUserService } from '../services/ProfileUserService';


let profileUserService: ProfileUserService

describe('ProfileUser', () => {

    beforeEach(() => {
        profileUserService = new ProfileUserService();
    })

    it('should be able to get a user profile by its ID', async () => {

        const user: any = {
            id: '1',
            name: 'Eduardo',
            github_id: 1,
            avatar_url: '',
            login: ''
        }

        jest.spyOn(prismaClient.user, 'findFirst').mockReturnValue(user);

        const result = await profileUserService.execute(user.id);

        expect(result).toBe(user);
    })
})
