async function send(userId: string, event: Record<string, any>) {
  console.log(`Notify user ${userId}`, event.html_url);
}

export default { send };
