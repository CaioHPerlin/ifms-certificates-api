export const StartupDateProvider = {
  provide: 'STARTUP_DATE',
  useFactory: () => new Date().toISOString(),
};