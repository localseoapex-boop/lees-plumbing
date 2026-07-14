/**
 * contact.ts — contact form delivery configuration.
 *
 * The webhook endpoint lives HERE and nowhere else. The component imports it,
 * so the URL is written down exactly once.
 *
 * THIS IS NOT A SECRET, and it must not be treated as one. The form submits
 * straight from the visitor's browser, so this URL is necessarily present in the
 * JavaScript that ships to every visitor and can be read by anyone who opens
 * devtools. That is inherent to a browser-submitted webhook, not a mistake. What
 * it means in practice is that anyone can POST to this endpoint, so ALL real
 * trust decisions have to be made on the Activepieces side (see the flow-side
 * requirements documented in ContactForm.astro). The browser-side measures are
 * friction against casual bots, not security.
 *
 * The URL is deliberately never rendered into visible page copy.
 */
export const CONTACT_FORM = {
  /** Activepieces webhook. Receives a JSON POST from the browser. */
  webhookUrl: 'https://cloud.activepieces.com/api/v1/webhooks/Gjvuts6FehcHfgsaW2hmk',

  /**
   * A human filling in six fields cannot do it in under three seconds. A form
   * completed faster than this is almost certainly automated, so the submission
   * is refused. This is a heuristic and nothing more: a patient bot simply
   * waits. It costs a real user nothing, which is why it is worth having.
   */
  minimumCompletionTimeMs: 3000,

  /**
   * Give up on the request after this long. Without a timeout a flaky network
   * leaves the button stuck on "Sending..." forever, and the visitor has no idea
   * whether their message went anywhere.
   */
  requestTimeoutMs: 12000,

  /** Identifies the origin of the lead inside the Activepieces flow. */
  source: "Lee's Plumbing Website",
} as const;
