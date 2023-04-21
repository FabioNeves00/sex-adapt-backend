import { ConfigService } from "@nestjs/config";
import { app } from "src/main";

export async function isApiKeyValid(key: string, keyType: 'DEV' | 'CLIENT') {
  const configService: ConfigService = (await app).get<ConfigService>(ConfigService);
  return key === configService.get(`API_${keyType}_KEY`);
}
