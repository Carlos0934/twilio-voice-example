export function parsePhone(phone: string) {
  return "+1" + phone.replace(/\D/g, "");
}
