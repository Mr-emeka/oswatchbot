import dedupe from './dedupe.service'
import notify from './notification.service'

async function match(event: Record<string,any>) {
  const exists = await dedupe.exists(event.id);
  if (exists) return;

  // match against subscriptions (pseudo)
  const matchedSubscriptions:any = []; // fetch from DB

  for (const sub of matchedSubscriptions) {
    await notify.send(sub.userId, event);
  }

  await dedupe.store(event.id);
}

export default { match };
