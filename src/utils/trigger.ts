export const trigger = <T>(eventType: EventTypes, data?: T) => {
  const event = new CustomEvent(eventType.valueOf(), { detail: data });
  document.dispatchEvent(event);
};

export enum EventTypes {
  CONFIRM_ANSWER = 'confirmAnswer',
  STOP_TIMER = 'stopTimer',
}
