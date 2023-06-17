// export class AuthServiceMock implements AuthService {
//   public async signin(dto: AuthDto): Promise<Tokens> {}

//   public async signup(dto: CreateUserDto): Promise<Tokens> {}

//   public async logout(id: number): Promise<void> {}

//   public async refresh(id: number, rt: string): Promise<Tokens> {}

//   public async updateToken(id: number, rt: string): Promise<void> {}

//   private async _getTokens(id: number, email: string): Promise<Tokens> {
//     const [at, rt] = await Promise.all([
//       this.jwtService.signAsync(
//         { sub: id, email },
//         { expiresIn: 15 * 60, secret: this.configService.get('jwt_at_secret') },
//       ),
//       this.jwtService.signAsync(
//         { sub: id, email },
//         {
//           expiresIn: 60 * 60 * 7,
//           secret: this.configService.get('jwt_rt_secret'),
//         },
//       ),
//     ]);

//     return {
//       access_token: at,
//       refresh_token: rt,
//     };
//   }
// }
