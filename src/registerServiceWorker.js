/* eslint-disable no-console */

navigator.serviceWorker.getRegistrations().then(function(registrations) {
	for (let registration of registrations) {
		registration.unregister();
	}
});

/*
import { register } from "register-service-worker";

if (process.env.NODE_ENV === "production") {
	register(`${process.env.BASE_URL}service-worker.js`, {
		ready() {
			console.log(
				"App is being served from cache by a service worker.\n" + "For more details, visit https://goo.gl/AFskqB"
			);
		},
		registered() {
			console.log("Service worker has been registered.");
		},
		cached() {
			console.log("Content has been cached for offline use.");
		},
		updatefound() {
			console.log("New content is downloading.");
		},
		updated() {
			console.log("New content is available; please refresh.");
			try {
				setTimeout(() => {
					window.alert("New version available! Please restart browser to update KARL.");
				}, 500);
			} catch (e) {
				console.log(e);
			}
		},
		offline() {
			console.log("No internet connection found. App is running in offline mode.");
		},
		error(error) {
			console.error("Error during service worker registration:", error);
		}
	});
}
*/