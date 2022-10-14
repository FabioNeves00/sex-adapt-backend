import { TypeOrmConfigService } from './config/typeorm/typeorm.config';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { Module } from '@nestjs/common';
import { UserModule } from './models/user/user.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './auth/auth.module';
import { APP_GUARD } from '@nestjs/core';
import { AccessTokenGuard } from '@guards/access-token.guard';
import { ReviewModule } from './models/review/review.module';
import { SuportModule } from './models/suport/suport.module';
@Module({
	imports: [
		ConfigModule.forRoot({
			isGlobal: true,
			envFilePath: ['.env.local']
		}),
		TypeOrmModule.forRootAsync({
			imports: [ConfigModule],
			inject: [ConfigService],
			useClass: TypeOrmConfigService
		}),
		UserModule,
		AuthModule,
		ReviewModule,
		SuportModule
	],
	controllers: [],
	providers: [
		{
			provide: APP_GUARD,
			useClass: AccessTokenGuard
		}
	]
})
export class AppModule { }
