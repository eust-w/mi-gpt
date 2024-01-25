export const kEnvs: Partial<{
  MI_USER: string;
  MI_PASS: string;
  MI_DID: string;
  OPENAI_MODEL: string;
  OPENAI_API_KEY: string;
}> = process.env as any;
