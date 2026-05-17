import { env } from '$env/dynamic/private';

export async function sendSMS(recipient: string, message: string) {
	if (!env.ARKESEL_API_KEY) {
		console.warn('ARKESEL_API_KEY is not set. SMS skipped.');
		return;
	}

	const url = 'https://sms.arkesel.com/api/v2/sms/send';
	const sender = env.ARKESEL_SENDER_ID || 'RealView';

	try {
		const response = await fetch(url, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				'api-key': env.ARKESEL_API_KEY
			},
			body: JSON.stringify({
				sender,
				message,
				recipients: [recipient]
			})
		});

		const data = await response.json();
		
		if (response.ok) {
			console.log('SMS sent successfully via Arkesel:', data);
		} else {
			console.error('Arkesel API Error:', data);
		}
		
		return data;
	} catch (error) {
		console.error('Failed to send SMS:', error);
	}
}
