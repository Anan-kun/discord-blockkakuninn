export async function onRequestPost(context) {
  const kv = context.env.COUNTER;

  let count = Number(await kv.get("clicks")) || 0;
  count++;

  await kv.put("clicks", String(count));

  return Response.json({ clicks: count });
}

export async function onRequestGet(context) {
  const kv = context.env.COUNTER;

  let count = Number(await kv.get("clicks")) || 0;

  return Response.json({ clicks: count });
}
