import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'app.lovable.e84ee355-4cea-45d7-b169-4a8e546c7e2e',
  appName: 'Bandel',
  webDir: 'dist',
  server: {
    url: 'https://e84ee355-4cea-45d7-b169-4a8e546c7e2e.lovableproject.com?forceHideBadge=true',
    cleartext: true
  },
  plugins: {
    SplashScreen: {
      launchShowDuration: 2000,
      backgroundColor: '#3b82f6',
      showSpinner: false
    }
  }
};

export default config;