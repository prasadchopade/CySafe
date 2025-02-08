import { useEffect } from "react";
import { registerForPushNotificationsAsync, configureNotifications } from "./utils/notificationUtils";
import { Slot } from "expo-router";
import { ThemeProvider } from "@rneui/themed";
import * as Notifications from "expo-notifications"; // Ensure this is imported

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
