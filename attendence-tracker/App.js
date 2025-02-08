import { useEffect } from "react";
import { registerForPushNotificationsAsync, configureNotifications } from "./utils/notificationUtils";
import { Slot } from "expo-router";
import { ThemeProvider } from "@rneui/themed";
import * as Notifications from "expo-notifications"; // Ensure this is imported

import '@tensorflow/tfjs-react-native'; 
import * as tf from '@tensorflow/tfjs';

useEffect(() => {
  // This loads the native TF runtime
  tf.ready().then(() => {
    console.log('TF is ready');
  });
}, []);


export default function App() {
  useEffect(() => {
    configureNotifications();

    (async () => {
      const token = await registerForPushNotificationsAsync();
      if (token) {
        console.log("Notification token registered:", token);
      }
    })();

    const subscription = Notifications.addNotificationReceivedListener(notification => {
      console.log("Notification received:", notification);
    });

    return () => subscription.remove();
  }, []);

  return (
    <ThemeProvider>
      <Slot />
    </ThemeProvider>
  );
}