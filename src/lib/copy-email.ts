export const TOAST_EVENT = "jev:copied";

/** Notifies listeners (the email button tooltip) that something was copied. */
export function toast(message: string) {
  window.dispatchEvent(new CustomEvent(TOAST_EVENT, { detail: message }));
}

/** Copies the email address; falls back to opening the mail client. */
export async function copyEmail(email: string) {
  try {
    await navigator.clipboard.writeText(email);
    toast(`Copied ${email}`);
  } catch {
    window.location.href = `mailto:${email}`;
  }
}
