export function getInitialDay(): string {
  const date = new Date().toISOString().slice(0, 19).replace("T", " ");
  const broker = date.split(" ");
  return `${broker[0]} 00:00:00`;
}

export function getEndDay(): string {
  const date = new Date().toISOString().slice(0, 19).replace("T", " ");
  const broker = date.split(" ");
  return `${broker[0]} 23:59:59`;
}
