export function getEnvVar(varName: string): string {
  const value = process.env[varName];
  if (!value) {
    throw new Error(`${varName} is not defined in the environment variables`);
  }
  return value;
}
