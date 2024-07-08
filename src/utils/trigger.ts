import { EventTypes } from '../constants/enums.ts';

export const trigger = <T>(eventType: EventTypes, data?: T) => {
  const event = new CustomEvent(eventType.valueOf(), { detail: data });
  document.dispatchEvent(event);
};
