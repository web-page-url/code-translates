// Service Worker Registration
if ('serviceWorker' in navigator) {
  window.addEventListener('load', function() {
    navigator.serviceWorker.register('/sw.js')
      .then(function(registration) {
        console.log('SW registered: ', registration);
        
        // Check for updates
        registration.addEventListener('updatefound', () => {
          const newWorker = registration.installing;
          if (newWorker) {
            newWorker.addEventListener('statechange', () => {
              if (newWorker.state === 'installed' && navigator.serviceWorker.controller) {
                // New content is available, show update notification
                if (confirm('New version available! Click OK to update.')) {
                  window.location.reload();
                }
              }
            });
          }
        });
      })
      .catch(function(registrationError) {
        console.log('SW registration failed: ', registrationError);
      });
  });
}

// Handle offline/online events
window.addEventListener('online', function() {
  console.log('App is online');
  // You can show a notification that the app is back online
});

window.addEventListener('offline', function() {
  console.log('App is offline');
  // You can show a notification that the app is offline
});

// Handle app installation
let deferredPrompt;
window.addEventListener('beforeinstallprompt', (e) => {
  // Prevent Chrome 67 and earlier from automatically showing the prompt
  e.preventDefault();
  // Stash the event so it can be triggered later
  deferredPrompt = e;
});

window.addEventListener('appinstalled', (evt) => {
  console.log('App was installed');
  // Track the installation
  if (typeof gtag !== 'undefined') {
    gtag('event', 'pwa_install', {
      event_category: 'engagement',
      event_label: 'PWA Install'
    });
  }
});
