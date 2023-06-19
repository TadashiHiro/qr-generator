import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'io.ionic.starter',
  appName: 'QR_generator',
  webDir: 'dist',
  server: {
    androidScheme: 'https'
  }
};

export default config;
